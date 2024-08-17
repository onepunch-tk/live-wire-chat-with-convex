import { type ClassNameValue, twMerge } from "tailwind-merge";
import { clsx } from "clsx";

export function cn(...classNames: ClassNameValue[]) {
  return twMerge(clsx(classNames));
}
