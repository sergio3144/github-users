/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
     extend: {
      maxWidth: {
        'target': '300px',
      },
      backgroundColor: {
        'bg-section': '#1f2a48',
        'bg-secundary': '#0079fe',
        'bg-repos': '#141c2f'
      },
      colors: {
        'text-secundary': '#0079fe'
      },
      padding: {
        'pdInput': '115px',
      },
      width: {
        'full': '100%'
      },
      height: {
        'input': '50px'
      }
     },
   },
   plugins: [],
 };
