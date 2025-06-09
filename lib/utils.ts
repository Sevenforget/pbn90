import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// Keep the existing imports and cn function

// Add the formatDate function
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date)
}
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
