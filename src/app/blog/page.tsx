import type { Metadata } from "next";
import { BookOpen } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { BlogListClient } from "@/components/blog/BlogListClient";
import { JsonLd } from "@/components/common/JsonLd";
import { blogPosts } from "@/data/blog-posts";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "IPTV Guides, Tutorials & News | IPTV Brampton Blog",
  description:
    "Authoritative guides and tutorials on IPTV in Brampton and Canada. Learn how to configure Firestick, Smart TVs, optimize internet speed, and select the best IPTV subscription.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "IPTV Guides, Tutorials & News | IPTV Brampton Blog",
    description:
      "Authoritative guides and tutorials on IPTV in Brampton and Canada. Learn how to configure Firestick, Smart TVs, optimize internet speed, and select the best IPTV subscription.",
    url: `${siteConfig.url}/blog`,
  },
};

export default function BlogListingPage() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${siteConfig.url}/blog#collectionpage`,
    url: `${siteConfig.url}/blog`,
    name: "IPTV Guides, Tutorials & News | IPTV Brampton Blog",
    description:
      "Authoritative guides and tutorials on IPTV in Brampton and Canada. Learn how to configure Firestick, Smart TVs, optimize internet speed, and select the best IPTV subscription.",
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
    hasPart: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      url: `${siteConfig.url}/blog/${post.slug}`,
      datePublished: post.date,
      author: {
        "@type": "Person",
        name: post.author.name,
      },
    })),
  };

  return (
    <div className="py-8 sm:py-12 bg-white">
      <JsonLd data={blogSchema} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />

        {/* Hero */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Canadian Streaming Guides &amp; Insights</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            IPTV Guides, Setup Walkthroughs &amp; Analysis
          </h1>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            Practical, in-depth tutorials written by streaming technology specialists for viewers in <strong className="text-slate-950 font-semibold">Brampton, Ontario</strong> and throughout Canada. Learn how to optimize your network, configure popular players, and get the most from your subscription.
          </p>
        </div>

        {/* Interactive Search and Filterable Blog Grid */}
        <BlogListClient initialPosts={blogPosts} />
      </div>
    </div>
  );
}
