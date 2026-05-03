import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg-light flex items-center justify-center">
      <div className="text-center px-4">
        <p className="text-primary text-6xl font-extrabold mb-4">404</p>
        <h1 className="text-text-main text-2xl font-bold mb-4">Page Not Found</h1>
        <p className="text-text-muted mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist. Maybe it moved, or you followed a
          broken link.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="bg-primary text-white px-8 py-3 font-semibold hover:bg-primary-light transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="border border-primary text-primary px-8 py-3 font-semibold hover:bg-primary/5 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
