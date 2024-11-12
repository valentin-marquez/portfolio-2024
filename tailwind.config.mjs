/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        // Inter Variable como fuente principal - moderna, limpia y altamente legible
        sans: ['"Inter Variable"', "system-ui", "sans-serif"],

        // Manrope como fuente para títulos - geométrica y moderna
        display: ['"Manrope Variable"', "system-ui", "sans-serif"],

        // JetBrains Mono para código - excelente legibilidad
        code: ['"JetBrains Mono"', "monospace"],

        // Si aún quieres mantener una fuente typewriter, podrías usar:
        typewriter: ['"JetBrains Mono"', "Courier", "monospace"],
      },
      colors: {
        border: "rgb(var(--border))",
        input: "rgb(var(--input))",
        ring: "rgb(var(--ring))",
        background: "rgb(var(--background))",
        foreground: "rgb(var(--foreground))",
        primary: {
          DEFAULT: "rgb(var(--primary))",
          foreground: "rgb(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "rgb(var(--secondary))",
          foreground: "rgb(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "rgb(var(--muted))",
          foreground: "rgb(var(--muted-foreground))",
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.foreground"),
            "--tw-prose-headings": theme("colors.foreground"),
            "--tw-prose-links": "rgb(var(--primary))",
            "--tw-prose-bold": theme("colors.foreground"),
            color: "var(--tw-prose-body)",

            // Mejoras en párrafos
            p: {
              marginBottom: "1.5em",
              lineHeight: "1.8",
              fontFamily: theme("fontFamily.sans"),
              fontSize: "1.125rem",
              "&:first-of-type": {
                fontSize: "1.25rem",
                fontStyle: "italic",
                marginTop: "0.5em",
              },
              "&:first-letter": {
                fontSize: "1.5em",
                fontWeight: "500",
                color: "rgb(var(--primary))",
              },
            },

            // Mejoras en encabezados
            h1: {
              fontFamily: theme("fontFamily.display"),
              fontWeight: "800",
              fontSize: "2.5em",
              letterSpacing: "-0.025em",
              marginTop: "2em",
              marginBottom: "1em",
              backgroundImage:
                "linear-gradient(to right, rgb(var(--primary)), rgb(var(--accent)))",
              backgroundClip: "text",
              color: "transparent",
              lineHeight: "1.2",
            },
            h2: {
              fontFamily: theme("fontFamily.display"),
              fontWeight: "700",
              fontSize: "2em",
              letterSpacing: "-0.025em",
              marginTop: "2.5em",
              marginBottom: "1em",
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                left: "0",
                bottom: "-0.5em",
                height: "4px",
                width: "3em",
                backgroundImage:
                  "linear-gradient(to right, rgb(var(--primary)), transparent)",
                borderRadius: "4px",
              },
            },
            h3: {
              fontFamily: theme("fontFamily.display"),
              fontWeight: "600",
              fontSize: "1.5em",
              marginTop: "2em",
              marginBottom: "0.8em",
              color: "rgb(var(--primary))",
            },
            h4: {
              fontFamily: theme("fontFamily.display"),
              fontWeight: "600",
              fontSize: "1.25em",
              marginTop: "1.75em",
              marginBottom: "0.6em",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            },

            // Mejoras en enlaces
            a: {
              color: "rgb(var(--primary))",
              textDecoration: "none",
              transition: "all 0.2s",
              borderBottom: "1px solid transparent",
              "&:hover": {
                borderBottomColor: "rgb(var(--primary))",
                backgroundColor: "rgba(var(--primary), 0.1)",
                borderRadius: "2px",
              },
            },

            // Mejoras en listas
            "ul, ol": {
              marginTop: "1.5em",
              marginBottom: "1.5em",
              paddingLeft: "1.625em",
              li: {
                marginTop: "0.5em",
                marginBottom: "0.5em",
                paddingLeft: "0.375em",
                position: "relative",
                "&::before": {
                  color: "rgb(var(--primary))",
                },
              },
            },
            ul: {
              listStyleType: "none",
              "li::before": {
                content: '"•"',
                position: "absolute",
                left: "-1em",
                color: "rgb(var(--primary))",
                fontWeight: "bold",
              },
            },
            ol: {
              counterReset: "list-counter",
              listStyleType: "none",
              "li::before": {
                content: "counter(list-counter)",
                counterIncrement: "list-counter",
                position: "absolute",
                left: "-1.5em",
                color: "rgb(var(--primary))",
                fontWeight: "bold",
                fontSize: "0.875em",
              },
            },

            // Mejoras en blockquotes
            blockquote: {
              fontFamily: theme("fontFamily.typewriter"),
              borderLeftWidth: "4px",
              borderLeftColor: "rgb(var(--primary))",
              fontStyle: "normal",
              marginTop: "2em",
              marginBottom: "2em",
              paddingLeft: "2em",
              paddingRight: "1.5em",
              paddingTop: "1.5em",
              paddingBottom: "1.5em",
              position: "relative",
              backgroundColor: "rgb(var(--muted))",
              borderRadius: "0 0.75rem 0.75rem 0",
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              "&::before": {
                content: '"""',
                position: "absolute",
                left: "0.75rem",
                top: "0.5rem",
                fontSize: "3rem",
                color: "rgb(var(--primary))",
                opacity: "0.25",
                fontFamily: theme("fontFamily.serif"),
                lineHeight: "1",
              },
              "p:last-of-type": {
                marginBottom: 0,
              },
              cite: {
                display: "block",
                marginTop: "1em",
                fontSize: "0.875em",
                color: "rgb(var(--muted-foreground))",
                fontStyle: "normal",
                "&::before": {
                  content: '"— "',
                },
              },
            },

            // Mejoras en código
            code: {
              color: "rgb(var(--foreground))",
              backgroundColor: "rgb(var(--muted))",
              padding: "0.25rem 0.4rem",
              borderRadius: "0.25rem",
              fontWeight: "400",
              fontSize: "0.875em",
              fontFamily: theme("fontFamily.code"),
              letterSpacing: "-0.025em",
              "&::before": {
                content: '""',
              },
              "&::after": {
                content: '""',
              },
            },

            // Mejoras en bloques de código
            pre: {
              backgroundColor: "rgb(22, 27, 34)",
              color: "rgb(201, 209, 217)",
              padding: "1.5rem",
              borderRadius: "0.75rem",
              overflow: "auto",
              border: "1px solid rgb(var(--border))",
              position: "relative",
              marginTop: "1.5em",
              marginBottom: "1.5em",
              fontSize: "0.875em",
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              "&::before": {
                content: "attr(data-language)",
                position: "absolute",
                top: "0.5rem",
                right: "1rem",
                fontSize: "0.75rem",
                color: "rgb(var(--muted-foreground))",
                textTransform: "uppercase",
                fontFamily: theme("fontFamily.code"),
                letterSpacing: "0.1em",
              },
              code: {
                backgroundColor: "transparent",
                padding: "0",
                fontSize: "0.875em",
                fontFamily: theme("fontFamily.code"),
                color: "inherit",
                "&::before": {
                  content: "none",
                },
                "&::after": {
                  content: "none",
                },
              },
              ".line": {
                display: "block",
                color: "inherit",
                minHeight: "1.5em",
                "&.highlighted": {
                  backgroundColor: "rgba(var(--primary), 0.1)",
                  marginLeft: "-1.5rem",
                  marginRight: "-1.5rem",
                  paddingLeft: "1.5rem",
                  paddingRight: "1.5rem",
                  borderLeft: "3px solid rgb(var(--primary))",
                },
              },
            },

            // Mejoras en tablas
            table: {
              fontSize: "0.875em",
              lineHeight: "1.7142857",
              width: "100%",
              marginTop: "2em",
              marginBottom: "2em",
              borderCollapse: "collapse",
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              borderRadius: "0.5rem",
              overflow: "hidden",
            },
            thead: {
              backgroundColor: "rgb(var(--muted))",
              borderBottomWidth: "2px",
              borderBottomColor: "rgb(var(--border))",
              th: {
                fontFamily: theme("fontFamily.display"),
                fontWeight: "600",
                padding: "0.75rem 1rem",
                textAlign: "left",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                fontSize: "0.75em",
                color: "rgb(var(--muted-foreground))",
              },
            },
            "tbody tr": {
              borderBottomWidth: "1px",
              borderBottomColor: "rgb(var(--border))",
              "&:last-child": {
                borderBottomWidth: "0",
              },
              "&:hover": {
                backgroundColor: "rgb(var(--muted))",
              },
            },
            "tbody td": {
              padding: "1rem",
              verticalAlign: "top",
              "&:first-child": {
                fontWeight: "500",
              },
            },

            // Mejoras en elementos hr
            hr: {
              marginTop: "3em",
              marginBottom: "3em",
              borderWidth: "0",
              height: "3px",
              borderRadius: "3px",
              backgroundImage:
                "linear-gradient(to right, rgb(var(--primary)), transparent)",
            },

            // Mejoras en imágenes
            img: {
              borderRadius: "0.75rem",
              marginTop: "2em",
              marginBottom: "2em",
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(1.02) translateY(-4px)",
                boxShadow:
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              },
            },

            // Estilos para figcaption
            figcaption: {
              marginTop: "0.75em",
              fontSize: "0.875em",
              color: "rgb(var(--muted-foreground))",
              textAlign: "center",
              fontStyle: "italic",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
