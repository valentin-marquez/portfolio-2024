import { type ReactNode } from "react";

interface VintageHighlightProps {
  children: ReactNode;
  type?: "default" | "underline" | "mark" | "ribbon";
}

interface BasicProps {
  children: ReactNode;
}

interface DecoratedHeadingProps {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const VintageHighlight = ({
  children,
  type = "default",
}: VintageHighlightProps) => {
  const styles = {
    default:
      'relative inline-block after:content-[""] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-2 after:bg-accent/20 after:-z-10',
    underline:
      'relative inline-block after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary/60',
    mark: "relative inline-block bg-secondary/40 px-1.5 rounded border border-primary/20",
    ribbon:
      'relative inline-flex items-center px-3 py-1 before:content-[""] before:absolute before:-left-2 before:top-0 before:w-2 before:h-full before:bg-accent/20 after:content-[""] after:absolute after:-right-2 after:top-0 after:w-2 after:h-full after:bg-accent/20 bg-secondary/30',
  };

  return <span className={styles[type]}>{children}</span>;
};

const VintageEmphasis = ({ children }: BasicProps) => {
  return (
    <span className="font-bold text-primary relative inline-block">
      {children}
    </span>
  );
};

const KeyPhrase = ({ children }: BasicProps) => {
  return (
    <span className=" text-accent font-medium relative inline-block">
      {children}
    </span>
  );
};

const DecoratedHeading = ({ children, level = 2 }: DecoratedHeadingProps) => {
  const Component = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <Component className="relative flex items-center gap-4  before:content-['✦'] before:text-accent after:content-['✦'] after:text-accent">
      {children}
    </Component>
  );
};

export { DecoratedHeading, KeyPhrase, VintageEmphasis, VintageHighlight };
