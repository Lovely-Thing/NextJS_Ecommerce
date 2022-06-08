/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-html-link-for-pages */
import styled from "styled-components" 
import { Collapse, Rate } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import ImgComponent from "./ImgComponent";
import { useState } from "react";

const pdf_icon = '../img/icon/pdf.png'
const creditcard = '../img/icon/card.svg'
const product = '../img/product/buy (2).png' 
const product1 = '../img/product/buy (1).png' 

const { Panel } = Collapse;


  

export default function DeliveryTabContent(_props:any) {

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
                    <a href="/" target='_blank' className="order_doc">
                        <ImgComponent src={pdf_icon} alt="PDF MARK"/>
                        <label>Order: 2200981416</label>
                    </a>
                    <div className="orderday">
                        12.03.22
                    </div>
                    <div className="order_products">
                        <ImgComponent src={product} alt="PDF MARK"/>
                        <ImgComponent src={product1} alt="PDF MARK"/>
                        <ImgComponent src={product} alt="PDF MARK"/>
                        <ImgComponent src={product1} alt="PDF MARK"/>
                        <ImgComponent src={product} alt="PDF MARK"/>
                    </div>
                    <div className="order_rate">
                        <Rate value={4}/>
                    </div>
                    <div className="total_price">
                        $ 2900.00
                    </div>
                </div>
                <Panel header={activeTabs.length > 0 && activeTabs.indexOf('1') !==-1?"Hide details":"show more"} key={1} className="site-collapse-custom-panel" id="testp">
                <p>ALL PRODUCTS</p>
                <div className="detail_table_container"> 
                    <table>
                        <thead>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="product_image">
                                        <ImgComponent src={product} alt="PDF MARK"/>
                                        <div>
                                            <p>Grass for garden</p>
                                            <p>Stone. 19mm Clear (3/4)</p>
                                        </div>
                                    </div>
                                </td>
                                <td>100 to</td>
                                <td>Pickup by location</td>
                                <td>Center A,2483 Toy Avenue, Toronto</td>
                                <td>
                                    <div>
                                        <p>$1400.00</p>
                                        <p>$14.00/to</p>
                                    </div>
                                </td>
                            </tr>  
                        </tbody>
                    </table>
                    <div className="total_price">
                        <p>Total:</p>
                        <p>$3900.00</p>
                    </div>
                </div>
                <div className="clientinfo">
                    <h6>CLIENT INFO</h6>
                    <div className="clientinfo_container">
                        <div className="item_row">
                            <p>Name:</p>
                            <div>Anastasiia Rubezhyna</div>
                        </div>
                        <div className="item_row">
                            <p>Address:</p>
                            <div>Lundy's Ln, Niagara Falls, ON L2H 1G9, 75000</div>
                        </div>
                        <div className="item_row">
                            <p>Сontact Email:</p>
                            <div>anastasiarubezhina@gmail.com</div>
                        </div>
                        <div className="item_row">
                            <p>Phone Number:</p>
                            <div>+380 634 601 259</div>
                        </div>
                    </div>
                </div>
                <div className="clientinfo">
                    <h6>PAYMENT INFO</h6>
                    <div className="clientinfo_container">
                        <div className="item_row">
                            <p>Name Holder:</p>
                            <div>Anastasiia Rubezhyna</div>
                        </div>
                        <div className="item_row">
                            <p>Date:</p>
                            <div>14/05/22</div>
                        </div>
                        <div className="item_row">
                            <p>Сontact Email:</p>
                            <div>anastasiarubezhina@gmail.com</div>
                        </div>
                        <div className="item_row">
                            <p>Payment system:</p>
                            <div>
                                <ImgComponent src={creditcard} alt="credit card"/>
                                Mastercard •••• 2568
                            </div>
                        </div>
                    </div>
                </div>
                </Panel> 

                <div className="collaps_header">
                    <a href="/" target='_blank' className="order_doc">
                        <ImgComponent src={pdf_icon} alt="PDF MARK"/>
                        <label>Order: 2200981416</label>
                    </a>
                    <div className="orderday">
                        12.03.22
                    </div>
                    <div className="order_products">
                        <ImgComponent src={product} alt="PDF MARK"/>
                        <ImgComponent src={product1} alt="PDF MARK"/>
                        <ImgComponent src={product} alt="PDF MARK"/>
                        <ImgComponent src={product1} alt="PDF MARK"/>
                        <ImgComponent src={product} alt="PDF MARK"/>
                    </div>
                    <div className="order_rate">
                        <Rate value={4}/>
                    </div>
                    <div className="total_price">
                        $ 2900.00
                    </div>
                </div>
                <Panel header={activeTabs.length > 0 && activeTabs.indexOf('2') !==-1?"Hide details":"show more"} key={2} className="site-collapse-custom-panel" id="testp">
                <p>ALL PRODUCTS</p>
                <div className="detail_table_container"> 
                    <table>
                        <thead>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="product_image">
                                        <ImgComponent src={product} alt="PDF MARK"/>
                                        <div>
                                            <p>Grass for garden</p>
                                            <p>Stone. 19mm Clear (3/4)</p>
                                        </div>
                                    </div>
                                </td>
                                <td>100 to</td>
                                <td>Pickup by location</td>
                                <td>Center A,2483 Toy Avenue, Toronto</td>
                                <td>
                                    <div>
                                        <p>$1400.00</p>
                                        <p>$14.00/to</p>
                                    </div>
                                </td>
                            </tr>  
                        </tbody>
                    </table>
                    <div className="total_price">
                        <p>Total:</p>
                        <p>$3900.00</p>
                    </div>
                </div>
                <div className="clientinfo">
                    <h6>CLIENT INFO</h6>
                    <div className="clientinfo_container">
                        <div className="item_row">
                            <p>Name:</p>
                            <div>Anastasiia Rubezhyna</div>
                        </div>
                        <div className="item_row">
                            <p>Address:</p>
                            <div>Lundy's Ln, Niagara Falls, ON L2H 1G9, 75000</div>
                        </div>
                        <div className="item_row">
                            <p>Сontact Email:</p>
                            <div>anastasiarubezhina@gmail.com</div>
                        </div>
                        <div className="item_row">
                            <p>Phone Number:</p>
                            <div>+380 634 601 259</div>
                        </div>
                    </div>
                </div>
                <div className="clientinfo">
                    <h6>PAYMENT INFO</h6>
                    <div className="clientinfo_container">
                        <div className="item_row">
                            <p>Name Holder:</p>
                            <div>Anastasiia Rubezhyna</div>
                        </div>
                        <div className="item_row">
                            <p>Date:</p>
                            <div>14/05/22</div>
                        </div>
                        <div className="item_row">
                            <p>Сontact Email:</p>
                            <div>anastasiarubezhina@gmail.com</div>
                        </div>
                        <div className="item_row">
                            <p>Payment system:</p>
                            <div>
                                <ImgComponent src={creditcard} alt="credit card"/>
                                Mastercard •••• 2568
                            </div>
                        </div>
                    </div>
                </div>
                </Panel> 
                
            </Collapse>
        </Component>
    )
}

