
 /** @type {import('tailwindcss').Config} */
 export const content = ["./*.html","./build/*.html", "./build/*.html", "./build/forminator/*.php", "./build/forminator/*.js", "./build/forminator/*.html", "./build/js/*.js"];
 export const theme = {
   
  extend: {

   


    
     colors: {
       varDARKBEAKTOP: "#785001",
       varMEDBEAKTOP: "#b67902",
       varLIGHTBEAKTOP: "#fca802",
       varDARKDUCKHEAD: "#1e3b28",
       varMEDDUCKHEAD: "#284f35",
       varLIGHTDUCKHEAD: "#528f85",
       varDARKBLUEFEATHER: "#24558d",
       varMEDBLUEFEATHER: "#2a61a1",
       varLIGHTBLUEFEATHER: "#419aff",
       varDARKDUCKCHEEKS: "#362e47",
       varMEDDUCKCHEEKS: "#6b5b8d",
       varLIGHTDUCKCHEEKS: "#a088d2",
       varDARKNECK: "#412a32",
       varMEDNECK: "#98648d",
       varLIGHTNECK: "#c68199",
       varDARKWING: "#3c302e",
       varMEDWING: "#806661",
       varLIGHTWING: "#cfa69d",
       varDARKBEAK: "#70181a",
       varMEDBEAK: "#962023",
       varLIGHTBEAK: "#d72d32",
       varDARKSPACE: "#08121c",
       varMEDSPACE: "#1b3854",
       varLIGHTSPACE: "#264d73",
       varBoneWhite: "#fff9d7",
       varDCDARKBLUE: "#012344",
       varDCMEDBLUE: "#01366a",
       varDCLIGHTBLUE: "#01366a",
       varDCDARKGREY: "#484a4d",
       varDCMEDGREY: "#6b6e73",
       varDCLIGHTGREY: "#b2b7bf",
       varDCBLUEGREY: "#33485d",


     }, 
     fontFamily: {
         'noto': ['Noto Sans', 'sans-serif'],
         "rye": ['Rye', 'cursive'],
         "Montserrat": ['Montserrat', 'sans-serif'],
         'Noto Serif': ['Noto Serif', 'serif'],
         'Orbitron': ['Orbitron', 'sans-serif'],
         'Rye': ['Rye', 'cursive'],
         'Vollkorn': ['Vollkorn', 'serif'],
         'Wallpoet': ['Wallpoet', 'cursive'],
     },
 
        screens: {
         'widescreen': { 'raw': '(min-aspect-ratio: 3/2)' },
         'tallscreen': { 'raw': '(max-aspect-ratio: 13/20)' },
       }, 
 
      /*  keyframes: {
         'open-menu': {
           '0%': { transform: 'scaleY(0)' },
           '80%': { transform: 'scaleY(01.2)' },
           '100%': { transform: 'scaleY(1)' },
         },
       },
        */


/* 
       animation: {
         'open-menu': 'open-menu 0.5s ease-in-out forwards'
       }, */
     },
   
   plugins: [],
 };
 