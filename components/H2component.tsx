/* eslint-disable @next/next/no-img-element */ 
import styled from "styled-components"

export default function H2component(props:any) {
    return(
        <Component color={props.color}>
            {props.text}
        </Component>
    )
}
interface StyleProps {
    color?: any;
}  
const Component = styled.h2<StyleProps>`
font-style: normal;
font-weight: 600;
font-size: var(--size_24);
line-height: var(--heigh_36); 
letter-spacing: 0.2px;
text-transform: capitalize; 
color: ${props=> props.color?props.color:'#000000'};
`