import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Tag, ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { JsonLd } from "@/components/common/JsonLd";
import { blogPosts } from "@/data/blog-posts";
import { siteConfig } from "@/config/site";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${post.title} | IPTV Brampton`,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: post.author.name }],
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `${siteConfig.url}/blog/${post.slug}`,
      publishedTime: post.date,
      authors: [post.author.name],
      tags: post.keywords,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${siteConfig.url}/blog/${post.slug}#article`,
    headline: post.title,
    description: post.description,
    image: `${siteConfig.url}/hero-bg.jpg`,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "en-CA",
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/brand-flag.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
    keywords: post.keywords.join(", "),
  };

  return (
    <div className="py-8 sm:py-12 bg-white">
      <JsonLd data={articleSchema} />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <Breadcrumbs
          items={[
            { label: "Blog", href: "/blog" },
            { label: post.title, href: `/blog/${post.slug}` },
          ]}
        />

        {/* Article Header */}
        <header className="space-y-5 border-b border-slate-200 pb-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold text-red-700 bg-red-50 border border-red-200 px-3 py-1 rounded-md">
              {post.category}
            </span>
            <div className="flex items-center gap-4 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            {post.description}
          </p>

          <div className="pt-2 flex items-center justify-between text-xs text-slate-500">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-red-600 font-bold">
                <User className="w-4 h-4" />
              </div>
              <div>
                <span className="text-slate-950 font-bold block">{post.author.name}</span>
                <span className="text-slate-500 text-[11px]">{post.author.role}</span>
              </div>
            </div>

            <div className="flex items-center gap-1 text-red-600 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Verified Canadian Tech Guide</span>
            </div>
          </div>
        </header>

        {/* Article Body Content */}
        <div className="prose max-w-none space-y-6 text-slate-700 text-sm sm:text-base leading-relaxed">
          {post.content.split("\n\n").map((block, idx) => {
            const trimmed = block.trim();
            if (!trimmed) return null;

            // H2 Heading
            if (trimmed.startsWith("## ")) {
              return (
                <h2
                  key={idx}
                  className="text-2xl sm:text-3xl font-extrabold text-slate-950 mt-8 mb-4 pt-4 border-t border-slate-200 tracking-tight"
                >
                  {trimmed.replace("## ", "")}
                </h2>
              );
            }

            // H3 Heading
            if (trimmed.startsWith("### ")) {
              return (
                <h3
                  key={idx}
                  className="text-xl sm:text-2xl font-bold text-red-700 mt-6 mb-3"
                >
                  {trimmed.replace("### ", "")}
                </h3>
              );
            }

            // Horizontal Rule
            if (trimmed === "---") {
              return <hr key={idx} className="border-slate-200 my-8" />;
            }

            // Code / Diagram Block
            if (trimmed.startsWith("```")) {
              const codeLines = trimmed.replace(/```[a-z]*/g, "").trim();
              return (
                <pre
                  key={idx}
                  className="p-4 rounded-xl bg-slate-900 border border-slate-800 overflow-x-auto font-mono text-xs text-red-300 my-4"
                >
                  <code>{codeLines}</code>
                </pre>
              );
            }

            // Markdown Table Detection
            if (trimmed.includes("|") && trimmed.includes("\n|")) {
              const lines = trimmed.split("\n");
              const headerRow = lines[0].split("|").map((cell) => cell.trim()).filter(Boolean);
              const dataRows = lines.slice(2).map((row) =>
                row.split("|").map((cell) => cell.trim()).filter(Boolean)
              );

              return (
                <div key={idx} className="overflow-x-auto my-6 border border-slate-200 rounded-xl shadow-sm">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-slate-50 text-slate-900 font-bold border-b border-slate-200">
                      <tr>
                        {headerRow.map((h, hI) => (
                          <th key={hI} className="p-3">
                            {h.replace(/\*\*/g, "")}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 bg-white">
                      {dataRows.map((dRow, dI) => (
                        <tr key={dI} className="hover:bg-slate-50/60">
                          {dRow.map((cell, cI) => (
                            <td key={cI} className="p-3 text-slate-700">
                              {cell.replace(/\*\*/g, "")}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            }

            // Bullet Lists
            if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
              const items = trimmed.split("\n").map((line) => line.replace(/^[-*]\s*/, ""));
              return (
                <ul key={idx} className="space-y-2 list-disc list-inside text-slate-700 my-4">
                  {items.map((item, iIdx) => (
                    <li key={iIdx}>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: item
                            .replace(/\*\*(.*?)\*\*/g, "<strong class='text-slate-950 font-semibold'>$1</strong>")
                            .replace(/\[(.*?)\]\((.*?)\)/g, "<a href='$2' class='text-red-600 underline hover:text-red-700 font-medium'>$1</a>"),
                        }}
                      />
                    </li>
                  ))}
                </ul>
              );
            }

            // Numbered Lists
            if (/^\d+\.\s/.test(trimmed)) {
              const items = trimmed.split("\n").map((line) => line.replace(/^\d+\.\s*/, ""));
              return (
                <ol key={idx} className="space-y-2 list-decimal list-inside text-slate-700 my-4">
                  {items.map((item, iIdx) => (
                    <li key={iIdx}>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: item
                            .replace(/\*\*(.*?)\*\*/g, "<strong class='text-slate-950 font-semibold'>$1</strong>")
                            .replace(/\[(.*?)\]\((.*?)\)/g, "<a href='$2' class='text-red-600 underline hover:text-red-700 font-medium'>$1</a>"),
                        }}
                      />
                    </li>
                  ))}
                </ol>
              );
            }

            // Standard Paragraph
            return (
              <p
                key={idx}
                className="leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: trimmed
                    .replace(/\*\*(.*?)\*\*/g, "<strong class='text-slate-950 font-semibold'>$1</strong>")
                    .replace(/`([^`]+)`/g, "<code class='px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200 text-red-600 font-mono text-xs'>$1</code>")
                    .replace(/\[(.*?)\]\((.*?)\)/g, "<a href='$2' class='text-red-600 underline hover:text-red-700 font-semibold'>$1</a>"),
                }}
              />
            );
          })}
        </div>

        {/* Keywords / Tags Row */}
        <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-2">
          <Tag className="w-4 h-4 text-slate-400 mr-1" />
          {post.keywords.map((kw, idx) => (
            <span
              key={idx}
              className="text-xs text-slate-700 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-md"
            >
              {kw}
            </span>
          ))}
        </div>

        {/* Call-to-Action Card within Article */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 shadow-sm">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-950">
            Looking for a Reliable Canadian IPTV Subscription?
          </h3>
          <p className="text-sm text-slate-700 leading-relaxed">
            Test our service with zero long term commitment. Flexible CAD plans starting at $12.99 CAD per month with instant device configuration.
          </p>
          <div className="pt-2 flex flex-wrap gap-4">
            <Link
              href="/#pricing"
              className="px-6 py-3 rounded-xl font-bold text-sm text-white bg-red-600 hover:bg-red-700 shadow-md shadow-red-200 transition-colors"
            >
              Explore CAD Plans
            </Link>
            <Link
              href="/iptv-brampton"
              className="px-6 py-3 rounded-xl font-semibold text-sm text-white bg-slate-900 hover:bg-black transition-colors"
            >
              Brampton Local Guide
            </Link>
          </div>
        </div>

        {/* Related Articles Section */}
        {relatedPosts.length > 0 && (
          <section className="pt-10 border-t border-slate-200 space-y-6">
            <h2 className="text-2xl font-bold text-slate-950">Related Streaming Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rPost) => (
                <div
                  key={rPost.slug}
                  className="p-5 rounded-xl bg-slate-50/80 border border-slate-200 hover:border-red-500 hover:bg-white transition-all flex flex-col justify-between shadow-sm"
                >
                  <div className="space-y-2 mb-4">
                    <span className="text-[10px] font-semibold text-red-700 bg-red-50 border border-red-200 px-2 py-0.5 rounded">
                      {rPost.category}
                    </span>
                    <h3 className="text-sm font-bold text-slate-950 line-clamp-2">
                      <Link href={`/blog/${rPost.slug}`} className="hover:text-red-600">
                        {rPost.title}
                      </Link>
                    </h3>
                  </div>
                  <Link
                    href={`/blog/${rPost.slug}`}
                    className="text-xs text-red-600 hover:text-red-700 flex items-center gap-1 font-bold"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Back Link */}
        <div className="pt-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-950 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>
        </div>
      </article>
    </div>
  );
}
