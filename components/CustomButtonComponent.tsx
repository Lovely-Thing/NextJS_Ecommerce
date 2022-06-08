import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react"
import styled from "styled-components"

export default function CustomButtonComponent( props: { dataname: any; buttonText: string; even:any } ) {
    return(   
          <Component data-name={props.dataname} onClick={props.even}>
              <div className="btn_inner">
                  {props.buttonText}
              </div>
          </Component> 
    )
}

const Component = styled.button`
    position: relative;
    font-style: normal;
    font-weight: 600;
    font-size: var(--size_14);
    line-height: var(--heigh_24);
    letter-spacing: 0.4px;
    text-transform: capitalize;
    color: var(--color_FFF);
    border-radius: 4px;
    padding: 8px;
    background: var(--color_BC2);
    border: 1px solid var(--color_BC2);
    width:100%;
    overflow: hidden;
    .btn_inner {
        position: relative;
        z-index: 3;
        transition: all 0.4s;
      }
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        display: block;
        width: 100%;
        height: 100%;
        z-index: 1;
        background: var(--color_FFF);
        transform: scale(0, 1);
        transform-origin: left top;
        transition: all 0.4s;
        z-index: 1;
      }
      &:hover {
        color: var(--color_BC2);
        &::before {
          transform: scale(1, 1);
        }
      }
    &[data-name='showmore'] {
        max-width: 225px;
    }
    &[data-name='continue'] {
      max-width: 112px;
      width: 112px;
    }
    
`