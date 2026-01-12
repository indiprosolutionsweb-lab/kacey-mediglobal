import React, { useState, useRef, useEffect, useMemo } from 'react';
import { PRODUCTS } from '../constants';
import { ProductNode } from '../types';
import { ChevronRight, ArrowLeft, Layers, X, Search } from 'lucide-react';
import Skeleton from './Skeleton';

const Products: React.FC = () => {
  const [navStack, setNavStack] = useState<ProductNode[]>([]);
  const [modalProduct, setModalProduct] = useState<ProductNode | null>(null);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const [searchQuery, setSearchQuery] = useState('');
  
  const sectionRef = useRef<HTMLElement>(null);

  // Helper to find all products for search
  const flatProducts = useMemo(() => {
    const list: ProductNode[] = [];
    const traverse = (nodes: ProductNode[]) => {
      nodes.forEach(node => {
        if (!node.isCategory) list.push(node);
        if (node.children) traverse(node.children);
      });
    };
    traverse(PRODUCTS);
    return list;
  }, []);

  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const q = searchQuery.toLowerCase();
    return flatProducts.filter(p => 
      p.name.toLowerCase().includes(q) || 
      p.description?.toLowerCase().includes(q) ||
      p.features?.some(f => f.toLowerCase().includes(q))
    );
  }, [searchQuery, flatProducts]);

  const currentView = navStack.length === 0 ? PRODUCTS : navStack[navStack.length - 1].children || [];
  
  const PRODUCT_LIST_IDS = ['B1', 'B2', 'B3', 'C1.1', 'C1.2', 'C2.1', 'C2.2', 'C2.3', 'C2.4', 'C2.5', 'D', 'E', 'G'];
  
  const getFeatureLabel = (id: string, isModal: boolean = false) => {
    if (PRODUCT_LIST_IDS.includes(id)) return 'Products:';
    return isModal ? 'Key Features:' : 'Features:';
  };

  const getMoreLabel = (id: string, count: number) => {
    const term = PRODUCT_LIST_IDS.includes(id) ? 'products' : 'features';
    return `+${count} more ${term}...`;
  };
  
  useEffect(() => {
    if (sectionRef.current && !searchQuery) {
      const yOffset = -100;
      const element = sectionRef.current;
      const rect = element.getBoundingClientRect();
      const absoluteTop = rect.top + window.scrollY;
      
      if (window.scrollY > absoluteTop + 100) {
        window.scrollTo({ top: absoluteTop + yOffset, behavior: 'smooth' });
      }
    }
  }, [navStack, searchQuery]);

  const handleNavigate = (node: ProductNode) => {
    setSearchQuery('');
    if (node.children && node.children.length > 0) {
      setNavStack([...navStack, node]);
    }
  };

  const handleBack = () => {
    setNavStack(navStack.slice(0, -1));
  };

  const resetView = () => {
    setNavStack([]);
    setSearchQuery('');
  };

  const openModal = (e: React.MouseEvent, product: ProductNode) => {
    e.stopPropagation();
    setModalProduct(product);
  };

  const closeModal = () => {
    setModalProduct(null);
  };

  const getProductImage = (node: ProductNode): string => {
    if (node.imagePlaceholder) return node.imagePlaceholder;
    if (node.children && node.children.length > 0 && node.children[0].imagePlaceholder) {
        return node.children[0].imagePlaceholder;
    }
    return "https://via.placeholder.com/400?text=Kacey+Mediglobal";
  };

  const getImageClass = (imageUrl: string, hasChildren: boolean) => {
     const isTechnicalImage = imageUrl.includes('githubusercontent') || imageUrl.includes('raw.github');
     if (!hasChildren || isTechnicalImage) {
         return 'object-contain p-4 group-hover:scale-110 transition-transform duration-500';
     }
     return 'object-cover group-hover:scale-105 transition-transform duration-500';
  };

  const handleImageLoad = (id: string) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section id="products" ref={sectionRef} className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase mb-2">Our Portfolio</h2>
          <h3 className="text-3xl font-bold text-slate-900">Product Range</h3>
          <p className="mt-2 text-slate-500">Comprehensive medical solutions for global markets.</p>
        </div>

        {/* Improved Nav/Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 bg-white p-4 rounded-xl shadow-sm border border-slate-200 sticky top-20 z-30 gap-4">
            <div className="flex items-center space-x-2 overflow-x-auto scrollbar-hide flex-1">
                <button 
                    onClick={resetView}
                    className={`text-sm font-medium ${navStack.length === 0 && !searchQuery ? 'text-blue-600 font-bold' : 'text-slate-500 hover:text-blue-600'}`}
                >
                    All Categories
                </button>
                {navStack.map((node, index) => (
                    <div key={node.id} className="flex items-center flex-shrink-0">
                        <ChevronRight className="h-4 w-4 text-slate-400 mx-1 flex-shrink-0" />
                        <button 
                            onClick={() => { setNavStack(navStack.slice(0, index + 1)); setSearchQuery(''); }}
                            className={`text-sm font-medium whitespace-nowrap ${index === navStack.length - 1 && !searchQuery ? 'text-blue-600 font-bold' : 'text-slate-500 hover:text-blue-600'}`}
                        >
                            {node.name}
                        </button>
                    </div>
                ))}
                {searchQuery && (
                  <div className="flex items-center">
                    <ChevronRight className="h-4 w-4 text-slate-400 mx-1 flex-shrink-0" />
                    <span className="text-sm font-bold text-blue-600">Search Results</span>
                  </div>
                )}
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input 
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 pr-4 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none md:w-64 w-full"
                />
              </div>
              {navStack.length > 0 && !searchQuery && (
                  <button 
                      onClick={handleBack}
                      className="flex items-center text-sm text-slate-600 hover:text-blue-600 font-medium flex-shrink-0"
                  >
                      <ArrowLeft className="h-4 w-4 mr-1" />
                      Back
                  </button>
              )}
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(searchQuery ? filteredItems : currentView)?.map((node) => {
            const hasChildren = !!(node.children && node.children.length > 0);
            const imageUrl = getProductImage(node);
            const imageClass = getImageClass(imageUrl, hasChildren);
            const isTechnical = imageUrl.includes('githubusercontent') || imageUrl.includes('raw.github');
            const isLoaded = loadedImages[node.id];
            
            return (
              <div 
                key={node.id} 
                onClick={() => hasChildren ? handleNavigate(node) : null}
                className={`bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full ${hasChildren ? 'cursor-pointer group' : ''}`}
              >
                <div className={`aspect-square sm:aspect-video md:aspect-square overflow-hidden relative border-b border-slate-50 flex items-center justify-center ${isTechnical ? 'bg-slate-50/50' : 'bg-white'}`}>
                   {!isLoaded && <Skeleton className="absolute inset-0 z-10" />}
                   {hasChildren && <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors z-10"></div>}
                  <img
                    src={imageUrl}
                    alt={node.name}
                    loading="lazy"
                    onLoad={() => handleImageLoad(node.id)}
                    className={`w-full h-full ${imageClass} ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                  />
                  {hasChildren && isLoaded && (
                    <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm text-slate-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg z-20 flex items-center border border-slate-100">
                      <Layers className="w-3 h-3 mr-1.5 text-blue-600" />
                      View Collection
                    </div>
                  )}
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{node.name}</h4>
                    {node.id && <span className="text-xs font-mono text-slate-400 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">{node.id}</span>}
                  </div>
                  <p className="text-sm text-slate-500 mb-4 flex-grow line-clamp-3">{node.description}</p>
                  
                  {!hasChildren && node.features && node.features.length > 0 && (
                    <div className="border-t border-slate-100 pt-4 mt-auto">
                      <h5 className="text-xs font-semibold text-slate-400 uppercase mb-2">
                        {getFeatureLabel(node.id)}
                      </h5>
                      <ul className="space-y-1.5">
                        {node.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="text-sm text-slate-600 flex items-start">
                            <span className="text-blue-500 mr-2 mt-1.5 text-[10px]">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                        {node.features.length > 3 && (
                          <li 
                            onClick={(e) => openModal(e, node)}
                            className="text-xs text-blue-500 font-medium pl-3 mt-2 cursor-pointer hover:underline"
                          >
                            {getMoreLabel(node.id, node.features.length - 3)}
                          </li>
                        )}
                      </ul>
                    </div>
                  )}

                  {hasChildren && (
                    <div className="mt-auto pt-4 border-t border-slate-100">
                        <span className="text-sm font-medium text-blue-600 flex items-center group-hover:translate-x-1 transition-transform">
                            Explore {node.children?.length} Sub-categories <ChevronRight className="w-4 h-4 ml-1" />
                        </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {searchQuery && filteredItems?.length === 0 && (
          <div className="text-center py-20 bg-white rounded-xl border border-dashed border-slate-300">
            <Search className="h-10 w-10 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-slate-900">No matching products found</h3>
            <p className="text-slate-500">Try searching for broader terms like "knee" or "plate".</p>
            <button onClick={() => setSearchQuery('')} className="mt-4 text-blue-600 font-bold hover:underline">Clear search</button>
          </div>
        )}
      </div>

      {modalProduct && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-xl font-bold text-slate-800">{modalProduct.name}</h3>
              <button onClick={closeModal} className="text-slate-400 hover:text-slate-600">
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-xl p-4 flex items-center justify-center border border-slate-100 aspect-square">
                  <img 
                    src={getProductImage(modalProduct)} 
                    alt={modalProduct.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div>
                  <p className="text-sm text-slate-600 mb-6 italic">{modalProduct.description}</p>
                  <h4 className="font-semibold text-slate-700 mb-3">
                    {getFeatureLabel(modalProduct.id, true)}
                  </h4>
                  <ul className="space-y-2">
                    {modalProduct.features?.map((feature, idx) => (
                      <li key={idx} className="text-sm text-slate-600 flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;