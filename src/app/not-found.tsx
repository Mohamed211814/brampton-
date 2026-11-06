import Link from "next/link";
import { Tv, Home, ArrowRight, HelpCircle, DollarSign } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-red-50 border border-red-200 text-red-600 flex items-center justify-center mx-auto shadow-lg shadow-red-100">
          <Tv className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold text-red-700 uppercase tracking-widest bg-red-50 border border-red-200 px-3 py-1 rounded-full">
            404 Error • Page Not Found
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Stream Channel Not Located
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            The page or guide you are looking for may have moved, had its URL updated, or is temporarily offline for maintenance.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left space-y-2 shadow-sm">
          <span className="text-xs font-bold uppercase text-slate-500 block mb-2">
            Suggested Quick Links:
          </span>
          <div className="space-y-1.5 text-xs">
            <Link
              href="/"
              className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-100 text-slate-700 hover:text-slate-950 transition-colors"
            >
              <span className="flex items-center gap-2">
                <Home className="w-3.5 h-3.5 text-red-600" />
                IPTV Brampton
              </span>
              <ArrowRight className="w-3.5 h-3.5 opacity-50" />
            </Link>
            <Link
              href="/#pricing"
              className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-100 text-slate-700 hover:text-slate-950 transition-colors"
            >
              <span className="flex items-center gap-2">
                <DollarSign className="w-3.5 h-3.5 text-red-600" />
                Subscription Plans (CAD)
              </span>
              <ArrowRight className="w-3.5 h-3.5 opacity-50" />
            </Link>
            <Link
              href="/iptv-brampton"
              className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-100 text-slate-700 hover:text-slate-950 transition-colors"
            >
              <span className="flex items-center gap-2">
                <Tv className="w-3.5 h-3.5 text-red-600" />
                Brampton Local Service Guide
              </span>
              <ArrowRight className="w-3.5 h-3.5 opacity-50" />
            </Link>
            <Link
              href="/#faq"
              className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-100 text-slate-700 hover:text-slate-950 transition-colors"
            >
              <span className="flex items-center gap-2">
                <HelpCircle className="w-3.5 h-3.5 text-red-600" />
                Frequently Asked Questions
              </span>
              <ArrowRight className="w-3.5 h-3.5 opacity-50" />
            </Link>
          </div>
        </div>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-red-600 hover:bg-red-700 shadow-xl shadow-red-200 transition-colors w-full cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Return to IPTV Brampton</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
