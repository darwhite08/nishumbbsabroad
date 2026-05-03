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
  const featuredPost = blogPosts.find((p) => p.featured) ?? blogPosts[0];
  const allPosts = blogPosts;

  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          background: "#0D0D0D",
          paddingTop: "7rem",
          paddingBottom: "5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid-line texture overlay */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(#E2E4E8 1px, transparent 1px), linear-gradient(90deg, #E2E4E8 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            opacity: 0.05,
            pointerEvents: "none",
          }}
        />

        {/* Teal left stripe */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "3px",
            height: "100%",
            background: "#00C5A3",
          }}
        />

        {/* Ghost number top-right */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "2rem",
            right: "clamp(1.5rem, 4vw, 4rem)",
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(5rem, 12vw, 9rem)",
            fontWeight: 700,
            color: "rgba(255,255,255,0.04)",
            lineHeight: 1,
            userSelect: "none",
            pointerEvents: "none",
          }}
        >
          01
        </div>

        <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />

          {/* Section label */}
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.58rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#00C5A3",
              marginBottom: "1.25rem",
              marginTop: "1rem",
            }}
          >
            MBBS Abroad Blog
          </p>

          {/* H1 */}
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 400,
              color: "#FFFFFF",
              lineHeight: 1.1,
              marginBottom: "0.5rem",
            }}
          >
            Expert guides.
          </h1>

          {/* Teal italic sub-headline */}
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.6rem, 3.2vw, 2.5rem)",
              fontStyle: "italic",
              color: "#00C5A3",
              lineHeight: 1.2,
              marginBottom: "1.5rem",
            }}
          >
            From doctors who&apos;ve been there.
          </p>

          {/* Sub text */}
          <p
            style={{
              color: "rgba(255,255,255,0.65)",
              fontSize: "1.05rem",
              maxWidth: "36rem",
              lineHeight: 1.7,
            }}
          >
            Country guides, FMGE tips, fee comparisons, and honest advice — written by doctors
            who studied MBBS abroad themselves.
          </p>
        </div>
      </section>

      {/* ── FEATURED ARTICLE ── */}
      <section style={{ background: "#F5F5F5", padding: "4rem 0" }}>
        <div className="container-custom">
          {/* Section label */}
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.58rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#00C5A3",
              marginBottom: "1.5rem",
            }}
          >
            Featured Article
          </p>

          <Link
            href={`/blog/${featuredPost.slug}`}
            style={{ textDecoration: "none", display: "block" }}
          >
            <div
              className="grid grid-cols-1 md:grid-cols-2"
              style={{ border: "1px solid #E8E8E8", background: "#FFFFFF" }}
            >
              {/* Left — image */}
              <div style={{ position: "relative", minHeight: "320px" }}>
                <Image
                  src={featuredPost.coverImage}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Right — content */}
              <div
                style={{
                  padding: "2.5rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "1rem",
                }}
              >
                {/* Category tag */}
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.58rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#00C5A3",
                    border: "1px solid #00C5A3",
                    padding: "0.25rem 0.6rem",
                    alignSelf: "flex-start",
                  }}
                >
                  {featuredPost.category}
                </span>

                {/* Title */}
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
                    fontWeight: 400,
                    color: "#0D0D0D",
                    lineHeight: 1.25,
                    margin: 0,
                  }}
                >
                  {featuredPost.title}
                </h2>

                {/* Excerpt */}
                <p
                  style={{
                    color: "#555",
                    fontSize: "0.95rem",
                    lineHeight: 1.65,
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    margin: 0,
                  }}
                >
                  {featuredPost.excerpt}
                </p>

                {/* Author + read time */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1.25rem",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    color: "#777",
                  }}
                >
                  <span>{featuredPost.author}</span>
                  <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
                    <Clock style={{ width: "12px", height: "12px" }} />
                    {featuredPost.readTime}
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
                    <Calendar style={{ width: "12px", height: "12px" }} />
                    {new Date(featuredPost.publishedAt).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>

                {/* CTA */}
                <div>
                  <span className="btn-surgical" style={{ display: "inline-flex", gap: "0.5rem" }}>
                    Read Article <ArrowRight style={{ width: "14px", height: "14px" }} />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ── ALL ARTICLES GRID ── */}
      <section style={{ background: "#FFFFFF", padding: "4rem 0 6rem" }}>
        <div className="container-custom">
          {/* Section label */}
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.58rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#00C5A3",
              marginBottom: "1.5rem",
            }}
          >
            All Articles
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 blog-grid-ruled">
            {allPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="blog-card-link"
              >
                <article className="blog-card">
                  {/* Image */}
                  <div style={{ position: "relative", height: "200px" }}>
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  {/* Content */}
                  <div style={{ padding: "1.5rem" }}>
                    {/* Category */}
                    <p
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.58rem",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "#00C5A3",
                        marginBottom: "0.75rem",
                      }}
                    >
                      {post.category}
                    </p>

                    {/* Title */}
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.15rem",
                        fontWeight: 400,
                        color: "#0D0D0D",
                        lineHeight: 1.3,
                        marginBottom: "0.6rem",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p
                      style={{
                        color: "#666",
                        fontSize: "0.85rem",
                        lineHeight: 1.6,
                        marginBottom: "1rem",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {post.excerpt}
                    </p>

                    {/* Author + read time */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.65rem",
                        color: "#999",
                        borderTop: "1px solid #F0F0F0",
                        paddingTop: "0.75rem",
                      }}
                    >
                      <span>{post.author.split(" ").slice(0, 2).join(" ")}</span>
                      <span style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                        <Clock style={{ width: "11px", height: "11px" }} />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
