import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function resolveImageSrc(src?: string | null): string {
  if (!src) return '';

  const value = src.trim();
  if (!value) return '';

  if (
    /^https?:\/\//i.test(value) ||
    /^data:/i.test(value) ||
    value.startsWith('blob:') ||
    value.startsWith('/')
  ) {
    return value;
  }

  if (value.startsWith('public/')) {
    return `/${value.replace(/^public\//, '')}`;
  }

  if (value.startsWith('images/')) {
    return `/${value}`;
  }

  if (value.startsWith('./')) {
    return value.replace(/^\.\//, '/');
  }

  return `/images/${value}`;
}
