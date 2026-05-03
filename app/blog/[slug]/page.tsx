import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, User, ArrowLeft, Phone } from "lucide-react";
import { blogPosts, getBlogPostBySlug } from "@/data/blog-posts";
import { whatsappLink } from "@/lib/utils";
import Breadcrumb from "@/components/ui/Breadcrumb";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  const related = blogPosts.filter(
    (p) => p.slug !== post.slug && p.category === post.category
  ).slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage,
    author: {
      "@type": "Person",
      name: post.author,
      jobTitle: post.authorRole,
    },
    publisher: {
      "@type": "Organization",
      name: "Worldwise Education",
      url: "https://nishumbbsabroad.com",
    },
    datePublished: post.publishedAt,
    mainEntityOfPage: `https://nishumbbsabroad.com/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/70 to-primary/30" />
        </div>
        <div className="relative container-custom pb-10 pt-32">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
          />
          <span className="bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 inline-block">
            {post.category}
          </span>
          <h1 className="text-white max-w-3xl">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 mt-4 text-white/70 text-sm">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              {post.author} · {post.authorRole}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Article */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            <article className="lg:col-span-3">
              <p className="text-xl text-text-muted leading-relaxed mb-8 font-medium">
                {post.excerpt}
              </p>

              {/* Mid-article CTA */}
              <div className="my-8 p-5 bg-bg-light rounded-xl border border-border flex flex-col sm:flex-row items-center gap-4">
                <div className="flex-1">
                  <p className="font-semibold text-text-main">Have questions about this topic?</p>
                  <p className="text-text-muted text-sm">
                    Talk to a doctor who has studied MBBS abroad — free, no obligation.
                  </p>
                </div>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 flex items-center gap-2 bg-success text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-green-600 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  WhatsApp Us
                </a>
              </div>

              {/* Article content */}
              <div
                className="prose prose-lg max-w-none prose-headings:text-text-main prose-headings:font-bold prose-p:text-text-muted prose-p:leading-relaxed prose-a:text-primary prose-strong:text-text-main prose-ul:text-text-muted prose-li:text-text-muted prose-table:text-sm"
                dangerouslySetInnerHTML={{ __html: mdToHtml(post.content) }}
              />

              {/* End CTA */}
              <div className="mt-10 p-6 bg-gradient-to-r from-primary to-primary-light rounded-2xl text-center">
                <h3 className="text-white font-bold text-lg mb-2">
                  Ready to Take the Next Step?
                </h3>
                <p className="text-white/80 text-sm mb-4">
                  Free counseling from doctors who have studied at the universities they recommend.
                </p>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-success text-white px-8 py-3 rounded-full font-semibold text-sm hover:bg-green-600 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  WhatsApp Us
                </a>
              </div>

              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-primary mt-8 font-medium hover:underline"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-bg-light rounded-xl p-5 border border-border">
                  <h3 className="font-bold text-text-main mb-3 text-sm">About the Author</h3>
                  <p className="font-semibold text-text-main text-sm">{post.author}</p>
                  <p className="text-text-muted text-xs mt-0.5">{post.authorRole}</p>
                </div>

                <div className="bg-success/10 border border-success/20 rounded-xl p-5">
                  <h3 className="font-bold text-text-main mb-2 text-sm">Free Counseling</h3>
                  <p className="text-text-muted text-xs mb-3">
                    Talk to a doctor who has been where you are.
                  </p>
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-success text-white px-4 py-2.5 rounded-full font-semibold text-xs hover:bg-green-600 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="section-padding bg-bg-light">
          <div className="container-custom">
            <h2 className="text-text-main mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="group block bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden border border-border"
                >
                  <div className="relative h-36 overflow-hidden">
                    <Image
                      src={rp.coverImage}
                      alt={rp.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-text-main group-hover:text-primary text-sm font-semibold line-clamp-2">
                      {rp.title}
                    </h3>
                    <p className="text-text-muted text-xs mt-1">{rp.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

// Minimal markdown → HTML converter for the blog content
function mdToHtml(md: string): string {
  return md
    .trim()
    .replace(/^#{2} (.+)$/gm, "<h2>$1</h2>")
    .replace(/^#{3} (.+)$/gm, "<h3>$1</h3>")
    .replace(/^#{4} (.+)$/gm, "<h4>$1</h4>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/`(.+?)`/g, "<code>$1</code>")
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>')
    .replace(/^\| (.+) \|$/gm, (line) => {
      const cells = line.slice(2, -2).split(" | ").map(c => c.trim());
      return `<tr>${cells.map(c => `<td>${c}</td>`).join("")}</tr>`;
    })
    .replace(/^- (.+)$/gm, "<li>$1</li>")
    .replace(/^(\d+)\. (.+)$/gm, "<li>$2</li>")
    .replace(/(<li>.*<\/li>\n?)+/g, (block) => `<ul>${block}</ul>`)
    .replace(/(<tr>.*<\/tr>\n?)+/g, (block) => `<table class="w-full border-collapse text-sm mb-4">${block}</table>`)
    .replace(/\n\n/g, "</p><p>")
    .replace(/^(?!<[htuol])(.+)$/gm, (line) => line.startsWith("<") ? line : `<p>${line}</p>`)
    .replace(/<p><\/p>/g, "");
}
