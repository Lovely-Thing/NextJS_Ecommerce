/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-html-link-for-pages */
import styled from "styled-components" 
import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons'; 
import ImgComponent from "./ImgComponent";
import { useState } from "react";
import BodyText01 from "./BodyText01";
import OverlineText from "./OverlineText"; 
import SubTitle02 from "./SubTitle02";
import BodyText02 from "./BodyText02"; 
const product = '../img/product/bg.png'  

const { Panel } = Collapse;


  

export default function PaymentRelatedProductLists(_props:any) {

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
                <div className="collaps_header paymentlist">
                    <div className="collaps_header_top">
                        <div className="ch_item_img">
                            <ImgComponent src={product} alt="PDF MARK"/>
                        </div>
                        <div className="ch_item_texts">
                            <div className="ch_top">
                                <div className="ch_title">
                                    <h2>Agregate and stone</h2>
                                    <p>Stone. 19mm Clear (3/4)</p>
                                </div>     
                                <h3>100</h3>  
                                <div className="deiliveryinfo">
                                    <p><label htmlFor="">Delivery to address:</label> 24, May 2022 08:00</p>
                                    <p>Toronto, 333 Dension Street, Unit 21, 49000</p>
                                </div>                         
                            </div> 
                        </div>
                    </div>
                    <div className="ch_bottom">
                        <h2>Total:</h2>
                        <h2>$2900.00</h2>
                    </div>
                </div>
                <Panel header={activeTabs.length > 0 && activeTabs.indexOf('1') !==-1?"Hide fee and taxes details":"Show fee and taxes details"} key={1} className="site-collapse-custom-panel" id="testp">
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
                    <div className="mt_15">
                    <OverlineText text="OPTIONS"/>
                    </div>
                    <div className="detail_content fee">
                        <div className="item"> 
                            <label htmlFor="">1% Accelerator</label>
                            <p>$50.00</p>
                        </div> 
                        <div className="item"> 
                            <label htmlFor="">Retarder 4h</label>
                            <p>$7.50</p>
                        </div>         
                        <div className="detail_content_footer">
                            <p>Subtotal</p>
                            <SubTitle02 text='$2900.00' color='#272727' />
                        </div>                 
                    </div>
                    <div className="mt_15">
                        <OverlineText text="FEES"/>
                    </div>
                    <div className="detail_content fee">
                        <div className="item"> 
                            <label htmlFor="">t1</label>
                            <p>$50.00</p>
                        </div> 
                        <div className="item"> 
                            <label htmlFor="">Carbon tax</label>
                            <p>$7.50</p>
                        </div>     
                        <div className="item"> 
                            <label htmlFor="">Winter Heat</label>
                            <p>$100.00</p>
                        </div> 
                        <div className="item"> 
                            <label htmlFor="">TimeFrame RMX</label>
                            <p>$21.00</p>
                        </div>                                             
                        <div className="detail_content_footer">
                            <p>Subtotal</p>
                            <SubTitle02 text='$2900.00' color='#272727' />
                        </div>                 
                    </div>
                    <div className="mt_15">
                        <OverlineText text="Delivery fees"/>
                    </div>
                    <div className="addressdetail_content">
                        <div className="address">
                            <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.5 3H10.625V0.5H1.875C1.1875 0.5 0.625 1.0625 0.625 1.75V8.625H1.875C1.875 9.6625 2.7125 10.5 3.75 10.5C4.7875 10.5 5.625 9.6625 5.625 8.625H9.375C9.375 9.6625 10.2125 10.5 11.25 10.5C12.2875 10.5 13.125 9.6625 13.125 8.625H14.375V5.5L12.5 3ZM3.75 9.5625C3.23125 9.5625 2.8125 9.14375 2.8125 8.625C2.8125 8.10625 3.23125 7.6875 3.75 7.6875C4.26875 7.6875 4.6875 8.10625 4.6875 8.625C4.6875 9.14375 4.26875 9.5625 3.75 9.5625ZM12.1875 3.9375L13.4125 5.5H10.625V3.9375H12.1875ZM11.25 9.5625C10.7312 9.5625 10.3125 9.14375 10.3125 8.625C10.3125 8.10625 10.7312 7.6875 11.25 7.6875C11.7688 7.6875 12.1875 8.10625 12.1875 8.625C12.1875 9.14375 11.7688 9.5625 11.25 9.5625Z" fill="#828282"/>
                            </svg>
                            <div>
                                <p><span>Delivery to address:</span>24, May 2022 08:00</p>
                                <p>Toronto, 333 Dension Street, Unit 21, 49000</p>
                            </div>
                        </div>   
                        <div className="products">
                            <div className="pitem">
                                <div className="pdiv">
                                    <p>Products</p>
                                    <div>
                                        <div className="pimg">
                                            <ImgComponent src={product} alt="product"/>
                                        </div>
                                        <div className="texts">
                                            <h6>Redi - Plug / hedraulic cement</h6>
                                            <p>Stone. 19mm Clear (3/4)</p>
                                        </div>
                                    </div>                                    
                                </div>
                                <div className="fdiv">
                                    <p>All Fees</p>
                                    <h6>Delivery Fee - Zone 2</h6>
                                    <h6>Charge Add</h6>
                                </div>
                            </div>
                        </div>                      
                        <div className="detail_content_footer">
                            <p>Subtotal</p>
                            <SubTitle02 text='$2900.00' color='#272727' />
                        </div>                 
                    </div>

                    <div className="mt_15">
                        <OverlineText text="TAXES"/>
                    </div>
                    <div className="detail_content">
                        <div className="item"> 
                            <label htmlFor="">HST 13%</label>
                            <p>$50.00</p>
                        </div> 
                        <div className="item"> 
                            <label htmlFor="">Total witout Taxes</label>
                            <p>$7.50</p>
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
.ant-collapse > .ant-collapse-item > .ant-collapse-header {
    bottom:5px;
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
    .item {
        label {
            font-style: normal;
            font-weight: 400;
            font-size: var(--size_12);
            line-height: var(--heigh_18); 
            letter-spacing: -0.2px;  
            color: #333338;
        }
    }
}

.collaps_header { 
    position: relative; 
    width: 100%;
    background: #FFFFFF; 
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    padding: 15px;
    padding-bottom: 30px;

    &::after {
        position: absolute;
        content: '';
        height: 1px;
        left: 10px;
        right: 10px;
        bottom: 32px;
        background: rgba(89,89,89,0.1);
    }

    .collaps_header_top {
        display: flex;
        width: 100%;
    }
    .ch_item_img { 
        width: 33px;
        height: 33px;
        img {
            border-radius: 4px;
        }
    }
    .ch_item_texts {
        margin-left: 8px;
        width: 100%; 
        .ch_top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            h3 { 
                width:20%; 
                font-style: normal;
                font-weight: 400;
                font-size: var(--size_14);
                line-height: var(--heigh_20); 
                text-align: center;
                letter-spacing: -0.3px;
                color: #333338;
                margin-bottom: 0;
            }
            .deiliveryinfo {
                width:40%;
                text-align: end;
                p {
                    font-style: normal;
                    font-weight: 400;
                    font-size: var(--size_10);
                    line-height:var(--heigh_14); 
                    color: #282A31;
                    margin-bottom: 4px;
                    label {
                        color: #939393;
                    }
                }
            }
            .ch_title {
                width:33%;
                h2 {
                    font-style: normal;
                    font-weight: 700;
                    font-size: var(--size_12);
                    line-height: var(--heigh_14);   
                    color: #333338;
                    margin-bottom: 0;
                }
                p{
                    margin-top: 4px;
                    font-style: normal;
                    font-weight: 400;
                    font-size: var(--size_10);
                    line-height: var(--heigh_14); 
                    letter-spacing: 0.22px;
                    color: #7D7D7D;
                    margin-bottom: 0;
                }
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

    .ch_bottom {
        padding: 28px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        h2 {
            font-style: normal;
            font-weight: 600;
            font-size: var(--size_14);
            line-height: var(--heigh_21);   
            color: #272727;
        }
    } 
}
.ant-collapse-item {
    margin-bottom: 10px;
}
.mt_15 {
    margin-top:15px;
}

.addressdetail_content {
    background: #F9F9F9;
    padding: 15px;
    .address { 
        display: flex;
        svg {
            margin-top: 5px;
        }
        div {
            justify-content: flex-start;
            flex-direction: column;
            align-items: flex-start;
            margin-left: 9px;
            p {
                font-style: normal;
                font-weight: 400;
                font-size: var(--size_10);
                line-height: var(--heigh_14); 
                color: #282A31;
                margin-bottom: 4px;
                span {
                    color: #939393;
                }
            }
        }
    }
    .products {
        width: 100%;
        border: solid 1px #E5E7E8;
        margin-top: 20px;
        .pitem {
            display: flex;            
            &>div {
                width:50%;
                padding: 16px;
            }
            .pdiv {                
                border-right: solid 1px #E5E7E8;
                &>p {
                    font-style: normal;
                    font-weight: 600;
                    font-size: var(--size_10); 
                    color: #272727;
                    margin-bottom: 10px;
                }
                &>div {
                    display: flex;
                    align-items: center;
                    flex: 0 0 auto;
                    pimg {
                        width:25px;  
                        flex: 0 0 auto;                       
                        img {                            
                            border-radius: 4px;
                        }
                    }
                    .texts {
                        margin-left: 11px;
                        h6 {
                            font-style: normal;
                            font-weight: 400;
                            font-size: var(--size_12);
                            line-height: var(--heigh_18); 
                            letter-spacing: -0.2px; 
                            color: #333338;
                            margin-bottom: 4px;
                        }
                        p {
                            font-style: normal;
                            font-weight: 400;
                            font-size: var(--size_10);
                            line-height: var(--heigh_14); 
                            letter-spacing: -0.2px;  
                            color: #7D7D7D;
                            margin-bottom: 0;
                        }
                    }
                }
            }
            .fdiv {
                &>p {
                    font-style: normal;
                    font-weight: 600;
                    font-size: var(--size_10); 
                    color: #272727;
                    margin-bottom: 10px;
                }
                h6 {
                    font-style: normal;
                    font-weight: 400;
                    font-size: var(--size_12);
                    line-height: var(--heigh_18); 
                    text-transform: capitalize;  
                    color: #333338;
                }
            }
        }
    }
    .detail_content_footer {
        display: flex; 
        align-items: center; 
        justify-content: space-between; 
        padding-top: 15px;
        &>p {
            font-style: normal;
            font-weight: 600;
            font-size: var(--size_12);
            line-height: var(--heigh_18); 
            letter-spacing: -0.2px;  
            color: #1E2535;
            margin-bottom: 0;
        }
    }
}

` 