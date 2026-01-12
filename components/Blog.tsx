
import React, { useState, useRef } from 'react';
import { BLOG_POSTS } from '../constants';
import { BlogPost } from '../types';
import { ArrowRight, ChevronLeft, ChevronRight, X, Clock, Calendar } from 'lucide-react';
import Skeleton from './Skeleton';

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleImageLoad = (id: number) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section id="blog" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase mb-2">Health Insights</h2>
            <h3 className="text-3xl font-bold text-slate-900">Articles & Blogs</h3>
            <p className="mt-2 text-slate-500 max-w-2xl">Expert advice on recovery, nutrition, and maintaining an active lifestyle.</p>
          </div>
          
          <div className="hidden md:flex space-x-2">
            <button 
              onClick={() => scroll('left')} 
              className="p-2 rounded-full border border-slate-300 hover:bg-white hover:border-blue-500 hover:text-blue-600 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button 
              onClick={() => scroll('right')} 
              className="p-2 rounded-full border border-slate-300 hover:bg-white hover:border-blue-500 hover:text-blue-600 transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-8 snap-x scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
        >
          {BLOG_POSTS.map((post) => (
            <div 
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="flex-none w-[300px] md:w-[350px] bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 cursor-pointer snap-start flex flex-col h-full group"
            >
              {/* Image Container with Fixed Aspect Ratio and Skeleton */}
              <div className="aspect-video overflow-hidden rounded-t-xl relative">
                {!loadedImages[post.id] && <Skeleton className="absolute inset-0 z-10" />}
                <img 
                  src={`${post.image}&w=600&q=75&fm=webp`} 
                  alt={post.title} 
                  loading="lazy"
                  onLoad={() => handleImageLoad(post.id)}
                  className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${loadedImages[post.id] ? 'opacity-100' : 'opacity-0'}`}
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-20">
                  {post.category}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-blue-600 line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-slate-500 text-sm line-clamp-3 mb-4 flex-grow">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-blue-600 text-sm font-medium mt-auto group-hover:translate-x-1 transition-transform">
                  Read Article <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedPost && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity">
          <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col animate-in fade-in zoom-in-95 duration-200">
            
            <div className="relative h-48 sm:h-64 flex-shrink-0">
              <img 
                src={`${selectedPost.image}&w=1200&q=85&fm=webp`} 
                alt={selectedPost.title} 
                className="w-full h-full object-cover"
              />
              <button 
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-md transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6">
                <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded mb-2 inline-block">
                  {selectedPost.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                  {selectedPost.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-10 overflow-y-auto">
              <div className="prose prose-slate max-w-none">
                <div className="whitespace-pre-line text-slate-700 leading-relaxed">
                  {selectedPost.fullContent}
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-slate-100 flex justify-between items-center">
                 <span className="text-sm text-slate-400 italic">Medical Disclaimer: Always consult a professional.</span>
                 <button 
                   onClick={() => setSelectedPost(null)}
                   className="text-blue-600 font-medium hover:bg-blue-50 px-4 py-2 rounded transition-colors"
                 >
                   Close Article
                 </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;
