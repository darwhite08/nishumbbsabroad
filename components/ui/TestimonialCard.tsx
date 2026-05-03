import Image from "next/image";
import { Star } from "lucide-react";
import { Testimonial } from "@/data/testimonials";

interface Props {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border border-border flex flex-col">
      {/* Stars */}
      <div className="flex gap-0.5 mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < testimonial.rating ? "text-accent fill-accent" : "text-gray-200 fill-gray-200"
            }`}
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-text-main text-sm leading-relaxed flex-1 mb-5">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Student info */}
      <div className="flex items-center gap-3 pt-4 border-t border-border">
        {testimonial.photo ? (
          <Image
            src={testimonial.photo}
            alt={testimonial.studentName}
            width={40}
            height={40}
            className="rounded-full object-cover w-10 h-10"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-bg-light flex items-center justify-center">
            <span className="text-primary font-bold text-sm">
              {testimonial.studentName[0]}
            </span>
          </div>
        )}
        <div>
          <p className="font-semibold text-text-main text-sm">{testimonial.studentName}</p>
          <p className="text-text-muted text-xs">
            {testimonial.currentYear} · {testimonial.university}
          </p>
          <p className="text-text-muted text-xs">
            {testimonial.country}
          </p>
        </div>
      </div>
    </div>
  );
}
