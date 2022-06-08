import { css } from 'styled-components';   

export const sizes = {
  pc: 1025,
  sp: 1024,
  headerPC: `58px`,
  headerSP: `48px`,
  navSP: `48px`,
  tab: `42px`,
  linkBackPC: `80px`,
  pager: `40px`,
  labHeaderPC: `460px`,
  labHeaderSP: `270px`
}; 
  

export const media = Object.keys(sizes).reduce((accumulator, label) => { 
  accumulator[label] = (...args) => css`
    @media screen and (max-width: ${sizes[label]}px), print {
      ${css(...args)};
    }
  `;
   
  return accumulator;
}, {});
 