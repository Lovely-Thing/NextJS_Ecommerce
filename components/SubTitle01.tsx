/* eslint-disable @next/next/no-img-element */ 
import styled from "styled-components"

export default function SubTitle01(props:any) {
    return(
        <Component color={props.color}>
            {props.text}
        </Component>
    )
}

interface StyleProps {
    color?: any;
}  

const Component = styled.h5<StyleProps>`
font-style: normal;
font-weight: 600;
font-size: var(--size_16);
line-height: var(--heigh_28);   
color: ${props=> props.color?props.color:'#000000'};
`