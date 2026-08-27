import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowLeft } from 'lucide-react';
import { SEO } from '../components/SEO';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEO 
        title="404 Page Not Found | The Tourism People GH"
        description="The page you were looking for could not be found."
        canonicalPath="/404"
      />

      <div className="pt-36 pb-28 min-h-[75vh] flex flex-col items-center justify-center text-center px-6 bg-slate-50">
        <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-[#0b2545] mb-6">
          <Compass className="w-8 h-8 animate-spin [animation-duration:12s]" />
        </div>

        <span className="text-xs font-mono font-bold uppercase text-amber-600 tracking-widest mb-2">
          Coordinates Not Found
        </span>

        <h1 className="font-serif font-bold text-4xl sm:text-5xl text-slate-900 mb-4">
          404 - Off the Map
        </h1>

        <p className="text-gray-500 text-sm max-w-md mx-auto mb-8 leading-relaxed">
          Looks like this travel route hasn't been charted yet. Let's get you back to the main discovery portal.
        </p>

        <div className="flex gap-4">
          <Link
            to="/"
            className="bg-[#0b2545] hover:bg-[#15345c] text-white px-6 py-3 rounded-xl text-xs font-bold transition-all flex items-center gap-2 shadow-md"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            to="/tours"
            className="bg-white border border-gray-200 text-slate-800 hover:bg-slate-50 px-6 py-3 rounded-xl text-xs font-bold transition-all"
          >
            <span>Explore Tours</span>
          </Link>
        </div>
      </div>
    </>
  );
};
