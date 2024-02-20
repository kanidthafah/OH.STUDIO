import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fff',
        secondary: '#f0efee',
        font1: '#7f7f7f',
        font2: '#000',
        nav: 'rgba(240, 239, 238, 0.6)',
      },
      height: {
        half: '50dvh',
      },
    },
  },
  plugins: [],
};
export default config;
