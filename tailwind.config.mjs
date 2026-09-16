/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        studio: {
          canvas: '#E3EBE9',
          daylight: '#EEF4F2',
          surface: '#FFFFFF',
          obsidian: '#1C2A30',
          obsidianHover: '#2C3E46',
          muted: '#52656B',
          border: '#D0DCD9',
          accent: '#F4F7F6',
          mint: '#E8F0EE',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'pedestal': '0 25px 50px -12px rgba(28, 42, 48, 0.12), 0 10px 20px -5px rgba(28, 42, 48, 0.08)',
        'pedestal-lg': '0 35px 60px -15px rgba(28, 42, 48, 0.18)',
        'glass': '0 8px 32px 0 rgba(28, 42, 48, 0.06)',
      },
      letterSpacing: {
        'kicker': '0.25em',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.75' },
        },
      },
    },
  },
  plugins: [
    (await import('@tailwindcss/typography')).default,
  ],
};
