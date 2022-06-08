/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-html-link-for-pages */
import styled from "styled-components" 
import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import QuantityPicker from './Quantity'
import ImgComponent from "./ImgComponent";
import { useState } from "react";
import OverlineText from "./OverlineText";
import SubTitle02 from "./SubTitle02";
import BodyText01 from "./BodyText01";
import BodyText02 from "./BodyText02";

const creditcard = '../img/icon/card.svg'
const product = '../img/product/bg.png'  

const { Panel } = Collapse;


  

export default function RelatedProductLists(_props:any) {

    const [activeTabs, setActiveTabs] = useState<string[]>([]) 

    const onChangeHandler =(arg:any)=> {
        setActiveTabs(arg)
    }

    return(
        <Component>
             <Collapse
                bordered={false}
                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 270 : 90} />}
                className="site-collapse-custom-collapse" 
                onChange={(evt)=>onChangeHandler(evt)}
            >
                <div className="collaps_header">
                    <div className="collaps_header_top">
                        <div className="ch_item_img">
                            <ImgComponent src={product} alt="product"/>
                        </div>
                        <div className="ch_item_texts">
                            <div className="ch_top">
                                <div className="ch_title">
                                    <h2>Agregate and stone</h2>
                                    <p>Stone. 19mm Clear (3/4)</p>
                                </div>
                                <div className="ch_qty_price">
                                    <div className="ch_quty">
                                        <QuantityPicker min={1} />
                                        <label htmlFor="">m3</label>
                                    </div>
                                    <div className="ch_price">
                                        <h2>$2900.00</h2>
                                        <p>$14.00/to</p>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="ch_bottom">
                                <p>1% Accelerator, 2% Accelerator,  Retarder 2h, Retarder 4h, 1% Accelerator...</p>
                                <u>5 options</u>
                            </div> */}
                        </div>
                    </div>
                    <div className="btn_groups">
                        <div className="delivery_address">
                            <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.9091 3.20455H10.0682V0.75H1.47727C0.802273 0.75 0.25 1.30227 0.25 1.97727V8.72727H1.47727C1.47727 9.74591 2.29955 10.5682 3.31818 10.5682C4.33682 10.5682 5.15909 9.74591 5.15909 8.72727H8.84091C8.84091 9.74591 9.66318 10.5682 10.6818 10.5682C11.7005 10.5682 12.5227 9.74591 12.5227 8.72727H13.75V5.65909L11.9091 3.20455ZM3.31818 9.64773C2.80886 9.64773 2.39773 9.23659 2.39773 8.72727C2.39773 8.21795 2.80886 7.80682 3.31818 7.80682C3.8275 7.80682 4.23864 8.21795 4.23864 8.72727C4.23864 9.23659 3.8275 9.64773 3.31818 9.64773ZM11.6023 4.125L12.805 5.65909H10.0682V4.125H11.6023ZM10.6818 9.64773C10.1725 9.64773 9.76136 9.23659 9.76136 8.72727C9.76136 8.21795 10.1725 7.80682 10.6818 7.80682C11.1911 7.80682 11.6023 8.21795 11.6023 8.72727C11.6023 9.23659 11.1911 9.64773 10.6818 9.64773Z" fill="#3A4B6D"/>
                            </svg>
                            Delivery to address
                        </div>
                        <div className="pick_address">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 0.5C3.86 0.5 0.5 3.86 0.5 8C0.5 12.14 3.86 15.5 8 15.5C12.14 15.5 15.5 12.14 15.5 8C15.5 3.86 12.14 0.5 8 0.5ZM8 14C4.685 14 2 11.315 2 8C2 6.6125 2.4725 5.3375 3.2675 4.325L11.675 12.7325C10.6625 13.5275 9.3875 14 8 14ZM12.7325 11.675L4.325 3.2675C5.3375 2.4725 6.6125 2 8 2C11.315 2 14 4.685 14 8C14 9.3875 13.5275 10.6625 12.7325 11.675Z" fill="#696E79"/>
                            </svg>
                            Pickup Delivery
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
                        <div className="ch_item_img">
                            <ImgComponent src={product} alt="product"/>
                        </div>
                        <div className="ch_item_texts">
                            <div className="ch_top">
                                <div className="ch_title">
                                    <h2>Agregate and stone</h2>
                                    <p>Stone. 19mm Clear (3/4)</p>
                                </div>
                                <div className="ch_qty_price">
                                    <div className="ch_quty">
                                        <QuantityPicker min={1} />
                                        <label htmlFor="">m3</label>
                                    </div>
                                    <div className="ch_price">
                                        <h2>$2900.00</h2>
                                        <p>$14.00/to</p>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="ch_bottom">
                                <p>1% Accelerator, 2% Accelerator,  Retarder 2h, Retarder 4h, 1% Accelerator...</p>
                                <u>5 options</u>
                            </div> */}
                        </div>
                    </div>
                    <div className="btn_groups">
                        <div className="delivery_address">
                            <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.9091 3.20455H10.0682V0.75H1.47727C0.802273 0.75 0.25 1.30227 0.25 1.97727V8.72727H1.47727C1.47727 9.74591 2.29955 10.5682 3.31818 10.5682C4.33682 10.5682 5.15909 9.74591 5.15909 8.72727H8.84091C8.84091 9.74591 9.66318 10.5682 10.6818 10.5682C11.7005 10.5682 12.5227 9.74591 12.5227 8.72727H13.75V5.65909L11.9091 3.20455ZM3.31818 9.64773C2.80886 9.64773 2.39773 9.23659 2.39773 8.72727C2.39773 8.21795 2.80886 7.80682 3.31818 7.80682C3.8275 7.80682 4.23864 8.21795 4.23864 8.72727C4.23864 9.23659 3.8275 9.64773 3.31818 9.64773ZM11.6023 4.125L12.805 5.65909H10.0682V4.125H11.6023ZM10.6818 9.64773C10.1725 9.64773 9.76136 9.23659 9.76136 8.72727C9.76136 8.21795 10.1725 7.80682 10.6818 7.80682C11.1911 7.80682 11.6023 8.21795 11.6023 8.72727C11.6023 9.23659 11.1911 9.64773 10.6818 9.64773Z" fill="#3A4B6D"/>
                            </svg>
                            Delivery to address
                        </div>
                        <div className="pick_address">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 0.5C3.86 0.5 0.5 3.86 0.5 8C0.5 12.14 3.86 15.5 8 15.5C12.14 15.5 15.5 12.14 15.5 8C15.5 3.86 12.14 0.5 8 0.5ZM8 14C4.685 14 2 11.315 2 8C2 6.6125 2.4725 5.3375 3.2675 4.325L11.675 12.7325C10.6625 13.5275 9.3875 14 8 14ZM12.7325 11.675L4.325 3.2675C5.3375 2.4725 6.6125 2 8 2C11.315 2 14 4.685 14 8C14 9.3875 13.5275 10.6625 12.7325 11.675Z" fill="#696E79"/>
                            </svg>
                            Pickup Delivery
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
                        <div className="ch_item_img">
                            <ImgComponent src={product} alt="product"/>
                        </div>
                        <div className="ch_item_texts">
                            <div className="ch_top">
                                <div className="ch_title">
                                    <h2>Agregate and stone</h2>
                                    <p>Stone. 19mm Clear (3/4)</p>
                                </div>
                                <div className="ch_qty_price">
                                    <div className="ch_quty">
                                        <QuantityPicker min={1} />
                                        <label htmlFor="">m3</label>
                                    </div>
                                    <div className="ch_price">
                                        <h2>$2900.00</h2>
                                        <p>$14.00/to</p>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="ch_bottom">
                                <p>1% Accelerator, 2% Accelerator,  Retarder 2h, Retarder 4h, 1% Accelerator...</p>
                                <u>5 options</u>
                            </div> */}
                        </div>
                    </div>
                    <div className="btn_groups">
                        <div className="delivery_address">
                            <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.9091 3.20455H10.0682V0.75H1.47727C0.802273 0.75 0.25 1.30227 0.25 1.97727V8.72727H1.47727C1.47727 9.74591 2.29955 10.5682 3.31818 10.5682C4.33682 10.5682 5.15909 9.74591 5.15909 8.72727H8.84091C8.84091 9.74591 9.66318 10.5682 10.6818 10.5682C11.7005 10.5682 12.5227 9.74591 12.5227 8.72727H13.75V5.65909L11.9091 3.20455ZM3.31818 9.64773C2.80886 9.64773 2.39773 9.23659 2.39773 8.72727C2.39773 8.21795 2.80886 7.80682 3.31818 7.80682C3.8275 7.80682 4.23864 8.21795 4.23864 8.72727C4.23864 9.23659 3.8275 9.64773 3.31818 9.64773ZM11.6023 4.125L12.805 5.65909H10.0682V4.125H11.6023ZM10.6818 9.64773C10.1725 9.64773 9.76136 9.23659 9.76136 8.72727C9.76136 8.21795 10.1725 7.80682 10.6818 7.80682C11.1911 7.80682 11.6023 8.21795 11.6023 8.72727C11.6023 9.23659 11.1911 9.64773 10.6818 9.64773Z" fill="#3A4B6D"/>
                            </svg>
                            Delivery to address
                        </div>
                        <div className="pick_address">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 0.5C3.86 0.5 0.5 3.86 0.5 8C0.5 12.14 3.86 15.5 8 15.5C12.14 15.5 15.5 12.14 15.5 8C15.5 3.86 12.14 0.5 8 0.5ZM8 14C4.685 14 2 11.315 2 8C2 6.6125 2.4725 5.3375 3.2675 4.325L11.675 12.7325C10.6625 13.5275 9.3875 14 8 14ZM12.7325 11.675L4.325 3.2675C5.3375 2.4725 6.6125 2 8 2C11.315 2 14 4.685 14 8C14 9.3875 13.5275 10.6625 12.7325 11.675Z" fill="#696E79"/>
                            </svg>
                            Pickup Delivery
                        </div>
                    </div>
                    <div className="more_icon">
                        <svg width="4" height="14" viewBox="0 0 4 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.00065 3.66671C2.91732 3.66671 3.66732 2.91671 3.66732 2.00004C3.66732 1.08337 2.91732 0.333374 2.00065 0.333374C1.08398 0.333374 0.333984 1.08337 0.333984 2.00004C0.333984 2.91671 1.08398 3.66671 2.00065 3.66671ZM2.00065 5.33337C1.08398 5.33337 0.333984 6.08337 0.333984 7.00004C0.333984 7.91671 1.08398 8.66671 2.00065 8.66671C2.91732 8.66671 3.66732 7.91671 3.66732 7.00004C3.66732 6.08337 2.91732 5.33337 2.00065 5.33337ZM2.00065 10.3334C1.08398 10.3334 0.333984 11.0834 0.333984 12C0.333984 12.9167 1.08398 13.6667 2.00065 13.6667C2.91732 13.6667 3.66732 12.9167 3.66732 12C3.66732 11.0834 2.91732 10.3334 2.00065 10.3334Z" fill="#7E858E"/>
                        </svg>
                    </div>
                </div>
                <Panel header={activeTabs.length > 0 && activeTabs.indexOf('1') !==-1?"Hide details":"show more"} key={1} className="site-collapse-custom-panel" id="testp">
                    <OverlineText text="ORDER"/>
                    <div className="detail_content">
                        <div className=""> 
                            <SubTitle02 text='Agregate and stone'/> 
                            <BodyText01 text='$14.00/to' color='#272727'/>
                        </div>     
                        <div>
                            <BodyText02 text='Stone. 19mm Clear (3/4)' color='#696E79'/>
                        </div>
                        <div>
                            <OverlineText text='x' color='#696E79'/>
                            <OverlineText text='100 to' color='#696E79' />
                        </div>  
                        <div className="detail_content_footer">
                            <p>Subtotal</p>
                            <SubTitle02 text='$2900.00' color='#272727' />
                        </div>                 
                    </div>
                    <OverlineText text="FEES"/>
                    <div className="detail_content fee">
                        <div className=""> 
                            <label htmlFor="">t1</label>
                            <p>$50.00</p>
                        </div> 
                        <div className=""> 
                            <label htmlFor="">Carbon tax</label>
                            <p>$7.50</p>
                        </div>     
                        <div className=""> 
                            <label htmlFor="">Winter Heat</label>
                            <p>$100.00</p>
                        </div> 
                        <div className=""> 
                            <label htmlFor="">TimeFrame RMX</label>
                            <p>$21.00</p>
                        </div> 
                        <div className=""> 
                            <label htmlFor="">Fuel</label>
                            <p>$10.00</p>
                        </div>                         
                        <div className="detail_content_footer">
                            <p>Subtotal</p>
                            <SubTitle02 text='$2900.00' color='#272727' />
                        </div>                 
                    </div>
                </Panel>                   
            </Collapse>
        </Component>
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
padding-bottom: 20px;
.ant-collapse > .ant-collapse-item > .ant-collapse-header {
    bottom: -26px;
}

