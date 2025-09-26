import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/* eslint-disable-next-line */
export function cn(...inputs: (string | undefined | boolean)[]) {
  return twMerge(clsx(inputs));
}
