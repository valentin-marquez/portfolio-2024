import { cn } from "@/lib/utils";
import type { BadgeProps } from "@/types";
import { badgeVariants } from "@/types/variants";
import { motion, type HTMLMotionProps } from "framer-motion";
import * as React from "react";

const Badge = React.forwardRef<
  HTMLDivElement,
  BadgeProps & HTMLMotionProps<"div">
>(({ className, variant, size, ...props }, ref) => (
  <motion.div
    ref={ref}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ type: "spring", bounce: 0.1, duration: 0.25 }}
    className={cn(badgeVariants({ variant, size }), className)}
    {...props}
  />
));
Badge.displayName = "Badge";

export { Badge };
