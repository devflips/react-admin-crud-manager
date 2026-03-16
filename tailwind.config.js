/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // 👈 Required to scan your React files
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border, 0 0% 89.8%))",
        input: "hsl(var(--input, 0 0% 89.8%))",
        ring: "hsl(var(--ring, 0 0% 3.9%))",
        background: "hsl(var(--background, 0 0% 100%))",
        foreground: "hsl(var(--foreground, 0 0% 3.9%))",
        primary: {
          DEFAULT: "var(--primary-500, #3b82f6)",
          50: "var(--primary-50, #eff6ff)",
          100: "var(--primary-100, #dbeafe)",
          200: "var(--primary-200, #bfdbfe)",
          300: "var(--primary-300, #93c5fd)",
          400: "var(--primary-400, #60a5fa)",
          500: "var(--primary-500, #3b82f6)",
          600: "var(--primary-600, #2563eb)",
          700: "var(--primary-700, #1d4ed8)",
          800: "var(--primary-800, #1e40af)",
          900: "var(--primary-900, #1e3a8a)",
        },
        "primary-foreground": "hsl(var(--primary-foreground, 0 0% 98%))",
        secondary: "hsl(var(--secondary, 0 0% 96.1%))",
        "secondary-foreground": "hsl(var(--secondary-foreground, 0 0% 9%))",
        destructive: "hsl(var(--destructive, 0 84.2% 60.2%))",
        "destructive-foreground":
          "hsl(var(--destructive-foreground, 0 0% 98%))",
        muted: "hsl(var(--muted, 0 0% 96.1%))",
        "muted-foreground": "hsl(var(--muted-foreground, 0 0% 45.1%))",
        accent: "hsl(var(--accent, 0 0% 96.1%))",
        "accent-foreground": "hsl(var(--accent-foreground, 0 0% 9%))",
        popover: "hsl(var(--popover, 0 0% 100%))",
        "popover-foreground": "hsl(var(--popover-foreground, 0 0% 3.9%))",
        card: "hsl(var(--card, 0 0% 100%))",
        "card-foreground": "hsl(var(--card-foreground, 0 0% 3.9%))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};
