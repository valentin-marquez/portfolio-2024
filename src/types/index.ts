import type { VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";
import {
  alertVariants,
  avatarVariants,
  badgeVariants,
  cardVariants,
  tabsVariants,
} from "./variants";

export type Theme = "light" | "dark" | "system";

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  asChild?: boolean;
}

export interface AvatarProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof avatarVariants> {
  asChild?: boolean;
}

export interface BadgeProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean;
}

export interface AlertProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  asChild?: boolean;
}

export interface TabsProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tabsVariants> {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  asChild?: boolean;
}
