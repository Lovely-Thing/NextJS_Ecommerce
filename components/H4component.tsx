/* eslint-disable @next/next/no-img-element */ 
import styled from "styled-components"

export default function H4component(props:any) {
    return(
        <Component>
            {props.text}
        </Component>
    )
}

const Component = styled.h4`
font-style: normal;
font-weight: 400;
font-size: var(--size_16);
line-height: var(--heigh_24);  
color: #000000;
`