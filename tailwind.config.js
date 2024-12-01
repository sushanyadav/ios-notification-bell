/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-ios':
          'linear-gradient(45deg, #5fc9f8, #fecb2e, #fd9426, #fc3158, #147efb, #53d769)',
      },
    },
  },
  plugins: [],
};
