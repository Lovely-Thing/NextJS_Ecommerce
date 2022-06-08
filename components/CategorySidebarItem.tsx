/* eslint-disable @next/next/no-img-element */ 
import { useState } from "react";
import styled from "styled-components" 



export default function CategorySidebarItem(props:any) {
    const [open, setOpen] = useState(false);

    const toggleHandler = () => {
        setOpen(!open);
    }

    return(
        <Component openState={open}>    
            <div className="cats_item_head" onClick={toggleHandler}>
                <h4>{props.data[0]['main_title']}</h4>
                {
                    props.data[0]['count'] !==undefined?
                    <span>({props.data[0]['count']})</span>:<></>
                }
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 5L5 1L9 5" stroke="#373D4C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            <ul className="cats_item_categories">
                {
                    props.data[0]['submenu'].map((cat: any, i: any)=>{
                        return(
                            <li key={i}>
                                <input type="checkbox" name="" id={cat.title} />
                                <label htmlFor={cat.title}>{cat.title}</label>
                            </li>
                        )
                    })
                }                 
            </ul>
        </Component>
    )
}

interface PropsType {
    openState:boolean
}

const Component = styled.div<PropsType>`     
    margin-top: 15px;
    border-bottom: solid 1px rgba(89, 89, 89, 0.1);
    padding-bottom: ${props=>props.openState?'5px':'0'};   
    .cats_item_head {
        margin-bottom: ${props=>props.openState?'16px':'0'};
        transition: margin-bottom 0.4s;
        display: flex;
        align-items: center;
        cursor: pointer;  
        h4 {
          font-style: normal;
          font-weight: 600;
          font-size: var(--size_16);
          line-height: var(--heigh_28);
          letter-spacing: 0.15px; 
          color: #373D4C;
          margin-bottom: 0;
        }
        span {
          font-style: normal;
          font-weight: 400;
          font-size: var(--size_10);
          line-height: var(--heigh_14); 
          letter-spacing: 0.15px; 
          color: #696E79;
          margin-bottom: -2px;
          margin-left: 4px;
        }
        svg {
          margin-left: 10px;
          margin-top: 3px;
          transform: ${props=>props.openState?'rotate(180deg)':'rotate(0)'};
          transition: 0.3s;
        }
    }
    .cats_item_categories {
        max-height: ${props=>props.openState?'350px':'0'};
        transition: max-height 0.35s;         
        padding-bottom: 0;
        overflow: hidden;
        overflow-y: scroll;
        height: fit-content;
        &::-webkit-scrollbar {
            width: 2px; 
        }
        &::-webkit-scrollbar-track {
            background: #E5E7E8;
        } 
        &::-webkit-scrollbar-thumb {
            background: #3A4B6D;
        }
        li {
          display: flex;
          align-items: center;
          margin-bottom: 16px;
          &:last-of-type {
            margin-bottom: 0;
          }
          label {
            font-family: $font_inter;
            font-style: normal;
            font-weight: 400;
            font-size: var(--size_14);
            line-height: var(--heigh_20);
            color: #3A4B6D;
            margin-left: 10px;
          }
        }
    }
    ul {
        margin-left: 0;
        padding-left: 0;
    }
    input[type=checkbox] {
        margin-left: 0;
    }
`