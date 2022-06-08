/* eslint-disable @next/next/no-img-element */ 
import styled from "styled-components"

export default function CaptionText(props:any) {
    return(
        <Component>
            {props.text}
        </Component>
    )
}

const Component = styled.p`
font-style: normal;
font-weight: 500;
font-size: var(--size_14);
line-height: var(--heigh_21);  
color: #000000;
`