/* eslint-disable @next/next/no-img-element */ 
import { notification } from 'antd'; 
 

export const Notification = (type: string, headtext:string, bodytext:string) => {
  notification.open({
    message: undefined,
    description:
    <div className='notic_body'>
        <div className="head">
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.62305 0C4.20705 0 0.623047 3.584 0.623047 8C0.623047 12.416 4.20705 16 8.62305 16C13.039 16 16.623 12.416 16.623 8C16.623 3.584 13.039 0 8.62305 0ZM7.02305 12L3.02305 8L4.15105 6.872L7.02305 9.736L13.095 3.664L14.223 4.8L7.02305 12Z" fill="#20BA70"/>
            </svg>
            <label htmlFor="">{headtext}</label>
        </div>
        <div className="body">{bodytext}</div>
    </div>,
    className: 'custom_notification ' + type,    
    placement: 'bottomRight'
  });
};
 