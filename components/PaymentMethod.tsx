/* eslint-disable @next/next/no-img-element */ 
import styled from "styled-components"
import BodyText01 from "./BodyText01"
import PaymentList from "./PaymentList"
import CustomButtonComponent from "./CustomButtonComponent"
import H2component from "./H2component"
import H3component from "./H3component"
import H4component from "./H4component"
import PaymentRelatedProductLists from "./PaymentRelatedProductLists" 
import { useState } from "react"
import { DatePicker, Modal, Radio } from "antd"
import type { RadioChangeEvent } from 'antd';

export default function PaymentMethod(props:any) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isSubModalVisible, setIsSubModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };

    // Add new Card 
    
    const handleSubOk = () => {
        setIsSubModalVisible(false);
    };

    const handleSubCancel = () => {
        setIsSubModalVisible(false);
    };

      
    const [value, setValue] = useState(1);

    const onChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    const addnewcard =()=> {
        setIsSubModalVisible(true);
    }

    return(
        <Component>
            <PaymentList/> 
            <div>
                <PaymentRelatedProductLists/>
            </div>
            <div className="mt_30 flex-csb">
                <BodyText01 text='Without VAT'/>
                <H4component text='$1400.00'/>
            </div>
            <div className="mt_20 flex-csb">
                <H3component text='Total with VAT'/>
                <H2component text='$ 13500.00'/>
            </div>
            <div className="mt_30 flex-csb two_different_btn">
                <CustomButtonComponent buttonText='Continue Shopping' dataname="" even={undefined}/>
                <CustomButtonComponent buttonText='Continue' dataname="" even={showModal}/>
            </div>
            <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null} className='chooseCrediCard'>
                <h2>Choose а card</h2>
                <div className="totalprice">
                    <label>Total for paid:</label>
                    <p>$5080.00</p>
                </div>
                <div className="card_radios">
                    <Radio.Group onChange={onChange} value={value}>
                        <Radio value={1}>
                            <div>
                                <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 0.5H2C0.89 0.5 0.00999999 1.39 0.00999999 2.5L0 14.5C0 15.61 0.89 16.5 2 16.5H18C19.11 16.5 20 15.61 20 14.5V2.5C20 1.39 19.11 0.5 18 0.5ZM18 14.5H2V8.5H18V14.5ZM18 4.5H2V2.5H18V4.5Z" fill="#7E858E"/>
                                </svg>
                                <label htmlFor="">Mastercard •••• 2568</label>
                            </div>
                        </Radio>
                        <Radio value={2}>
                            <div>
                                <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 0.5H2C0.89 0.5 0.00999999 1.39 0.00999999 2.5L0 14.5C0 15.61 0.89 16.5 2 16.5H18C19.11 16.5 20 15.61 20 14.5V2.5C20 1.39 19.11 0.5 18 0.5ZM18 14.5H2V8.5H18V14.5ZM18 4.5H2V2.5H18V4.5Z" fill="#7E858E"/>
                                </svg>
                                <label htmlFor="">Mastercard •••• 2568</label>
                            </div>
                        </Radio> 
                    </Radio.Group>
                    <div className="addnewcard" onClick={addnewcard}>
                        <div>
                            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.99984 0.166748C4.39984 0.166748 0.666504 3.90008 0.666504 8.50008C0.666504 13.1001 4.39984 16.8334 8.99984 16.8334C13.5998 16.8334 17.3332 13.1001 17.3332 8.50008C17.3332 3.90008 13.5998 0.166748 8.99984 0.166748ZM13.1665 9.33342H9.83317V12.6667H8.1665V9.33342H4.83317V7.66675H8.1665V4.33342H9.83317V7.66675H13.1665V9.33342Z" fill="#BC2B2B"/>
                            </svg>
                        </div>
                        <label htmlFor="">New Card</label>
                    </div>
                </div>
                <div className="action_btns">
                    <CustomButtonComponent dataname={undefined} buttonText={"Pay"} even={undefined} />
                    <CustomButtonComponent dataname={undefined} buttonText={"Back"} even={undefined} />
                </div>
            </Modal>

            <Modal visible={isSubModalVisible} onOk={handleSubOk} onCancel={handleSubCancel} footer={null} className='addNewCrediCard'>
                <h2>Add a Credit Card</h2> 
                <div className="card_content">
                    <div className="inp_item">
                        <label htmlFor="">Card Number</label>
                        <input type="text" name="" id="" placeholder="1234 1234 1234 1234"/>
                    </div>
                    <div className="two_col">
                        <div className="inp_item">
                            <label htmlFor="">Expire Date</label>
                            <DatePicker picker="month" placeholder="MM/YY" />
                        </div>
                        <div className="inp_item">
                            <label htmlFor="">CCV / CVC2</label>
                            <input type="password" name="" id="" placeholder="•••"/>
                        </div>
                    </div> 
                    <div className="inp_item">
                        <label htmlFor="">Country</label>
                        <div className="selectDiv triangle">
                            <select name="country" id="">
                                <option value="">Ukraine</option>
                                <option value="">United State</option>
                            </select>
                        </div>
                    </div>                   
                </div>
                <div className="mt_40">
                    <CustomButtonComponent dataname={undefined} buttonText={"Save Card"} even={undefined} />
                </div>
            </Modal>
        </Component>
    )
}

 

const Component = styled.div` 
`