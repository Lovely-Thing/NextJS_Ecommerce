/* eslint-disable @next/next/no-img-element */ 
import styled from "styled-components"

export default function H3component(props:any) {
    return(
        <Component>
            {props.text}
        </Component>
    )
}

const Component = styled.h3`
font-style: normal;
font-weight: 700;
font-size: var(--size_16);
line-height: var(--heigh_24);  
color: #000000;
`