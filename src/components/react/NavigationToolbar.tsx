import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";
import { navigate } from "astro:transitions/client";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./Tooltip";
import {
  BlogIcon,
  GripIcon,
  HomeIcon,
  MoonIcon,
  ProjectsIcon,
  SunIcon,
  SystemIcon,
} from "./icons";

type Position = "top" | "bottom";
type Theme = "light" | "dark" | "system";

const ANIMATIONS = {
  button: {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
    transition: { type: "spring", bounce: 0.1, duration: 0.25 },
  },
  toolbar: {
    snap: {
      type: "spring",
      bounce: 0.2,
      duration: 1,
      stiffness: 200,
      damping: 20,
    },
  },
  themeIcons: {
    light: {
      initial: { opacity: 0, scale: 0.5, rotate: -90 },
      animate: { opacity: 1, scale: 1, rotate: 0 },
      exit: { opacity: 0, scale: 1.5, rotate: 90 },
    },
    dark: {
      initial: { opacity: 0, y: -10, rotate: 0 },
      animate: { opacity: 1, y: 0, rotate: 360 },
      exit: { opacity: 0, y: 10, rotate: -360 },
    },
    system: {
      initial: { opacity: 0, scale: 1.5, x: -10 },
      animate: { opacity: 1, scale: 1, x: 0 },
      exit: { opacity: 0, scale: 0.5, x: 10 },
    },
  },
};

interface ToolbarButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
  label: string;
  isActive?: boolean;
  tooltipText: string;
}

const ToolbarButton = ({
  icon,
  onClick,
  label,
  isActive,
  tooltipText,
}: ToolbarButtonProps) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <motion.button
        whileHover={ANIMATIONS.button.hover}
        whileTap={ANIMATIONS.button.tap}
        transition={ANIMATIONS.button.transition}
        className={cn(
          "relative overflow-hidden rounded-md p-2 transition-colors",
          "hover:bg-secondary focus-visible:outline-none focus-visible:ring-2",
          "focus-visible:ring-ring",
          "h-10 w-10 flex items-center justify-center", // Added fixed dimensions
          isActive && "bg-secondary/60"
        )}
        onClick={onClick}
        aria-label={label}
      >
        <span className="relative z-10 transition-transform duration-200">
          {icon}
        </span>
      </motion.button>
    </TooltipTrigger>
    <TooltipContent sideOffset={10}>
      <p className="text-sm font-medium">{tooltipText}</p>
    </TooltipContent>
  </Tooltip>
);

const ThemeIcon: React.FC<{ theme: Theme }> = ({ theme }) => (
  <div className="relative h-6 w-6">
    <AnimatePresence mode="wait">
      {theme === "light" && (
        <motion.span
          key="light"
          {...ANIMATIONS.themeIcons.light}
          className="absolute inset-0 flex items-center justify-center"
          transition={ANIMATIONS.button.transition}
        >
          <SunIcon />
        </motion.span>
      )}
      {theme === "dark" && (
        <motion.span
          key="dark"
          {...ANIMATIONS.themeIcons.dark}
          className="absolute inset-0 flex items-center justify-center"
          transition={ANIMATIONS.button.transition}
        >
          <MoonIcon />
        </motion.span>
      )}
      {theme === "system" && (
        <motion.span
          key="system"
          {...ANIMATIONS.themeIcons.system}
          className="absolute inset-0 flex items-center justify-center"
          transition={ANIMATIONS.button.transition}
        >
          <SystemIcon />
        </motion.span>
      )}
    </AnimatePresence>
  </div>
);

const useToolbarPosition = () => {
  const [position, setPosition] = useState<Position>(
    () => (localStorage.getItem("toolbar-position") as Position) || "bottom"
  );
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const toolbarRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const currentPositionRef = useRef({ x: 0, y: 0 });

  const getToolbarDimensions = () => {
    if (!toolbarRef.current) return { width: 0, height: 0 };
    const rect = toolbarRef.current.getBoundingClientRect();
    return { width: rect.width, height: rect.height };
  };

  const constrainToViewport = (x: number, y: number) => {
    const { width, height } = getToolbarDimensions();
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const padding = 16;

    return {
      x: Math.max(padding, Math.min(x, windowWidth - width - padding)),
      y: Math.max(padding, Math.min(y, windowHeight - height - padding)),
    };
  };

  const calculatePosition = (y: number): Position => {
    const windowHeight = window.innerHeight;
    const deadZoneStart = windowHeight * 0.4;
    const deadZoneEnd = windowHeight * 0.6;

    if (y < deadZoneStart) return "top";
    if (y > deadZoneEnd) return "bottom";
    return position;
  };

  const getPositionCoordinates = (pos: Position) => {
    if (!toolbarRef.current) return { x: 0, y: 0 };

    const { width, height } = getToolbarDimensions();
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const padding = 16;

    const x = (windowWidth - width) / 2;
    const y = pos === "top" ? padding : windowHeight - height - padding;

    return constrainToViewport(x, y);
  };

  return {
    position,
    setPosition,
    isAnimating,
    setIsAnimating,
    calculatePosition,
    getPositionCoordinates,
    constrainToViewport,
    containerRef,
    toolbarRef,
    isDraggingRef,
    currentPositionRef,
  };
};

