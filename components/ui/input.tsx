import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@lib/utils";

const inputVariants = cva(
  "flex w-full rounded-md border bg-teal-100 text-base ring-offset-white placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300",
  {
    variants: {
      size: {
        default: "h-10 px-3 py-2",
        sm: "h-9 px-2 py-1",
        lg: "h-11 px-4 py-3",
      },
      variant: {
        default:
          "border-neutral-200 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-950",
        outline:
          "border border-neutral-200 bg-white hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800",
        filled:
          "border border-teal-600 bg-teal-200 text-neutral-900 dark:border-teal-500 dark:bg-teal-800 dark:text-neutral-50",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "default",
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, size, variant, ...props }, ref) => {
    return (
      <input
        className={cn(inputVariants({ size, variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input, inputVariants };
