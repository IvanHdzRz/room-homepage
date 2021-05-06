module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
        'vh-2/3':'66vh',
        'vh-1/3':'34vh'
       },
       minHeight: {
        '0': '0',
        '64':'16rem',
        '60':'15rem',
        '56':'14rem',
        'vh-1/3':'34vh',
        'vh-2/3':'66vh',
        '72':'18rem',
        '112':'28rem'
       },
       keyframes:{
         fade:{
           '0%':{opacity:'0'},
           '100%':{opacity:'1'}
         },
         faded:{
          '0%':{opacity:'0'},
          '100%':{opacity:'1'}
        },
        fadeout:{
          '0%':{opacity:'1'},
          '100%':{opacity:'0'}
        }
       },
       animation:{
         fade:'fade 1s ease-in ',
         faded:'faded 1s ease-in ',
         fadeout:'fadeout 1s ease-in '
       }
       
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
