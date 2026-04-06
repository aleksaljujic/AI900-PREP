export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        soft: '0 12px 30px rgba(15, 23, 42, 0.08)',
      },
      gridTemplateColumns: {
        'fluid-topics': 'repeat(auto-fit, minmax(280px, 1fr))',
      },
    },
  },
  plugins: [],
};
