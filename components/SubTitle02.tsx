/* eslint-disable @next/next/no-img-element */ 
import styled from "styled-components"

export default function SubTitle02(props:any) {
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
font-weight: 500;
font-size: var(--size_14);
line-height: var(--heigh_21);  
color: ${props=> props.color?props.color:'#000000'};
`