/* eslint-disable @next/next/no-img-element */   
import { useContext } from "react"
import styled from "styled-components"
import { StepContext } from "../pages/checkout"
import CustomButtonComponent from "./CustomButtonComponent"


export default function ProductItemPageHeader(props:any) {

    const {currentStep, setCurrentStep} = useContext(StepContext)
    
    const nextStep = () => {
        if(currentStep < 3) {
            setCurrentStep(currentStep + 1)
        }
        else {
            setCurrentStep(3)
        }
    }

    return(
        <Component act_num={currentStep}>
            <div className="container">
                <div className="ch_header_container">
                    <div className="left">
                        <div className="step" onClick={()=>setCurrentStep(1)}> 
                            <label htmlFor="">Main Info</label> 
                        </div>
                        <div className="step" onClick={()=>setCurrentStep(2)}> 
                            <label htmlFor="">Characteristics</label> 
                        </div>
                        <div className="step" onClick={()=>setCurrentStep(3)}>
                            <label htmlFor="">Buy together </label>     
                        </div>
                    </div>
                    <div className="right">
                        <div className="product_count_price">
                            <div className="items">
                                <p>Spiced Mint Candleaf®</p>
                                <span>Item 1772</span>
                            </div>
                            <p className="price">$240.99 <span>per 20/m3</span></p>
                        </div>
                        <div className="checkout_step_control">
                            <CustomButtonComponent dataname="Add to Cart" buttonText="Add to Cart" even={()=>nextStep()}/>
                        </div>
                    </div>
                </div>
            </div>
        </Component>
    )
}


interface StyleProps {
    act_num?: number; 
} 

const Component = styled.div<StyleProps>` 
background: #FFFFFF;
box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
border-top: solid 1px #F1F1F1; 
.ch_header_container {
    display: flex; 
    justify-content: space-between;
    .left {
        display: flex;
        align-items: flex-end;
        justify-content: flex-start;
        .step { 
            border: none;
            outline: none;
            padding: 0;
            margin-right: 24px;          
            label { 
                font-style: normal;
                font-weight: 700;
                font-size: var(--size_14);
                line-height: var(--heigh_20);
                letter-spacing: 0.4px;
                color: #696E79;
                cursor: pointer;
                padding-bottom: 5px;
                display: block;
                position: relative;
                &:hover {
                    color: #BC2B2B;
                }
            }   
        }

        &>.step:nth-of-type(${props => (props.act_num?props.act_num:1)}) {
            label {
                color: #BC2B2B;
                &:after {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 1px;
                    content: '';
                    background: #BC2B2B;
                }
            } 
        }
    }
    
    .right {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        padding: 10px 0;
        padding-left: 19px;
        width: 557px;
        &::after {
            position: absolute;
            content: '';
            left: 0;
            top: 10px;
            bottom: 10px;
            width: 1px;
            background: #E1E1E1;
        }
        button {
            width: 129px;
            height: 36px;
            padding:0;
        }
        .product_count_price{ 
            .items {
                display: flex;
                align-items: center;
                p {
                    font-style: normal;
                    font-weight: 600;
                    font-size: var(--size_14);
                    line-height: var(--heigh_21); 
                    color: #333338;
                    margin-bottom: 0;
                    margin-right: 10px;
                }
                span {
                    font-style: normal;
                    font-weight: 400;
                    font-size: var(--size_10);
                    line-height: var(--heigh_14); 
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    letter-spacing: 0.15px; 
                    color: #1E2535;
                    margin-bottom: 0; 
                    background: #F2F3F4;
                    border-radius: 16px;
                    padding: 4px 9.5px;
                    padding-bottom: 5px;
                }
            } 
            .price {
                font-style: normal;
                font-weight: 600;
                font-size:var(--size_12);
                line-height: var(--heigh_18);  
                letter-spacing: -0.2px; 
                color: #202020;
                margin-top: 4px;
                margin-bottom: 0;
                span {
                    color: #747474;
                    margin-left: 4px;
                }
            }
        } 
    }
} 

`