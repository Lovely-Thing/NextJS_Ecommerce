/* eslint-disable @next/next/no-img-element */ 
import styled from "styled-components"

export default function H1component(props:any) {
    return(
        <Component>
            {props.text}
        </Component>
    )
}

const Component = styled.h1`
font-style: normal;
font-weight: 500;
font-size: var(--size_28);
line-height: var(--heigh_40); 
letter-spacing: 0.44px;
text-transform: capitalize; 
color: #000000;
`