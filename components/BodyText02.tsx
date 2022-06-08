/* eslint-disable @next/next/no-img-element */ 
import styled from "styled-components"

export default function BodyText02(props:any) {
    return(
        <Component color={props.color}>
            {props.text}
        </Component>
    )
}

interface StyleProps {
    color?: any;
}  

const Component = styled.p<StyleProps>`
font-style: normal;
font-weight: 400;
font-size: var(--size_12);
line-height: var(--heigh_19);  
color: ${props=> props.color?props.color:'#000000'};
`