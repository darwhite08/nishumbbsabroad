import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog-posts";
import Breadcrumb from "@/components/ui/Breadcrumb";

export const metadata: Metadata = {
  title: "MBBS Abroad Blog — Guides, Tips & Country Insights for Indian Students",
  description:
    "Expert articles on MBBS abroad: FMGE preparation, country guides, fee comparisons, admission process, and life abroad — written by doctors who've been there.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const featured = blogPosts.filter((p) => p.featured);
  const rest = blogPosts.filter((p) => !p.featured);

  return (
    <>
      {/* Hero */}
      <section style={{ background: "#003366", paddingTop: "7rem", paddingBottom: "4rem" }}>
        <div className="container-custom">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
          <h1 className="text-white mb-4">MBBS Abroad Blog</h1>
          <p className="text-white/80 text-xl max-w-2xl">
            Guides, country insights, FMGE tips, and honest advice — written by doctors who have
            studied MBBS abroad themselves.
          </p>
        </div>
      </section>

      {/* Featured posts */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-text-main mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white transition-all duration-200 overflow-hidden border border-border"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-accent text-white text-xs font-semibold px-2.5 py-1">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-text-muted text-xs mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-text-main group-hover:text-primary transition-colors mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-text-muted text-sm line-clamp-2 mb-3">{post.excerpt}</p>
                  <div className="flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All posts */}
      <section className="section-padding bg-bg-light">
        <div className="container-custom">
          <h2 className="text-text-main mb-8">All Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...featured, ...rest].map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white transition-all duration-200 overflow-hidden border border-border"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="bg-primary text-white text-xs font-medium px-2 py-0.5">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-text-muted text-xs mb-2 flex items-center gap-2">
                    <span>{post.readTime}</span>
                    <span>·</span>
                    <span>By {post.author.split(" ").slice(0, 2).join(" ")}</span>
                  </p>
                  <h3 className="text-text-main group-hover:text-primary transition-colors text-base mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-text-muted text-xs line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
