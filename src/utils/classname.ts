import { extendTailwindMerge, twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

/**
 * A simple util to prevent tailwind conflicts along
 * with object-based conditional classes.
 *
 */
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(...inputs));
