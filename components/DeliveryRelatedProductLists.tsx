/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-html-link-for-pages */
import styled from "styled-components"  
import QuantityPicker from './Quantity'
import ImgComponent from "./ImgComponent"; 
import MapAddressModal from "./MapAddressModal";
import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import StoreChooseModal from "./StoreChooseModal";

const product = '../img/product/bg.png'     

export default function DeliveryRelatedProductLists(_props:any) { 
    const {
        isMapModalShow,
        setIsMapModalShow,
        isStoreModalShow,
        setIsStoreModalShow
    } = useContext(AppContext)   

    const showmodal = () => { 
        setIsMapModalShow(true)
    }

    const showStoremodal = () => {
        setIsStoreModalShow(true)
    }

    return(
        <>
            <Component> 
                <div className="collaps_header">
                    <div className="collaps_header_top">
                        <div className="top_left">
                            <div className="ch_item_img">
                                <ImgComponent src={product} alt="product"/>
                            </div>
                            <div className="ch_item_texts">
                                <div className="ch_top">
                                    <div className="ch_title">
                                        <h2>Agregate and stone</h2>
                                        <p>Stone. 19mm Clear (3/4)</p>
                                    </div>
                                    <div className="ch_qty_price has_error">
                                        <div className="ch_quty">
                                            <QuantityPicker min={1} />
                                            <label htmlFor="">m3</label>
                                        </div>                                
                                    </div>
                                    <p className="error active">Maximum 99 at this store </p>
                                </div> 
                            </div>
                        </div>
                        <div className="top_right">
                            <div className="deliveryToAddress triangle" onClick={(e)=>showmodal()}>
                                Delivery to address
                            </div>
                            <div className="map_palce" onClick={(e)=>showStoremodal()}>
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.1667 0.833252H0.833333V2.49992H14.1667V0.833252ZM15 9.16658V7.49992L14.1667 3.33325H0.833333L0 7.49992V9.16658H0.833333V14.1666H9.16667V9.16658H12.5V14.1666H14.1667V9.16658H15ZM7.5 12.4999H2.5V9.16658H7.5V12.4999Z" fill="#BC2B2B"/>
                                </svg>
                                <div>
                                    Toronto, 333 Dension Street, Unit ..
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="collapse_bottom">
                        <div className="btn_groups">
                            <div className="delivery_address">
                                <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.5 0H1.5V2H17.5V0ZM18.5 10V8L17.5 3H1.5L0.5 8V10H1.5V16H11.5V10H15.5V16H17.5V10H18.5ZM9.5 14H3.5V10H9.5V14Z" fill="#7E858E"/>
                                </svg>
                                Pickup Delivery
                            </div>
                            <div className="price">Free</div>
                        </div>
                        <div className="openTime">
                            <label htmlFor="">Open</label> <span>8 AM - 6 PM</span>
                        </div>
                    </div>                
                    <div className="more_icon">
                        <svg width="4" height="14" viewBox="0 0 4 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.00065 3.66671C2.91732 3.66671 3.66732 2.91671 3.66732 2.00004C3.66732 1.08337 2.91732 0.333374 2.00065 0.333374C1.08398 0.333374 0.333984 1.08337 0.333984 2.00004C0.333984 2.91671 1.08398 3.66671 2.00065 3.66671ZM2.00065 5.33337C1.08398 5.33337 0.333984 6.08337 0.333984 7.00004C0.333984 7.91671 1.08398 8.66671 2.00065 8.66671C2.91732 8.66671 3.66732 7.91671 3.66732 7.00004C3.66732 6.08337 2.91732 5.33337 2.00065 5.33337ZM2.00065 10.3334C1.08398 10.3334 0.333984 11.0834 0.333984 12C0.333984 12.9167 1.08398 13.6667 2.00065 13.6667C2.91732 13.6667 3.66732 12.9167 3.66732 12C3.66732 11.0834 2.91732 10.3334 2.00065 10.3334Z" fill="#7E858E"/>
                        </svg>
                    </div>
                </div>
                <div className="collaps_header">
                    <div className="collaps_header_top">
                        <div className="top_left">
                            <div className="ch_item_img">
                                <ImgComponent src={product} alt="product"/>
                            </div>
                            <div className="ch_item_texts">
                                <div className="ch_top">
                                    <div className="ch_title">
                                        <h2>Agregate and stone</h2>
                                        <p>Stone. 19mm Clear (3/4)</p>
                                    </div>
                                    <div className="ch_qty_price has_error">
                                        <div className="ch_quty">
                                            <QuantityPicker min={1} />
                                            <label htmlFor="">m3</label>
                                        </div>                                
                                    </div>
                                    <p className="error active">Maximum 99 at this store </p>
                                </div> 
                            </div>
                        </div>
                        <div className="top_right">
                            <div className="deliveryToAddress triangle" onClick={(e)=>showmodal()}>
                                Delivery to address
                            </div>
                            <div className="map_palce" onClick={(e)=>showStoremodal()}>
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.1667 0.833252H0.833333V2.49992H14.1667V0.833252ZM15 9.16658V7.49992L14.1667 3.33325H0.833333L0 7.49992V9.16658H0.833333V14.1666H9.16667V9.16658H12.5V14.1666H14.1667V9.16658H15ZM7.5 12.4999H2.5V9.16658H7.5V12.4999Z" fill="#BC2B2B"/>
                                </svg>
                                <div>
                                    Toronto, 333 Dension Street, Unit ..
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="collapse_bottom">
                        <div className="btn_groups">
                            <div className="delivery_address">
                                <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.5 0H1.5V2H17.5V0ZM18.5 10V8L17.5 3H1.5L0.5 8V10H1.5V16H11.5V10H15.5V16H17.5V10H18.5ZM9.5 14H3.5V10H9.5V14Z" fill="#7E858E"/>
                                </svg>
                                Pickup Delivery
                            </div>
                            <div className="price">Free</div>
                        </div>
                        <div className="openTime">
                            <label htmlFor="">Open</label> <span>8 AM - 6 PM</span>
                        </div>
                    </div>                
                    <div className="more_icon">
                        <svg width="4" height="14" viewBox="0 0 4 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.00065 3.66671C2.91732 3.66671 3.66732 2.91671 3.66732 2.00004C3.66732 1.08337 2.91732 0.333374 2.00065 0.333374C1.08398 0.333374 0.333984 1.08337 0.333984 2.00004C0.333984 2.91671 1.08398 3.66671 2.00065 3.66671ZM2.00065 5.33337C1.08398 5.33337 0.333984 6.08337 0.333984 7.00004C0.333984 7.91671 1.08398 8.66671 2.00065 8.66671C2.91732 8.66671 3.66732 7.91671 3.66732 7.00004C3.66732 6.08337 2.91732 5.33337 2.00065 5.33337ZM2.00065 10.3334C1.08398 10.3334 0.333984 11.0834 0.333984 12C0.333984 12.9167 1.08398 13.6667 2.00065 13.6667C2.91732 13.6667 3.66732 12.9167 3.66732 12C3.66732 11.0834 2.91732 10.3334 2.00065 10.3334Z" fill="#7E858E"/>
                        </svg>
                    </div>
                </div> 
                <div className="collaps_header">
                    <div className="collaps_header_top">
                        <div className="top_left">
                            <div className="ch_item_img">
                                <ImgComponent src={product} alt="product"/>
                            </div>
                            <div className="ch_item_texts">
                                <div className="ch_top">
                                    <div className="ch_title">
                                        <h2>Agregate and stone</h2>
                                        <p>Stone. 19mm Clear (3/4)</p>
                                    </div>
                                    <div className="ch_qty_price has_error">
                                        <div className="ch_quty">
                                            <QuantityPicker min={1} />
                                            <label htmlFor="">m3</label>
                                        </div>                                
                                    </div>
                                    <p className="error active">Maximum 99 at this store </p>
                                </div> 
                            </div>
                        </div>
                        <div className="top_right">
                            <div className="deliveryToAddress triangle" onClick={(e)=>showmodal()}>
                                Delivery to address
                            </div>
                            <div className="map_palce" onClick={(e)=>showStoremodal()}>
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.1667 0.833252H0.833333V2.49992H14.1667V0.833252ZM15 9.16658V7.49992L14.1667 3.33325H0.833333L0 7.49992V9.16658H0.833333V14.1666H9.16667V9.16658H12.5V14.1666H14.1667V9.16658H15ZM7.5 12.4999H2.5V9.16658H7.5V12.4999Z" fill="#BC2B2B"/>
                                </svg>
                                <div>
                                    Toronto, 333 Dension Street, Unit ..
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="collapse_bottom">
                        <div className="btn_groups">
                            <div className="delivery_address">
                                <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.5 0H1.5V2H17.5V0ZM18.5 10V8L17.5 3H1.5L0.5 8V10H1.5V16H11.5V10H15.5V16H17.5V10H18.5ZM9.5 14H3.5V10H9.5V14Z" fill="#7E858E"/>
                                </svg>
                                Pickup Delivery
                            </div>
                            <div className="price">Free</div>
                        </div>
                        <div className="openTime">
                            <label htmlFor="">Open</label> <span>8 AM - 6 PM</span>
                        </div>
                    </div>                
                    <div className="more_icon">
                        <svg width="4" height="14" viewBox="0 0 4 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.00065 3.66671C2.91732 3.66671 3.66732 2.91671 3.66732 2.00004C3.66732 1.08337 2.91732 0.333374 2.00065 0.333374C1.08398 0.333374 0.333984 1.08337 0.333984 2.00004C0.333984 2.91671 1.08398 3.66671 2.00065 3.66671ZM2.00065 5.33337C1.08398 5.33337 0.333984 6.08337 0.333984 7.00004C0.333984 7.91671 1.08398 8.66671 2.00065 8.66671C2.91732 8.66671 3.66732 7.91671 3.66732 7.00004C3.66732 6.08337 2.91732 5.33337 2.00065 5.33337ZM2.00065 10.3334C1.08398 10.3334 0.333984 11.0834 0.333984 12C0.333984 12.9167 1.08398 13.6667 2.00065 13.6667C2.91732 13.6667 3.66732 12.9167 3.66732 12C3.66732 11.0834 2.91732 10.3334 2.00065 10.3334Z" fill="#7E858E"/>
                        </svg>
                    </div>
                </div>                
            </Component>
            <MapAddressModal/>
            <StoreChooseModal />
        </>
    )
}

