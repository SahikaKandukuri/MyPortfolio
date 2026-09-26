/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#0B0D10',
          surface: '#14171C',
          raised: '#1B1F26',
          line: '#262B33',
        },
        ink: {
          DEFAULT: '#F2F0EA',
          muted: '#9BA1AC',
          dim: '#666D79',
        },
        brass: {
          DEFAULT: '#E3B341',
          soft: '#C99A3A',
          dim: '#7A6733',
        },
        teal: {
          DEFAULT: '#3E7C74',
          soft: '#2A5750',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      maxWidth: {
        content: '72rem',
      },
    },
  },
  plugins: [],
}
