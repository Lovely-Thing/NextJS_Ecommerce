/* eslint-disable @next/next/no-img-element */ 
import { Modal, Select, Switch } from "antd";
import { useContext } from "react";
import styled from "styled-components"  
import { AppContext } from "../context/AppContext";
import BodyText01 from "./BodyText01";
import ImgComponent from "./ImgComponent";
import QuantitySM from "./QuantitySM";
const { Option } = Select;

const truckImg = '../img/icon/truck.png'


export default function EditQtyModal(props:any) {  

    const {
        isEditQtyModalVisible,
        setIsEditQtyModalVisible
    } = useContext(AppContext)      

    const handleOk = () => {
        setIsEditQtyModalVisible(false);
    };

    const handleCancel = () => {
        setIsEditQtyModalVisible(false); 
    };  

    const onChange = (checked: boolean) => {
        console.log(`switch to ${checked}`);
    };

    const handleChange = (value: string[]) => {
        console.log(`selected ${value}`);
    };


    return(
        <Component>
            <Modal title="Edit Quantity: 12m3" visible={isEditQtyModalVisible} onOk={handleOk} onCancel={handleCancel} cancelText="Cancel" okText="Continue" className="editQtymodal" closable={false}>
                <BodyText01 text='Minimum order is 1 cubic meter. We’ve optimized the schedule for the amount you set'/>
                <div className="optionItems">
                    <div className="option_item">
                        <div className="item_wrap">
                            <div>
                                <div className="truckimg">
                                    <ImgComponent src={truckImg} alt='truck'/>
                                </div>
                                <label htmlFor="">Truck  1, m3</label>
                            </div>
                            <div>
                                <QuantitySM />
                                <div className="svgDiv">
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 0.5C3.576 0.5 0 4.076 0 8.5C0 12.924 3.576 16.5 8 16.5C12.424 16.5 16 12.924 16 8.5C16 4.076 12.424 0.5 8 0.5ZM12 11.372L10.872 12.5L8 9.628L5.128 12.5L4 11.372L6.872 8.5L4 5.628L5.128 4.5L8 7.372L10.872 4.5L12 5.628L9.128 8.5L12 11.372Z" fill="#7E858E"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="option_item">
                        <div className="item_wrap">
                            <div>
                                <div className="truckimg">
                                    <ImgComponent src={truckImg} alt='truck'/>
                                </div>
                                <label htmlFor="">Truck  1, m3</label>
                            </div>
                            <div>
                                <QuantitySM />
                                <div className="svgDiv">
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 0.5C3.576 0.5 0 4.076 0 8.5C0 12.924 3.576 16.5 8 16.5C12.424 16.5 16 12.924 16 8.5C16 4.076 12.424 0.5 8 0.5ZM12 11.372L10.872 12.5L8 9.628L5.128 12.5L4 11.372L6.872 8.5L4 5.628L5.128 4.5L8 7.372L10.872 4.5L12 5.628L9.128 8.5L12 11.372Z" fill="#7E858E"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="option_item">
                        <div className="item_wrap">
                            <div>
                                <div className="truckimg">
                                    <ImgComponent src={truckImg} alt='truck'/>
                                </div>
                                <label htmlFor="">Truck  1, m3</label>
                            </div>
                            <div>
                                <QuantitySM />
                                <div className="svgDiv">
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 0.5C3.576 0.5 0 4.076 0 8.5C0 12.924 3.576 16.5 8 16.5C12.424 16.5 16 12.924 16 8.5C16 4.076 12.424 0.5 8 0.5ZM12 11.372L10.872 12.5L8 9.628L5.128 12.5L4 11.372L6.872 8.5L4 5.628L5.128 4.5L8 7.372L10.872 4.5L12 5.628L9.128 8.5L12 11.372Z" fill="#7E858E"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="option_item">
                        <div className="item_wrap">
                            <div>
                                <div className="truckimg">
                                    <ImgComponent src={truckImg} alt='truck'/>
                                </div>
                                <label htmlFor="">Truck  1, m3</label>
                            </div>
                            <div>
                                <QuantitySM />
                                <div className="svgDiv">
                                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 0.5C3.576 0.5 0 4.076 0 8.5C0 12.924 3.576 16.5 8 16.5C12.424 16.5 16 12.924 16 8.5C16 4.076 12.424 0.5 8 0.5ZM12 11.372L10.872 12.5L8 9.628L5.128 12.5L4 11.372L6.872 8.5L4 5.628L5.128 4.5L8 7.372L10.872 4.5L12 5.628L9.128 8.5L12 11.372Z" fill="#7E858E"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>
                <div className="controls">
                    <div className="addnewtruck">
                        <div>
                            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.99984 0.166748C4.39984 0.166748 0.666504 3.90008 0.666504 8.50008C0.666504 13.1001 4.39984 16.8334 8.99984 16.8334C13.5998 16.8334 17.3332 13.1001 17.3332 8.50008C17.3332 3.90008 13.5998 0.166748 8.99984 0.166748ZM13.1665 9.33342H9.83317V12.6667H8.1665V9.33342H4.83317V7.66675H8.1665V4.33342H9.83317V7.66675H13.1665V9.33342Z" fill="#BC2B2B"/>
                            </svg>
                        </div>
                        <label htmlFor="">Add Truck</label>
                    </div>
                    <div className="toggle">
                        <Switch defaultChecked onChange={onChange} />
                        <label htmlFor="">Balance truck</label>
                    </div>
                </div>
                <div className="times">
                    <p>Time between trucks</p>
                    <div>
                        <Select 
                            placeholder="Search to Select" 
                        >
                            <Option value="1">At the same time</Option>
                            <Option value="2">15 min</Option>
                            <Option value="3">30 min</Option>
                            <Option value="4">45 min</Option>
                            <Option value="5">1 hour</Option>
                            <Option value="6">1 hour 30 min</Option>
                        </Select> 
                    </div>
                </div>
            </Modal>
        </Component>
    )
}

 

const Component = styled.div` 
`