const NavigationToolbar: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [isDragging, setIsDragging] = useState(false);
  const controls = useAnimation();

  const {
    position,
    setPosition,
    isAnimating,
    setIsAnimating,
    calculatePosition,
    getPositionCoordinates,
    constrainToViewport,
    containerRef,
    toolbarRef,
    isDraggingRef,
    currentPositionRef,
  } = useToolbarPosition();

  const handleThemeChange = () => {
    const themeMap: Record<Theme, Theme> = {
      light: "dark",
      dark: "system",
      system: "light",
    };
    setTheme(themeMap[theme as Theme]);
  };

  const handleDragStart = () => {
    setIsDragging(true);
    isDraggingRef.current = true;
    controls.start({ scale: 1.02 });

    if (toolbarRef.current) {
      const rect = toolbarRef.current.getBoundingClientRect();
      currentPositionRef.current = constrainToViewport(rect.x, rect.y);
    }
  };

  const handleDrag = (_: any, info: { point: { x: number; y: number } }) => {
    const constrained = constrainToViewport(info.point.x, info.point.y);
    currentPositionRef.current = constrained;
    controls.set(constrained);
  };

  const handleDragEnd = async (
    _: any,
    info: { point: { x: number; y: number } }
  ) => {
    setIsDragging(false);
    isDraggingRef.current = false;
    setIsAnimating(true);

    const constrained = constrainToViewport(info.point.x, info.point.y);
    const newPosition = calculatePosition(constrained.y);
    const finalPosition = getPositionCoordinates(newPosition);

    try {
      controls.set({
        x: constrained.x,
        y: constrained.y,
        scale: 1.02,
      });

      await controls.start({
        x: finalPosition.x,
        y: finalPosition.y,
        scale: 1,
        transition: ANIMATIONS.toolbar.snap,
      });

      setPosition(newPosition);
      localStorage.setItem("toolbar-position", newPosition);
    } finally {
      setIsAnimating(false);
    }
  };

  useEffect(() => {
    const updatePosition = () => {
      if (!isDraggingRef.current && !isAnimating) {
        const coords = getPositionCoordinates(position);
        const constrained = constrainToViewport(coords.x, coords.y);
        controls.set(constrained);
        currentPositionRef.current = constrained;
      }
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, [position, controls, isAnimating]);

  const themeTooltipText =
    {
      light: "Switch to dark theme",
      dark: "Switch to system theme",
      system: "Switch to light theme",
    }[theme as Theme] || "Switch theme";

  return (
    <TooltipProvider>
      <motion.div
        ref={containerRef}
        className="fixed inset-0 pointer-events-none z-50"
        initial={false}
      >
        <motion.div
          ref={toolbarRef}
          className={cn(
            "fixed pointer-events-auto",
            "flex items-center gap-1 rounded-lg border border-border",
            "bg-background/60 backdrop-blur-xl",
            "p-1 shadow-lg",
            "select-none",
            isDragging && "cursor-grabbing"
          )}
          drag
          dragConstraints={containerRef}
          dragMomentum={false}
          dragElastic={0.25}
          onDragStart={handleDragStart}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          animate={controls}
        >
          <motion.div
            className={cn(
              "cursor-grab text-muted-foreground",
              isDragging && "cursor-grabbing"
            )}
            animate={{ scale: isDragging ? 1.1 : 1 }}
            transition={{ delay: isDragging ? 0.5 : 0 }}
          >
            <GripIcon />
          </motion.div>

          <ToolbarButton
            icon={<HomeIcon />}
            onClick={() => navigate("/")}
            label="Home"
            isActive={window.location.pathname === "/"}
            tooltipText="Go to home"
          />

          <ToolbarButton
            icon={<BlogIcon />}
            onClick={() => navigate("/blog")}
            label="Blog"
            isActive={window.location.pathname === "/blog"}
            tooltipText="Read blog posts"
          />

          <ToolbarButton
            icon={<ProjectsIcon />}
            onClick={() => navigate("/projects")}
            label="Projects"
            isActive={window.location.pathname === "/projects"}
            tooltipText="View all projects"
          />

          <ToolbarButton
            icon={<ThemeIcon theme={theme as Theme} />}
            onClick={handleThemeChange}
            label="Toggle theme"
            tooltipText={themeTooltipText}
          />
        </motion.div>
      </motion.div>
    </TooltipProvider>
  );
};

export default NavigationToolbar;
