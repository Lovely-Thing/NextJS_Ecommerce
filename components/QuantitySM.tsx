/* eslint-disable @next/next/no-img-element */ 
import { useState } from "react"
import styled from "styled-components"

export default function QuantitySM(props:any) {
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
                <input className="quantity-input__screen" type="text" value={value} readOnly />
                <div className="btns">
                    <button className="quantity-input__modifier quantity-input__modifier--left" onClick={()=>decrement()}>
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.33008 7.35369V0.632102H4.66744V7.35369H3.33008ZM0.640447 4.65909V3.32173H7.36204V4.65909H0.640447Z" fill="#3A4B6D"/>
                        </svg>
                    </button>
                    <button className="quantity-input__modifier quantity-input__modifier--right" onClick={()=>increment()}>
                        <svg width="6" height="2" viewBox="0 0 6 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.25835 0.0532667V1.34091H0.744141V0.0532667H5.25835Z" fill="#3A4B6D"/>
                        </svg>
                    </button> 
                </div> 
            </div>  
        </Component>
    )
}

const Component = styled.div` 
.quantity-input {
    background: #F2F3F4; 
    border: 1px solid #F2F3F4;
    border-radius: 4px;   
    display: flex;
    align-items: center;
    justify-content: space-between;     
    .btns {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-direction: column;
    }
    .quantity-input__modifier {
        background: #FFFFFF;
        border-radius: 4px;
        height: 17px; 
        width: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #3A4B6D;
        font-weight: 900;
        margin: 0.7px;
    }
    .quantity-input__screen {
        width: 42px;
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