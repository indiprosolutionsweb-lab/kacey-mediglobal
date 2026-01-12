
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Content Layout */}
        <div className="max-w-3xl mx-auto">
          
          {/* Header */}
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase mb-2">Get in Touch</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">Contact Information</h3>
            <p className="text-lg text-slate-500 mb-12">
              Have questions about our products or looking for a distribution partnership? 
              Reach out to our team directly through the channels below.
            </p>
          </div>

          {/* Contact Info Grid */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-blue-50 rounded-full">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-slate-900">Head Office</h4>
                  <p className="mt-1 text-slate-500">{COMPANY_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-blue-50 rounded-full">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-slate-900">Phone</h4>
                  <p className="mt-1 text-slate-500">{COMPANY_INFO.phone}</p>
                  <p className="mt-1 text-slate-500">{COMPANY_INFO.phone2}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-blue-50 rounded-full">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-slate-900">Email</h4>
                  <p className="mt-1 text-slate-500">{COMPANY_INFO.email}</p>
                </div>
              </div>

              <div className="flex items-start">
                 <div className="flex-shrink-0 p-3 bg-blue-50 rounded-full">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-slate-900">Business Hours</h4>
                  <p className="mt-1 text-slate-500">Monday to Sunday: 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;