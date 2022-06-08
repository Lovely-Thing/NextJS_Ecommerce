/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-html-link-for-pages */
import styled from "styled-components"  
import ImgComponent from "./ImgComponent";
import { useContext } from "react"; 
import DatePickerComponent from "./DatePickerComponent";
import TimePickerComponent from "./TimePickerComponent";
import { AppContext } from "../context/AppContext"; 
import EditQtyModal from "./EditQtyModal";
import StoreChooseModal from "./StoreChooseModal";

const product = '../img/product/bg.png'  
  

export default function DeliveryLists(_props:any) {      
    const { 
        setIsMapModalShow,
        setIsStoreModalShow,
        isEditQtyModalVisible,
        setIsEditQtyModalVisible
    } = useContext(AppContext) 
 
    
    const showModal =()=> { 
        setIsEditQtyModalVisible(true);
    }

    return(
        <Component>
              
            <div className="collaps_header">
                <div className="collaps_header_top">
                    <div>
                        <div className="ch_item_img">
                            <ImgComponent src={product} alt="product"/>
                        </div>
                        <div className="ch_item_texts">
                            <div className="ch_top">
                                <div className="ch_title">
                                    <h2>Agregate and stone</h2>
                                    <p>Stone. 19mm Clear (3/4)</p>
                                </div>
                                
                            </div>
                            <div className="ch_bottom">
                                <u onClick={showModal}>5 Truck</u><label htmlFor="">(100 m3)</label>
                                <p>+ 1 Balance truck</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="deliveryToAddress triangle" onClick={(e)=>setIsMapModalShow(true)}>
                            Delivery to address
                        </div>
                        <div className="map_palce" onClick={(e)=>setIsStoreModalShow(true)}>
                            <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 0C3.13 0 0 3.13 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 3.13 10.87 0 7 0ZM7 9.5C5.62 9.5 4.5 8.38 4.5 7C4.5 5.62 5.62 4.5 7 4.5C8.38 4.5 9.5 5.62 9.5 7C9.5 8.38 8.38 9.5 7 9.5Z" fill="#3A4B6D"/>
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
                            <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.9091 3.20455H10.0682V0.75H1.47727C0.802273 0.75 0.25 1.30227 0.25 1.97727V8.72727H1.47727C1.47727 9.74591 2.29955 10.5682 3.31818 10.5682C4.33682 10.5682 5.15909 9.74591 5.15909 8.72727H8.84091C8.84091 9.74591 9.66318 10.5682 10.6818 10.5682C11.7005 10.5682 12.5227 9.74591 12.5227 8.72727H13.75V5.65909L11.9091 3.20455ZM3.31818 9.64773C2.80886 9.64773 2.39773 9.23659 2.39773 8.72727C2.39773 8.21795 2.80886 7.80682 3.31818 7.80682C3.8275 7.80682 4.23864 8.21795 4.23864 8.72727C4.23864 9.23659 3.8275 9.64773 3.31818 9.64773ZM11.6023 4.125L12.805 5.65909H10.0682V4.125H11.6023ZM10.6818 9.64773C10.1725 9.64773 9.76136 9.23659 9.76136 8.72727C9.76136 8.21795 10.1725 7.80682 10.6818 7.80682C11.1911 7.80682 11.6023 8.21795 11.6023 8.72727C11.6023 9.23659 11.1911 9.64773 10.6818 9.64773Z" fill="#3A4B6D"/>
                            </svg>
                            Delivery to address
                        </div>
                        <div className="price">
                            $120
                        </div>
                    </div>
                    <div className="delivery_time">
                        <div className="mr_20">
                            <DatePickerComponent />
                        </div>
                        <div>
                            <TimePickerComponent />
                        </div>
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
                    <div>
                        <div className="ch_item_img">
                            <ImgComponent src={product} alt="product"/>
                        </div>
                        <div className="ch_item_texts">
                            <div className="ch_top">
                                <div className="ch_title">
                                    <h2>Agregate and stone</h2>
                                    <p>Stone. 19mm Clear (3/4)</p>
                                </div>
                                
                            </div>
                            <div className="ch_bottom">
                                <u onClick={showModal}>5 Truck</u><label htmlFor="">(100 m3)</label>
                                <p>+ 1 Balance truck</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="deliveryToAddress triangle" onClick={(e)=>setIsMapModalShow(true)}>
                            Delivery to address
                        </div>
                        <div className="map_palce" onClick={(e)=>setIsStoreModalShow(true)}>
                            <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 0C3.13 0 0 3.13 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 3.13 10.87 0 7 0ZM7 9.5C5.62 9.5 4.5 8.38 4.5 7C4.5 5.62 5.62 4.5 7 4.5C8.38 4.5 9.5 5.62 9.5 7C9.5 8.38 8.38 9.5 7 9.5Z" fill="#3A4B6D"/>
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
                            <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.9091 3.20455H10.0682V0.75H1.47727C0.802273 0.75 0.25 1.30227 0.25 1.97727V8.72727H1.47727C1.47727 9.74591 2.29955 10.5682 3.31818 10.5682C4.33682 10.5682 5.15909 9.74591 5.15909 8.72727H8.84091C8.84091 9.74591 9.66318 10.5682 10.6818 10.5682C11.7005 10.5682 12.5227 9.74591 12.5227 8.72727H13.75V5.65909L11.9091 3.20455ZM3.31818 9.64773C2.80886 9.64773 2.39773 9.23659 2.39773 8.72727C2.39773 8.21795 2.80886 7.80682 3.31818 7.80682C3.8275 7.80682 4.23864 8.21795 4.23864 8.72727C4.23864 9.23659 3.8275 9.64773 3.31818 9.64773ZM11.6023 4.125L12.805 5.65909H10.0682V4.125H11.6023ZM10.6818 9.64773C10.1725 9.64773 9.76136 9.23659 9.76136 8.72727C9.76136 8.21795 10.1725 7.80682 10.6818 7.80682C11.1911 7.80682 11.6023 8.21795 11.6023 8.72727C11.6023 9.23659 11.1911 9.64773 10.6818 9.64773Z" fill="#3A4B6D"/>
                            </svg>
                            Delivery to address
                        </div>
                        <div className="price">
                            $120
                        </div>
                    </div>
                    <div className="delivery_time">
                        <div className="mr_20">
                            <DatePickerComponent />
                        </div>
                        <div>
                            <TimePickerComponent />
                        </div>
                    </div>
                </div>
                <div className="more_icon">
                    <svg width="4" height="14" viewBox="0 0 4 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.00065 3.66671C2.91732 3.66671 3.66732 2.91671 3.66732 2.00004C3.66732 1.08337 2.91732 0.333374 2.00065 0.333374C1.08398 0.333374 0.333984 1.08337 0.333984 2.00004C0.333984 2.91671 1.08398 3.66671 2.00065 3.66671ZM2.00065 5.33337C1.08398 5.33337 0.333984 6.08337 0.333984 7.00004C0.333984 7.91671 1.08398 8.66671 2.00065 8.66671C2.91732 8.66671 3.66732 7.91671 3.66732 7.00004C3.66732 6.08337 2.91732 5.33337 2.00065 5.33337ZM2.00065 10.3334C1.08398 10.3334 0.333984 11.0834 0.333984 12C0.333984 12.9167 1.08398 13.6667 2.00065 13.6667C2.91732 13.6667 3.66732 12.9167 3.66732 12C3.66732 11.0834 2.91732 10.3334 2.00065 10.3334Z" fill="#7E858E"/>
                    </svg>
                </div>
            </div>  
            <EditQtyModal/> 
        </Component>
    )
}

