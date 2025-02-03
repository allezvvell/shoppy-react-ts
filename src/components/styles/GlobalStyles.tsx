import { createGlobalStyle } from 'styled-components';

const BREAK_POINTS = {
  mobile: '480px',
  tablet: '768px',
  desktopSmall: '1024px',
  desktopLarge: '1200px',
} as const;

export const media = {
  mobile: `@media (max-width:${BREAK_POINTS.mobile})`,
  tablet: `@media (max-width:${BREAK_POINTS.tablet})`,
  desktopSmall: `@media (max-width:${BREAK_POINTS.desktopSmall})`,
  desktopLarge: `@media (max-width:${BREAK_POINTS.desktopLarge})`,
} as const;

const GlobalStyle = createGlobalStyle`
 /* theme */
   :root {
   //size
   --header-height: 64px;
   --header-padding-y: 8px;
   --header-button-height: calc(var(--header-height) - 2 * var(--header-padding-y));
   --footer-height: 288px;

   //padding
   --padding-default: 16px;
   
   //width
   --main-max-width: 1200px;
   --main-min-width: 320px;

   //color
   --bg-header:#fff;
   --bg-main:#fff;
   --bg-footer: #F2F2F2;
   --bg-card:#F3F4F6;
   --bg-search:#D1D5DB;
   --bg-search-result: #fff;
   --bg-sidebar:#fff;
   --bg-overlay:rgba(0,0,0,0.2);
   --bg-hover:rgba(31, 41, 55, 0.2);
   --bg-skeleton:#F3F4F6;
   --bg-skeleton-shimmer: #ededed;
   --btn-hero:#313641;
   --btn-highlight: #661ae6;
   --btn-highlight-hover:#5114B9;
   --btn-red: #ef4444;
   --text-white:#374151;
   --text-primary:#1F2937;
   --text-slide:#fff;

   //radius
   --btn-radius : 6px;

   //weight
   --font-bold: 700;
   }

   .dark {
   //color
   --bg-header:#191D24;
   --bg-main:#2A303C;
   --bg-footer: #242933;
   --bg-card:#374151;
   --bg-search:#4B5563;
   --bg-search-result: #4B5563;
   --bg-sidebar:#2A303C;
   --bg-hover:rgba(166, 173, 187, 0.2);
   --bg-skeleton:#374151;
   --bg-skeleton-shimmer: #3c4757;
   --btn-slide:#111318;
   --text-white:#fff;
   --text-primary:#A6ADBB;
   --text-slide:#A6ADBB;
   }

   .scroll-lock body {
     overflow: hidden;
   }

 /* reset */
 *,::after,::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }

 body {
  background-color: var(--bg-main);
 }

 body,button {
   font-family: "Noto Sans KR", sans-serif;
   font-size: 14px;
   font-weight: 400;
 }

 button {
   outline: none;
   cursor: pointer;
   border: none;
   background-color: transparent;
 }

 a {
   text-decoration: none;
 }

 ul,ol,li {
   list-style: none;
 }

 input {
  outline: none;
  border: none;
  background-color: transparent;
 }

 i {
  font-style: normal;
 }

`;

export default GlobalStyle;
