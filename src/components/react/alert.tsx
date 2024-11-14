import { cn } from "@/lib/utils";
import type { AlertProps } from "@/types";
import { alertVariants } from "@/types/variants";
import { type HTMLMotionProps, motion } from "framer-motion";
import {
  AlertCircle,
  AlertTriangle,
  CheckCircle2,
  Info,
  X,
} from "lucide-react";
import * as React from "react";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    const IconComponent = {
      default: AlertCircle,
      destructive: X,
      warning: AlertTriangle,
      success: CheckCircle2,
      info: Info,
    }[variant ?? "default"];

    return (
      <motion.div
        ref={ref}
        role="alert"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ type: "spring", bounce: 0.1, duration: 0.25 }}
        className={cn(alertVariants({ variant, size }), className)}
        {...(props as React.ComponentProps<typeof motion.div>)}
      >
        <IconComponent className="h-4 w-4" />
        {children}
      </motion.div>
    );
  }
);
Alert.displayName = "Alert";

type AlertDescriptionProps = HTMLMotionProps<"p"> & {
  className?: string;
};

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  AlertDescriptionProps
>(({ className, ...props }, ref) => (
  <motion.p
    ref={ref}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ type: "spring", bounce: 0.1, duration: 0.25, delay: 0.1 }}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertDescription };
