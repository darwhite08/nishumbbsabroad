import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function whatsappLink(message?: string): string {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919999999999";
  const text = encodeURIComponent(
    message ?? "Hi, I'm interested in MBBS abroad. Can you guide me?"
  );
  return `https://wa.me/${number}?text=${text}`;
}

export function instagramLink(): string {
  const handle = process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE ?? "world.wiseeducation";
  return `https://www.instagram.com/${handle}/`;
}
