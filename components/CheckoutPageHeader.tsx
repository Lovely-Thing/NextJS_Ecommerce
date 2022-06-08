/* eslint-disable @next/next/no-img-element */   
import { useContext } from "react"
import styled from "styled-components"
import { StepContext } from "../pages/checkout"
import CustomButtonComponent from "./CustomButtonComponent"


export default function CheckoutPageHeader(props:any) {

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
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="25" height="25" rx="12.5" fill="#3A4B6D"/>
                                <path d="M14.3302 7.81818V18H12.1775V9.86151H12.1178L9.78613 11.3232V9.41406L12.3067 7.81818H14.3302Z" fill="white"/>
                            </svg>
                            <label htmlFor="">Shopping Cart</label>
                            
                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.99984 0L0.589844 1.41L5.16984 6L0.589844 10.59L1.99984 12L7.99984 6L1.99984 0Z" fill="#7E858E"/>
                            </svg>
                        </div>
                        <div className="step" onClick={()=>setCurrentStep(2)}>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="25" height="25" rx="12.5" fill="#B4B6BC"/>
                                <path d="M8.9161 18V16.4489L12.5404 13.093C12.8486 12.7947 13.1072 12.5263 13.316 12.2876C13.5281 12.049 13.6888 11.8153 13.7982 11.5866C13.9076 11.3546 13.9623 11.1044 13.9623 10.8359C13.9623 10.5376 13.8943 10.2808 13.7584 10.0653C13.6225 9.84659 13.4369 9.67921 13.2016 9.56321C12.9663 9.44389 12.6995 9.38423 12.4012 9.38423C12.0896 9.38423 11.8179 9.44721 11.5858 9.57315C11.3538 9.6991 11.1749 9.87973 11.0489 10.1151C10.923 10.3504 10.86 10.6304 10.86 10.9553H8.81667C8.81667 10.2891 8.96748 9.7107 9.26909 9.22017C9.5707 8.72964 9.99328 8.35014 10.5368 8.08168C11.0804 7.81321 11.7068 7.67898 12.4161 7.67898C13.1453 7.67898 13.78 7.80824 14.3202 8.06676C14.8638 8.32197 15.2864 8.67661 15.588 9.13068C15.8896 9.58475 16.0404 10.1051 16.0404 10.6918C16.0404 11.0762 15.9642 11.4557 15.8117 11.8303C15.6626 12.2048 15.3957 12.6207 15.0113 13.0781C14.6268 13.5322 14.0849 14.0774 13.3856 14.7138L11.8991 16.1705V16.2401H16.1746V18H8.9161Z" fill="white"/>
                            </svg>
                            <label htmlFor="">Delivery</label>
                            
                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.99984 0L0.589844 1.41L5.16984 6L0.589844 10.59L1.99984 12L7.99984 6L1.99984 0Z" fill="#7E858E"/>
                            </svg>
                        </div>
                        <div className="step" onClick={()=>setCurrentStep(3)}>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="25" height="25" rx="12.5" fill="#B4B6BC"/>
                                <path d="M12.4745 18.1392C11.7321 18.1392 11.0709 18.0116 10.4909 17.7564C9.91415 17.4979 9.45842 17.1432 9.12367 16.6925C8.79223 16.2384 8.62154 15.7147 8.61159 15.1214H10.7792C10.7925 15.37 10.8737 15.5888 11.0228 15.7777C11.1753 15.9633 11.3775 16.1075 11.6294 16.2102C11.8812 16.313 12.1646 16.3643 12.4795 16.3643C12.8076 16.3643 13.0976 16.3063 13.3495 16.1903C13.6014 16.0743 13.7986 15.9136 13.9411 15.7081C14.0837 15.5026 14.1549 15.2656 14.1549 14.9972C14.1549 14.7254 14.0787 14.4851 13.9262 14.2763C13.7771 14.0642 13.5616 13.8984 13.2799 13.7791C13.0015 13.6598 12.6701 13.6001 12.2856 13.6001H11.336V12.0192H12.2856C12.6104 12.0192 12.8971 11.9628 13.1457 11.8501C13.3976 11.7375 13.5931 11.5817 13.7323 11.3828C13.8715 11.1806 13.9411 10.9453 13.9411 10.6768C13.9411 10.4216 13.8798 10.1979 13.7572 10.0057C13.6379 9.81013 13.4688 9.65767 13.2501 9.5483C13.0347 9.43892 12.7828 9.38423 12.4944 9.38423C12.2027 9.38423 11.9359 9.43726 11.694 9.54332C11.452 9.64607 11.2581 9.79356 11.1123 9.9858C10.9665 10.178 10.8886 10.4034 10.8786 10.6619H8.81543C8.82537 10.0753 8.99275 9.55824 9.31756 9.1108C9.64237 8.66335 10.0799 8.31368 10.6301 8.06179C11.1836 7.80658 11.8083 7.67898 12.5044 7.67898C13.207 7.67898 13.8218 7.80658 14.3488 8.06179C14.8758 8.317 15.2851 8.66169 15.5768 9.09588C15.8718 9.52675 16.0176 10.0107 16.0143 10.5476C16.0176 11.1177 15.8403 11.5933 15.4823 11.9744C15.1277 12.3556 14.6653 12.5975 14.0953 12.7003V12.7798C14.8443 12.8759 15.4144 13.1361 15.8055 13.5604C16.1999 13.9813 16.3954 14.5083 16.3921 15.1413C16.3954 15.7214 16.2281 16.2367 15.89 16.6875C15.5553 17.1383 15.0929 17.4929 14.5029 17.7514C13.913 18.0099 13.2368 18.1392 12.4745 18.1392Z" fill="white"/>
                            </svg>

                            <label htmlFor="">Pyment Method</label>                    
                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.99984 0L0.589844 1.41L5.16984 6L0.589844 10.59L1.99984 12L7.99984 6L1.99984 0Z" fill="#7E858E"/>
                            </svg>
                        </div>
                    </div>
                    <div className="right">
                        <div className="product_count_price">
                            <p className="count">8 Items</p>
                            <p className="price">$143,991.00</p>
                        </div>
                        <div className="checkout_step_control">
                            <CustomButtonComponent dataname="continue" buttonText="Continue" even={()=>nextStep()}/>
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
padding-top: 12px;
padding-bottom: 12px;

.ch_header_container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        div {
            display: flex;
            align-items: center;
            justify-content: center;
            border: none;
            outline: none;
            padding: 0;
            margin-right: 18px;      
            cursor: pointer;      
            label {
                margin-left: 8px;
                margin-right: 18.5px;
                font-style: normal;
                font-weight: 700;
                font-size: var(--size_14);
                line-height: var(--heigh_20);
                letter-spacing: 0.4px;
                color: #B4B6BC;
                cursor: pointer;
            }  

            &>svg:first-of-type {
                rect {
                  fill: #B4B6BC;
                } 
            }
            &>svg:last-of-type {
                path {
                  fill: #B4B6BC;
                } 
            }
        }

        &>.step:nth-of-type(${props => (props.act_num?props.act_num:1)}) {
            label {
                color: #373D4C;
            }
            &>svg:first-of-type {
                rect {
                  fill: #3A4B6D;
                } 
            }
            &>svg:last-of-type {
                path {
                  fill: #7E858E;
                } 
            }
        }
    }
    
    .right {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-left: 24px;
        position: relative;

        &::after {
            position: absolute;
            content: '';
            left: 0;
            top: 5px;
            bottom: 5px;
            width: 1px;
            background: #E1E1E1;
        }

        .product_count_price{
            margin-right: 115px;
            .count {
                font-style: normal;
                font-weight: 400;
                font-size: var(--size_12);
                line-height: var(--heigh_19);    
                letter-spacing: -0.2px;       
                color: #696E79;
                margin-bottom: 0;
            }
            .price {
                font-style: normal;
                font-weight: 700;
                font-size: var(--size_16);
                line-height: var(--heigh_24);    
                text-transform: capitalize; 
                color: #1E2535;
                margin-bottom: 0;
            }
        } 
    }
} 

`