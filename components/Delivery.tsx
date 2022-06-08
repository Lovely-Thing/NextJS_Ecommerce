/* eslint-disable @next/next/no-img-element */ 
import styled from "styled-components"
import BodyText01 from "./BodyText01"
import DeliveryLists from "./DeliveryLists"
import CustomButtonComponent from "./CustomButtonComponent"
import H2component from "./H2component"
import H3component from "./H3component"
import H4component from "./H4component"
import DeliveryRelatedProductLists from "./DeliveryRelatedProductLists" 
import BodyText02 from "./BodyText02"
import { Button, DatePicker, TimePicker } from "antd"
import moment from "moment"
import TimePickerComponent from "./TimePickerComponent"
import DatePickerComponent from "./DatePickerComponent"

export default function Delivery(props:any) {

    var dateObj = new Date();
    var dd = String(dateObj.getDate()).padStart(2, '0');
    var mm = String(dateObj.getMonth() + 1).padStart(2, '0'); 
    var yyyy = dateObj.getFullYear(); 

    let today_ = yyyy + '-' + mm + '-' + dd
    let now_ = dateObj.getHours() + ":" + dateObj.getMinutes()

    const dateFormat = 'YYYY/MM/DD';
    const format = 'HH:mm';

    return(
        <Component>
            <DeliveryLists/>
            <div className="mt_30">
                <BodyText02 text='The time you enter will be used to all items'/>
                <div className="flex-c">
                    <div className="mr_20">
                        <DatePickerComponent />
                    </div>
                    <div>
                         <TimePickerComponent/> 
                    </div>
                </div>
            </div>
            <div className="mt_20">
                <DeliveryRelatedProductLists/>
            </div>            
             
            <div className="mt_30 continue_btn"> 
                <Button className="unactive">Continue</Button>
            </div>
        </Component>
    )
}

 

const Component = styled.div` 
width: 100%; 
.continue_btn {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    button {
        background: rgba(0, 0, 0, 0.12);
        border-radius: 4px;
        width: 137px;
        height: 40px;
        font-style: normal;
        font-weight: 600;
        font-size: var(--size_14);
        line-height: var(--heigh_24); 
        letter-spacing: 0.4px;
        color: #FFFFFF;
        border: none;
        outline: none;
        &:hover {
            border: none;
            outline: none;
        }
    }
}
`