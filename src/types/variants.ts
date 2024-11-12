import { cva } from "class-variance-authority";

export const cardVariants = cva(
  "rounded-lg border bg-card text-card-foreground shadow-sm",
  {
    variants: {
      size: {
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
      },
      variant: {
        default: "bg-card",
        elevated: "shadow-lg",
        bordered: "border-2",
        ghost: "border-none shadow-none",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
);

export const avatarVariants = cva(
  "relative flex shrink-0 overflow-hidden rounded-full",
  {
    variants: {
      size: {
        xs: "h-6 w-6",
        sm: "h-8 w-8",
        md: "h-10 w-10",
        lg: "h-12 w-12",
        xl: "h-16 w-16",
      },
      border: {
        none: "",
        default: "border-2 border-background",
        accent: "border-2 border-accent",
      },
    },
    defaultVariants: {
      size: "md",
      border: "none",
    },
  }
);

export const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground border border-input hover:bg-accent/10",
      },
      size: {
        sm: "px-2 py-0.5 text-xs",
        md: "px-2.5 py-0.5 text-sm",
        lg: "px-3 py-1 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
        warning:
          "border-orange-500/50 text-orange-600 dark:text-orange-500 [&>svg]:text-orange-600",
        success:
          "border-green-500/50 text-green-600 dark:text-green-500 [&>svg]:text-green-600",
        info: "border-blue-500/50 text-blue-600 dark:text-blue-500 [&>svg]:text-blue-600",
      },
      size: {
        sm: "text-sm p-3",
        default: "text-base p-4",
        lg: "text-lg p-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export const tabsVariants = cva("w-full", {
  variants: {
    variant: {
      default: "",
      cards: "space-y-4",
      underline: "space-y-2",
    },
    size: {
      sm: "text-sm",
      default: "text-base",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});