const Component = styled.div` 
width: 100%;  
.collaps_header { 
    position: relative; 
    width: 100%;
    background: #FFFFFF; 
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    padding: 15px;  
    margin-bottom: 10px;
    .collaps_header_top {
        display: flex;
        justify-content: space-between;
        padding-right: 50px;
        width: 100%;
        &>div:nth-of-type(1) {
            display: flex;
        }

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
            padding-left:12px;
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
                path {
                    fill:#7E858E;
                }
                width: 11px;
                height: 16px;
                margin-right:17px;
            }
            div {
                font-style: normal;
                font-weight: 400;
                font-size: var(--size_14);
                line-height: var(--heigh_20);  
                color: #282A31;
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
        width: 100%;
        padding-right: 40px;
        .ch_top {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            .ch_title {
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
            border-radius: 4px; 
            width: fit-content; 
            font-style: normal;
            font-weight: 400;
            font-size: var(--size_12);
            line-height: var(--heigh_18); 
            letter-spacing: 0.15px; 
            color: #1E2535;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 10px;
            cursor: pointer;
            svg {
                margin-right: 7.25px;
                width:20px;
                height:14px;
                path {
                    fill: #7E858E;
                }
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
            background: linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), #D2E0F3;
            border-radius: 23px;
        }
    }
    .collapse_bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 15px;
        padding-right: 50px;
        .delivery_time {
            display: flex;
            align-items: center;
            justify-content: flex-end; 
        }  
    }
}
.ant-collapse-item {
    margin-bottom: 10px;
} 

` 