import { createGlobalStyle, css } from 'styled-components';
import { createMediaQuery } from './helpers';

// General styling of the app
export const GlobalStyles = createGlobalStyle`
   /* Global variables */
   :root {
   --color-primary: #333;
   --color-secondary: #000;
   }

   *,
   *::before,
   *::after {
   margin: 0;
   padding: 0;
   box-sizing: inherit;
   }

   html {
    font-size: 62.5%;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0,0,0,0);

   ${createMediaQuery(
     'bigDesk',
     css`
       font-size: 68.75%; // 1rem = 11px 11/16 = 62.5%
     `
   )}

   ${createMediaQuery(
     'tabLand',
     css`
       font-size: 56.25%; // 1rem = 9px 9/16 = 56.25%
     `
   )}

   ${createMediaQuery(
     'tabPort',
     css`
       font-size: 50%; // 1rem = 8px 8/16 = 50%
     `
   )}

   ${createMediaQuery(
     'phone',
     css`
       font-size: 43.75%; // 1rem = 7px 7/16 = 43.75%
     `
   )}

   ${createMediaQuery(
     'phoneSmall',
     css`
       font-size: 43.75%; // 1rem = 7px 7/16 = 43.75%
     `
   )}
   }

   img {
      display: block;
      width: 100%;
   }
   
   li {
      list-style: none;
   }
   
   a {
      display: inline-block;
      text-decoration: none;
      color: var(--color-primary);
   }
`;
