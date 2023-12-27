/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: { 
        "menu": "url('../../public/menu-04.svg')",
        "hero-image": "url('../images/bg-hero.png')",
        "doctora": "url('../images/doctora-figma.png')",


      },
    },
  },
  plugins: [],
}
