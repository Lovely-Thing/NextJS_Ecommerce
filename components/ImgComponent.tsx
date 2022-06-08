/* eslint-disable @next/next/no-img-element */ 
import styled from "styled-components"

export default function ImgComponent(props:any) {
    return(
        <Component>
            <img src={props.src} alt={props.alt}/>
        </Component>
    )
}

const Component = styled.div`
    display: flex;
    object-fit: cover;
    align-items: center;
    justify-content: center;
    img {
        width:100%;
    }
`