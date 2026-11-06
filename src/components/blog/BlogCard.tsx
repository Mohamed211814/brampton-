import React from "react";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { BlogPost } from "@/types";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <article
      className={`rounded-2xl bg-white border border-slate-200 hover:border-red-500 hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-sm ${
        featured
          ? "lg:col-span-2 bg-gradient-to-br from-slate-50 to-white p-6 sm:p-8"
          : "p-6"
      }`}
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-xs font-semibold text-red-700 bg-red-50 border border-red-200 px-2.5 py-1 rounded-md">
            {post.category}
          </span>
          <div className="flex items-center gap-3 text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>
        </div>

        <h3
          className={`font-bold text-slate-950 group-hover:text-red-600 transition-colors mb-3 leading-snug ${
            featured ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"
          }`}
        >
          <Link href={`/blog/${post.slug}`} className="focus:outline-none">
            {post.title}
          </Link>
        </h3>

        <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
          {post.description}
        </p>
      </div>

      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
            <User className="w-3.5 h-3.5" />
          </div>
          <span>{post.author.name}</span>
        </div>
        <Link
          href={`/blog/${post.slug}`}
          className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
        >
          <span>Read Article</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
}