const Component = styled.div` 
width: 100%; 
position: relative; 
background: #FFFFFF;
padding: 15px; 
padding-top: 0;
border: 1px solid #F9F9F9; 
box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
border-radius: 4px;   
&>.collaps_header:last-of-type {
    margin-bottom: 0;
    .collapse_bottom {
        border-bottom:none;
    }
}
.collaps_header { 
    position: relative; 
    width: 100%;
    background: #FFFFFF;
    padding-top: 15px;  
    margin-bottom: 5px;
    .collaps_header_top {
        display: flex;
        width: 100%;
        justify-content: space-between;
        padding-right: 50px;
        .top_left {
            display: flex;
        }
        .top_right {
            .deliveryToAddress {
                width: 296px;
                height: 40px;
                font-style: normal;
                font-weight: 400;
                font-size: var(--size_14);
                line-height: var(--heigh_20);
                color: #B4B6BC;
                background: #F2F3F4;
                border-radius: 4px; 
                display: flex; 
                align-items: center;
                padding-left: 12px;
                cursor: pointer;
                &:after {
                    right: 11px;
                    top: 50%;
                }
            }
            .map_palce {
                width: 296px;
                height: 40px;
                background: #F2F3F4;
                border-radius: 4px; 
                display: flex; 
                align-items: center;
                margin-top: 12px;
                padding: 10px 15px;
                svg { 
                    margin-right: 14px;
                }
            }
        }
    }
    .ch_item_img {
        border-radius: 4px;
        width: 90px;
        height: 90px;
    }
    .ch_item_texts {
        margin-left: 15px;    
        .ch_top {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            .error {
                font-style: normal;
                font-weight: 400;
                font-size: var(--size_10);
                line-height: var(--heigh_14); 
                letter-spacing: 0.15px;
                color: #DF0C0C;
                display: none;
                margin-bottom: 0;
                &.active {
                    display: block;
                }
            }
            .ch_title {
                margin-bottom: 12px;
                h2 {
                    font-style: normal;
                    font-weight: 700;
                    font-size: var(--size_16);
                    line-height: var(--heigh_24); 
                    letter-spacing: 0.44px;
                    text-transform: capitalize; 
                    color: #1E2535;
                    margin-bottom: 0;
                }
                p{
                    font-style: normal;
                    font-weight: 400;
                    font-size: var(--size_12);
                    line-height: var(--heigh_19); 
                    letter-spacing: 0.22px;
                    color: #696E79;
                    margin-bottom: 0;
                }
            }
            .ch_qty_price {
                display: flex;
                justify-content: flex-end;
                &.has_error .quantity-input{
                    border: 1px solid #DF0C0C;
                    border-radius: 4px;
                }
                .ch_quty { 
                    display: flex;
                    align-items: center;
                    label {
                        font-style: normal;
                        font-weight: 500;
                        font-size: var(--size_14);
                        line-height: var(--heigh_21); 
                        display: flex;
                        align-items: center;
                        text-align: center;
                        letter-spacing: 0.1px; 
                        color: #1E2535;
                        margin-left: 13px;
                    }
                     
                }
                .ch_price {
                    width: 155px;
                    padding-left: 15px;
                    h2 {
                        font-style: normal;
                        font-weight: 700;
                        text-align: right;
                        font-size: var(--size_16);
                        line-height: var(--heigh_24); 
                        letter-spacing: 0.44px;
                        text-transform: capitalize; 
                        color: #1E2535;
                        margin-bottom: 0;
                    }
                    p{
                        font-style: normal;
                        font-weight: 400;
                        font-size: var(--size_12);
                        line-height: var(--heigh_19); 
                        text-align: right;
                        letter-spacing: 0.22px; 
                        color: #696E79;
                        margin-bottom: 0;
                    }
                }
            }
        }
        .ch_bottom {
            margin-top: 10px;
            p {
                font-style: normal;
                font-weight: 400;
                font-size: var(--size_10);
                line-height: var(--heigh_14); 
                letter-spacing: 0.15px; 
                color: #696E79;
                margin-bottom: 0;
            }
            u {
                font-style: normal;
                font-weight: 500;
                font-size: var(--size_12);
                line-height: var(--heigh_19); 
                letter-spacing: 0.22px;   
                color: #373D4C;
                margin-bottom: 0;
                margin-top: 3px;
                cursor: pointer;
            }
        }

    }
    .more_icon{
        position: absolute;
        top: 20px;
        right: 25px;
        cursor: pointer;
        &>svg:hover {
            path {
              fill: #000000;
            }
        }
    }

    .btn_groups { 
        display: flex;
        .delivery_address {   
            font-style: normal;
            font-weight: 400;
            font-size: var(--size_12);
            line-height: var(--heigh_18); 
            letter-spacing: 0.15px; 
            color: #696E79;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 10px;
            cursor: pointer;
            svg {
                margin-right: 7.25px;
            }
        }
        .price {
            font-style: normal;
            font-weight: 400;
            font-size: var(--size_12);
            line-height: var(--heigh_20); 
            display: flex; 
            align-items: center;
            text-align: right; 
            justify-content: center;
            color: #1E2535;
            width: 44px;
            height: 19px;
            background: linear-gradient(0deg,rgba(255,255,255,0.3),rgba(255,255,255,0.3)),#D2E0F3;
            border-radius: 23px;
        }
    }
} 
.collapse_bottom {
    display: flex; 
    align-items: center; 
    justify-content: space-between;
    margin-top: 15px;
    padding-right: 50px;
    padding-bottom: 25px;
    border-bottom: solid 1px rgba(89, 89, 89, 0.1);
    .openTime {
        label {
            font-style: normal;
            font-weight: 600;
            font-size: var(--size_12);
            line-height: var(--heigh_21);   
            color: #272727;
            margin-right: 8px;
        }
        span {
            font-style: normal;
            font-weight: 400;
            font-size: var(--size_12);
            line-height: var(--heigh_21);   
            color: #272727;
        }
    }
}
` 