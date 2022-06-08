/* eslint-disable @next/next/no-img-element */ 
import styled from "styled-components"


export default function StepCardComponent(props:any) {
    return(
        <Component>
            <div className="cardBadge">
                {props.cardnumber}
            </div>
            <h5>{props.cardtitle}</h5>
            <div>
                {props.cardChild}
            </div>
        </Component>
    )
}

const Component = styled.div` 
background: #FFFFFF;
border: 1px solid #F4F4F4;
border-radius: 4px;
width: 295px;
padding: 20px;
.cardBadge {
    font-style: normal;
    font-weight: 400;
    font-size: var(--size_10);
    line-height: var(--heigh_14); 
    letter-spacing: 0.15px; 
    color: #2DAA6E; 
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), #D2F1E2;
    border-radius: 16px;
    width: 50px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
}
h5 {
    font-style: normal;
    font-weight: 600;
    font-size: var(--size_16);
    line-height: var(--heigh_28); 
    letter-spacing: 0.15px; 
    color: #1E2535;
    margin-top: 15px;
}
.carditem label {
    font-style: normal;
    font-weight: 400;
    font-size: var(--size_10);
    line-height: var(--heigh_14); 
    letter-spacing: 0.15px; 
    color: #696E79;
}
.carditem p{
    font-style: normal;
    font-weight: 400;
    font-size: var(--size_14);
    line-height: var(--heigh_20);  
    color: #1E2535;
}
.two_col {
    display: flex;
    align-items: flex-start;
}

.card_description {
    font-style: normal;
    font-weight: 400;
    font-size: var(--size_14);
    line-height: var(--heigh_20);  
    color: #696E79;
}
.arounded_info {
    display: flex;
    align-items: center;
    border: 1px solid #E5E7E8;
    border-radius: 4px;
    padding-left: 43px;
    padding-right: 37px;
    padding-top: 7px;
    padding-bottom: 7px;
    svg {
        position: absolute;
        left: 11.5px;
        top: 50%;
        transform: translateY(-50%);
    }
    .description {
        h5 {
            font-style: normal;
            font-weight: 500;
            font-size: var(--size_14);
            line-height: var(--heigh_20);  
            color: #1E2535;
            margin-bottom: 0;
            margin-top: 0;
        }
        p{
            font-style: normal;
            font-weight: 400;
            font-size: var(--size_12);
            line-height: var(--heigh_19); 
            letter-spacing: 0.22px;  
            color: #505662;
            margin-bottom: 0;
        }
    }
}
.arounded_info.triangle::after {
    right: 13.5px;
    top: 50%;
    transform: translateY(-50%);
}
`