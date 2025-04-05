const theme = require("./src/config/theme.json");

let font_base = Number(theme.fonts.font_size.base.replace("px", ""));
let font_scale = Number(theme.fonts.font_size.scale);
let h6 = font_base / font_base;
let h5 = h6 * font_scale;
let h4 = h5 * font_scale;
let h3 = h4 * font_scale;
let h2 = h3 * font_scale;
let h1 = h2 * font_scale;
let fontPrimary, fontPrimaryType, fontSecondary, fontSecondaryType;
if (theme.fonts.font_family.primary) {
  fontPrimary = theme.fonts.font_family.primary
    .replace(/\+/g, " ")
    .replace(/:[ital,]*[ital@]*[wght@]*[0-9,;]+/gi, "");
  fontPrimaryType = theme.fonts.font_family.primary_type;
}
if (theme.fonts.font_family.secondary) {
  fontSecondary = theme.fonts.font_family.secondary
    .replace(/\+/g, " ")
    .replace(/:[ital,]*[ital@]*[wght@]*[0-9,;]+/gi, "");
  fontSecondaryType = theme.fonts.font_family.secondary_type;
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
    "./src/content/**/*.{md,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [{ pattern: /^swiper-/ }],
  darkMode: ["class", "class"],
  theme: {
    screens: {
      sm: "540px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        text: theme.colors.default.theme_color.text, // Corrected
        text_200: theme.colors.default.theme_color.text_200, // Corrected
        light: theme.colors.default.text_color.light,
        dark: theme.colors.default.text_color.dark,
        primary: {
          DEFAULT: theme.colors.default.theme_color.primary,
          foreground: theme.colors.default.theme_color.text,
        },
        secondary: {
          DEFAULT: theme.colors.default.theme_color.secondary,
          foreground: theme.colors.default.theme_color.text,
        },
        light_bg: theme.colors.default.theme_color.light_bg,
        primary_bg: theme.colors.default.theme_color.primary_bg,
        body: theme.colors.default.theme_color.body,
        header: theme.colors.default.theme_color.header,
        border: theme.colors.default.theme_color.border,
        primary_100: theme.colors.default.theme_color.primary_100,
        primary_200: theme.colors.default.theme_color.primary_200,
        primary_300: theme.colors.default.theme_color.primary_300,
        secondary_100: theme.colors.default.theme_color.secondary_100,
        secondary_200: theme.colors.default.theme_color.secondary_200,
        secondary_300: theme.colors.default.theme_color.secondary_300,
        "theme-light": theme.colors.default.theme_color.theme_light,
        "theme-dark": theme.colors.default.theme_color.theme_dark,
        darkmode: {
          text: theme.colors.darkmode.text_color.default,
          light: theme.colors.darkmode.text_color.light,
          dark: theme.colors.darkmode.text_color.dark,
          primary: theme.colors.darkmode.theme_color.primary,
          secondary: theme.colors.darkmode.theme_color.secondary,
          body: theme.colors.darkmode.theme_color.body,
          border: theme.colors.darkmode.theme_color.border,
          "theme-light": theme.colors.darkmode.theme_color.theme_light,
          "theme-dark": theme.colors.darkmode.theme_color.theme_dark,
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      fontSize: {
        base: font_base + "px",
        h1: h1 + "rem",
        "h1-sm": h1 * 0.8 + "rem",
        h2: "clamp(2.5rem, -1646rem + 2400vw, 4rem)",
        "h2-sm": h2 * 0.8 + "rem",
        h3: h3 + "rem",
        "h3-sm": h3 * 0.8 + "rem",
        h4: "clamp(1.5rem, -548rem + 800vw, 2rem)",
        h5: h5 + "rem",
        h6: h6 + "rem",
      },
      fontFamily: {
        primary: ["GalanoGrotesqueAlt", "sans-serif"], // GalanoGrotesqueAlt is now primary
        secondary: [fontSecondary, fontSecondaryType],
      },
      spacing: {
        space_m:
          "clamp(1.5rem, 0.98275862068966rem + 2.2068965517241vw, 2.5rem)",
        space_xs:
          "clamp(0.75rem, 0.62068965517241rem + 0.55172413793103vw, 1rem)",
        space_s:
          "clamp(1rem, 0.74137931034483rem + 1.1034482758621vw, 1.5rem)",
      },
      gridTemplateColumns: {
        "25/75": "1fr 3fr",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("tailwind-bootstrap-grid")({
      generateContainer: false,
      gridGutterWidth: "2rem",
      gridGutters: {
        1: "0.25rem",
        2: "0.5rem",
        3: "1rem",
        4: "1.5rem",
        5: "3rem",
      },
    }),
    require("tailwindcss-animate"),
  ],
};