const Component = styled.div` 
.collaps_header {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 15px;
    padding-bottom: 55px;
    background: var(--color_FFF);
    position: relative;
    &::after {
      position: absolute;
      content: '';
      height: 1px;
      left: 10px;
      right: 10px;
      bottom: 25px;
      background: rgba(89, 89, 89, 0.1);
    }
    .order_doc,
    .order_products {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .order_products {
        max-width: 240px;
        width: 100%;
        justify-content: flex-start;
        overflow-x: scroll;
        &::-webkit-scrollbar {
            display: none;
        }
    }
    .order_doc{
        max-width: 160px;
        cursor: pointer;
        width: 100%;
        label {
          font-style: normal;
          font-weight: 400;
          font-size: var(--size_12);
          line-height: var(--heigh_19); 
          text-align: center;
          letter-spacing: 0.22px; 
          color: #1E2535;
          margin-left: 8px;
          cursor: pointer;
        }
    }
    .order_products > div{
        background: #F7F8FA;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        margin: 4px;
        width: 33px;
        height: 33px;
        img {
            mix-blend-mode: darken;
        }
    }
    .orderday{
        font-style: normal;
        font-weight: 400;
        font-size: var(--size_14);
        line-height: var(--heigh_20); 
        text-align: center;
        letter-spacing: -0.24px;
        text-transform: capitalize;
        color: #7D7D7D;
    }
    .total_price{
        font-style: normal;
        font-weight: 700;
        font-size: var(--size_16);
        line-height: var(--heigh_24); 
        text-align: center;
        letter-spacing: -0.44px;
        text-transform: capitalize;
        color: var(--color_000);
    }
}

.detail_table_container {
    background: #FAFAFA;
    padding: 15px;
    table {
        width: 100%;
        height: 100%;
        tbody>tr:last-child td {
            padding-bottom: 15px;
        }
        tbody>tr:last-child {
            border-bottom: solid 1px rgba(89, 89, 89, 0.1);
        }
        tr{
          &>td:nth-of-type(1) {
            max-width: 280px;
            width: 280px;
            .product_image {
              display: flex; 
              img {
                max-width: 37px;
                max-height: 37px;
                width: 100%;
                height: 100%;
                mix-blend-mode: darken;
              }
              &>div:last-of-type {
                margin-left: 10px;
                &>p:first-of-type {
                  font-style: normal;
                  font-weight: 400;
                  font-size: var(--size_12);
                  line-height: var(--heigh_14);
                  letter-spacing: -0.2px;
                  color: #333338;
                  margin-bottom: 5px;
                }
                &>p:last-of-type {
                    font-style: normal;
                    font-weight: 400;
                    font-size: var(--size_10);
                    line-height: var(--heigh_14); 
                    letter-spacing: -0.2px;
                    color: #7D7D7D;
                }
              }
            }
          }
          &>td:nth-of-type(2) {
            font-style: normal;
            font-weight: 400;
            font-size: var(--size_12);
            line-height: var(--heigh_19);
            text-align: center;
            letter-spacing: 0.2px;
            color: #272727;          
          }
          &>td:nth-of-type(3) {
            font-style: normal;
            font-weight: 400;
            font-size: var(--size_12);
            line-height: var(--heigh_19);
            text-align: center;
            letter-spacing: 0.2px;
            color: #000000;          
          }
          &>td:nth-of-type(4) {
            width: 200px;
            font-style: normal;
            font-weight: 600;
            font-size: var(--size_12);
            line-height: var(--heigh_19);
            text-align: start;
            letter-spacing: 0.2px;
            color: #282A31;          
          }
          &>td:nth-of-type(5) {
            text-align: right;  
            div {
                &>p:first-of-type {
                  font-style: normal;
                  font-weight: 600;
                  font-size: var(--size_12);
                  line-height: var(--heigh_19);
                  text-align: right;
                  letter-spacing: 0.2px;
                  color: #272727;
                  margin-bottom: 2px;
                }
                &>p:last-of-type {
                    font-style: normal;
                    font-weight: 600;
                    font-size: var(--size_10);
                    line-height: var(--heigh_14);
                    text-align: right;
                    letter-spacing: 0.2px;
                    color: #7D7D7D;
                    margin-bottom: 2px;
                  }
              }         
          }
        }
        td {
            padding-bottom:30px;
        }
    }
    .total_price {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 15px;
        p {
            font-style: normal;
            font-weight: 600;
            font-size: var(--size_12);
            line-height: var(--heigh_19);
            letter-spacing: 0.2px;
            color: #272727;
            margin-bottom: 0;
        }
    }
}

.clientinfo {
    h6 {
        font-style: normal;
        font-weight: 600;
        font-size: var(--size_10);
        line-height: var(--heigh_20);
        color: #272727;
        margin-top: 30px;
    }
    .clientinfo_container {
        background: #FAFAFA;
        padding: 15px;
        .item_row {
            display: flex;
            align-items: center;
            p {
                font-style: normal;
                font-weight: 400;
                font-size: var(--size_14);
                line-height: var(--heigh_20);  
                align-items: start;
                color: #939393;
                width: 136px;
            }
            &>div{
                font-style: normal;
                font-weight: 400;
                font-size: var(--size_14);
                line-height: var(--heigh_20);  
                align-items: start;
                color: #272727; 
                display: flex;
                align-items: center;
                img {
                    margin-right: 10px;
                }
            }
        }
    }
}
 
` 