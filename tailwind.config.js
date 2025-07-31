/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /* уже добавлено ранее */
        header: '#DCE4A9',
        primary: '#3B82FF',
        brown:   '#9F7859',   // коричневый fill BUY (при hover)
        lime:'#EEF7B7',
        sky:'#3B82FF',

        /* ➜ добавляем недостающие */
        background:  'rgb(247,255,193)',
        foreground:  'var(--foreground)',
      },
      
      borderRadius: {
        'btn': '15px',        // чтобы кнопка иконок имели ровно 15 px
      },

      fontFamily: {
        titan: ['"Titan One"', 'cursive'],
        nerko:['"Nerko One"', 'cursive']
    },
    },
  },
};