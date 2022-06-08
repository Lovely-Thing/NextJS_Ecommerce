/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-html-link-for-pages */
import styled from "styled-components" 
import { Button } from 'antd'; 
import ImgComponent from "./ImgComponent";
import { useState } from "react";
import Link from "next/link";

const pdf_icon = '../img/icon/pdf.png' 
const product = '../img/product/buy (2).png' 
const product1 = '../img/product/buy (1).png'  


  

export default function DeliveryTabContent(_props:any) { 
    

    return(
        <Component>               
            <div className="order_id"># 2200981416</div>
            <div className="orderday">
                12.03.22
            </div>
            <div className="order_products">
                <ImgComponent src={product} alt="PDF MARK"/>
                <ImgComponent src={product1} alt="PDF MARK"/>
                <ImgComponent src={product} alt="PDF MARK"/>
                <ImgComponent src={product1} alt="PDF MARK"/>
                <ImgComponent src={product} alt="PDF MARK"/>
                <ImgComponent src={product} alt="PDF MARK"/>
                <ImgComponent src={product1} alt="PDF MARK"/>
                <ImgComponent src={product} alt="PDF MARK"/>
                <ImgComponent src={product1} alt="PDF MARK"/>
                <ImgComponent src={product} alt="PDF MARK"/>
                <ImgComponent src={product} alt="PDF MARK"/>
                <ImgComponent src={product1} alt="PDF MARK"/>
                <ImgComponent src={product} alt="PDF MARK"/>
                <ImgComponent src={product1} alt="PDF MARK"/>
                <ImgComponent src={product} alt="PDF MARK"/>
            </div>                 
            <Link href='/'>
                <div>
                    <Button>Continue</Button>
                </div>
            </Link> 
        </Component>
    )
}

const Component = styled.div` 
display: flex;
justify-content: space-between;
padding: 34px;
background: var(--color_FFF);
.order_products {
    display: flex;
    flex-wrap: wrap;
    width: 240px;
    div {
        margin: 4px;
        background: #F7F8FA;
        border-radius: 4px;
        img {
            mix-blend-mode: darken;
            border-radius: 4px;
        }
    }
}
.order_id {
    font-style: normal;
    font-weight: 600;
    font-size: var(--size_14);
    line-height: var(--heigh_20);
    letter-spacing: -0.24px;
    text-transform: capitalize;
    color: #000000;
    margin-top: 5px;
}
.orderday {
    font-style: normal;
    font-weight: 400;
    font-size: var(--size_14);
    line-height: var(--heigh_20);
    letter-spacing: -0.24px;
    text-transform: capitalize;
    color: #7D7D7D;
    margin-top: 5px;
}
button {
    background: #3A4B6D;
    border-radius: 4px;
    font-style: normal;
    font-weight: 600;
    font-size: var(--size_14);
    line-height: var(--heigh_20);
    letter-spacing: -0.24px;
    text-transform: capitalize;
    color: #ffffff;
} 
` 