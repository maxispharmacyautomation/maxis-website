/**
 * Maxis Pharmacy Automation — Brand Tokens
 *
 * Source of truth for brand colors and design tokens.
 * Derived from the Maxis logo (medical teal wordmark).
 *
 * Drop this into the Next.js project at: lib/brand.ts
 * Reference in tailwind.config.ts.
 */

export const brandColors = {
  // Core brand (from logo)
  teal: "#00B4C8",        // Logo color — brand identity
  tealDark: "#007A8A",    // Primary CTAs, button default state
  tealDarker: "#005F6B",  // Button hover
  tealLight: "#E0F7FA",   // Subtle backgrounds, hover fills
  tealTint: "#F0FBFD",    // Very subtle section backgrounds

  // Neutrals
  ink: "#1A2B3C",         // Headlines — deep navy-charcoal
  slate900: "#0F172A",
  slate700: "#334155",    // Body text default
  slate500: "#64748B",    // Meta, captions
  slate300: "#CBD5E1",    // Disabled states
  slate200: "#E2E8F0",    // Borders, dividers
  slate100: "#F1F5F9",    // Alternating section backgrounds
  slate50: "#F8FAFC",     // Soft page background
  white: "#FFFFFF",

  // Semantic
  success: "#10B981",
  successLight: "#D1FAE5",
  error: "#EF4444",
  errorLight: "#FEE2E2",
  warning: "#F59E0B",
} as const;

export const brandFonts = {
  sans: "var(--font-inter)",
  mono: "ui-monospace, SFMono-Regular, Menlo, monospace",
} as const;

export const brandRadii = {
  sm: "0.375rem",   // 6px  — inputs, small buttons
  md: "0.5rem",     // 8px  — cards, buttons
  lg: "0.75rem",    // 12px — feature cards
  xl: "1rem",       // 16px — hero panels
  full: "9999px",
} as const;

export const brandShadows = {
  sm: "0 1px 2px 0 rgb(15 23 42 / 0.05)",
  md: "0 4px 6px -1px rgb(15 23 42 / 0.08), 0 2px 4px -2px rgb(15 23 42 / 0.04)",
  lg: "0 10px 15px -3px rgb(15 23 42 / 0.10), 0 4px 6px -4px rgb(15 23 42 / 0.05)",
  // Teal-tinted shadow for hover states on branded elements
  tealGlow: "0 8px 24px -8px rgb(0 122 138 / 0.35)",
} as const;

// Tailwind config extension snippet — paste into tailwind.config.ts > theme.extend
export const tailwindExtension = {
  colors: {
    brand: {
      DEFAULT: brandColors.teal,
      dark: brandColors.tealDark,
      darker: brandColors.tealDarker,
      light: brandColors.tealLight,
      tint: brandColors.tealTint,
    },
    ink: brandColors.ink,
  },
  fontFamily: {
    sans: ["var(--font-inter)", "system-ui", "sans-serif"],
  },
  boxShadow: {
    "teal-glow": brandShadows.tealGlow,
  },
};
