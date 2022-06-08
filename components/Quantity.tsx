/* eslint-disable @next/next/no-img-element */ 
import { useState } from "react"
import styled from "styled-components"

export default function Quantity(props:any) {
    const [value, setValue] = useState(1)

    function increment() {
        setValue(value + 1);
    }
      
    function decrement() {
        if (value > 0) {
            setValue(value - 1);
        }
        else {
            setValue(0)
        }
    }

    return(
        <Component>
            <div className="quantity-input">
                <button className="quantity-input__modifier quantity-input__modifier--left" onClick={()=>decrement()}>
                    <svg width="8" height="2" viewBox="0 0 8 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1.59172V0H8V1.59172H0Z" fill="#3A4B6D"/>
                    </svg>
                </button>
                <input className="quantity-input__screen" type="text" value={value} readOnly />
                <button className="quantity-input__modifier quantity-input__modifier--right" onClick={()=>increment()}>
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.20118 8V0H4.7929V8H3.20118ZM0 4.7929V3.20118H8V4.7929H0Z" fill="#3A4B6D"/>
                    </svg>
                </button>  
            </div>  
        </Component>
    )
}

const Component = styled.div` 
.quantity-input {
    background: #F2F3F4; 
    border: 1px solid #F2F3F4;
    border-radius: 4px;
    height: 36px; 
    width: 137px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .quantity-input__modifier {
        background: #FFFFFF;
        border-radius: 4px;
        height: 34px; 
        width: 34px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #3A4B6D;
        font-weight: 900;
    }
    .quantity-input__screen {
        width: 67px;
        padding: 0;
        background: #F2F3F4; 
        font-style: normal;
        font-weight: 400;
        font-size: var(--size_14);
        line-height: var(--heigh_20);
        color: #1E2535;
        border: none;
        outline: none;
        text-align: center;
    }
}
`