.ant-collapse-content-active .ant-collapse-content-box {
    padding-bottom: 0;
}

.detail_content.fee {
    margin-bottom: 0;
    div {
        margin-bottom: 15px;
    }
    &>div:last-of-type {
        margin-bottom: 0; 
    }
    label {
        font-style: normal;
        font-weight: 600;
        font-size: var(--size_12);
        line-height: var(--heigh_19); 
        letter-spacing: -0.2px; 
        color: #333338;
    }
    p {
        font-style: normal;
        font-weight: 600;
        font-size: var(--size_12);
        line-height: var(--heigh_19); 
        text-align: right;
        letter-spacing: 0.2px;  
        color: #272727;
        margin-bottom: 0;
    }
}

.detail_content {
    background: #F9F9F9;
    padding: 15px;
    margin-top:5px;
    margin-bottom:15px;
    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .detail_content_footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-top: solid 1px rgba(89, 89, 89, 0.1);
        padding-top: 15px;
        &>*{
            margin-bottom:0;
        }
        p {
            font-style: normal;
            font-weight: 600;
            font-size: var(--size_12);
            line-height: var(--heigh_19); 
            letter-spacing: -0.2px; 
            color: #1E2535;
        }
    }
}

.collaps_header { 
    position: relative; 
    width: 100%;
    background: #FFFFFF;
    padding-top: 15px;
    padding-bottom: 15px; 
    border-bottom: 1px solid rgba(89, 89, 89, 0.1);; 
    .collaps_header_top {
        display: flex;
        width: 100%;
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
        margin-top: 15px;
        display: flex;
        .delivery_address {
            background: #E0E9F7;
            border-radius: 4px; 
            width: 138px;
            height: 22px;
            font-style: normal;
            font-weight: 400;
            font-size: var(--size_10);
            line-height: var(--heigh_14); 
            letter-spacing: 0.15px; 
            color: #1E2535;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 10px;
            cursor: pointer;
            svg {
                margin-right: 7.25px;
            }
        }
        .pick_address {
            cursor: pointer;
            width: 118px;
            height: 22px;
            background: #F2F3F4;
            border-radius: 4px;
            font-style: normal;
            font-weight: 400;
            font-size: var(--size_10);
            line-height: var(--heigh_14); 
            letter-spacing: 0.15px; 
            color: #696E79;
            display: flex;
            align-items: center;
            justify-content: center;
            svg {
                margin-right: 6.5px;
            }
        }
    }
}
.ant-collapse-item {
    margin-bottom: 10px;
}
` 