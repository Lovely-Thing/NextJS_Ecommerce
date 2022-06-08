/* eslint-disable @next/next/no-img-element */ 
import { TimePicker } from "antd";
import moment from "moment";
import styled from "styled-components"

export default function TimePickerComponent(props:any) {
    var dateObj = new Date();  
    let now_ = dateObj.getHours() + ":" + dateObj.getMinutes() 
    const format = 'HH:mm';

    return(
        <Component>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M6.5 0.5C3.19141 0.5 0.5 3.19141 0.5 6.5C0.5 9.80859 3.19141 12.5 6.5 12.5C9.80859 12.5 12.5 9.80859 12.5 6.5C12.5 3.19141 9.80859 0.5 6.5 0.5ZM7 1.52344C9.36719 1.75781 11.2422 3.63281 11.4766 6C11.209 6.01367 11 6.23438 11 6.5C11 6.76562 11.209 6.98633 11.4766 7C11.2422 9.36719 9.36719 11.2422 7 11.4766C6.98633 11.209 6.76562 11 6.5 11C6.23438 11 6.01367 11.209 6 11.4766C3.63281 11.2422 1.75781 9.36719 1.52344 7C1.79102 6.98633 2 6.76562 2 6.5C2 6.23438 1.79102 6.01367 1.52344 6C1.69141 4.31445 2.69141 2.87891 4.10742 2.10742L6.5 4.5V2C6.76562 2 6.98633 1.79102 7 1.52344ZM3.53266 3.80664C3.61079 3.61914 3.79243 3.49609 3.99751 3.49609C4.13227 3.49609 4.26118 3.54883 4.35493 3.64648L6.66547 5.95703L8.90376 5.50977C9.08149 5.46875 9.26704 5.5293 9.38813 5.66406C9.50922 5.79883 9.54633 5.99023 9.48774 6.16211C9.42719 6.33398 9.27876 6.45898 9.09907 6.49023L6.59907 6.99023C6.43501 7.02344 6.26508 6.9707 6.1479 6.85352L3.6479 4.35352C3.50141 4.21094 3.45649 3.99609 3.53266 3.80664Z" fill="#BC2B2B"/>
            </svg>
            <TimePicker defaultValue={moment(now_, format)} format={format} placeholder='' />
        </Component>
    )
}
 

const Component = styled.div`
  background: #fff;
  position: relative;
  border: 1px solid #EEEEEE;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 75px;
  height: 32px; 
  padding: 0 9px; 
  svg {
      margin-top:-1px;
      position: absolute;
      left: 8px;
  } 
  .ant-picker {
    cursor: pointer;
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    padding: 0;
    span {
        display: none !important;
    }
    .ant-picker-input > input {
        text-align: end;
        font-style: normal;
        font-weight: 400;
        font-size: var(--size_12);
        line-height: var(--heigh_18); 
        letter-spacing: 0.22px; 
        color: #272727;
    }
  }
`