/* eslint-disable @next/next/no-img-element */ 
import styled from "styled-components"
import ImgComponent from "./ImgComponent"

const plus_icon = '../img/icon/plus_small.svg'

export default function ManagerItemComponent(props:any) {
    return(
        <Component>
            <ImgComponent src={props.manager_img} alt={props.alt}/>
            <div className="content">
                <p>{props.mail}</p>
                <div className="isregisterBtn">  
                    {
                        props.isregistered?'':<ImgComponent src={plus_icon} alt="plus" />
                    }
                    {
                        
                        props.isregistered?<p>Already registred</p>:<p>Not registred yet</p>
                    }
                </div>
            </div>
        </Component>
    )
}

const Component = styled.div`
  display: flex; 
  padding: 12px 17px;
  background: var(--color_FAF);
  border: 1px solid #EFEFEF;
  box-shadow: 0px 2px 20px rgba(59, 66, 101, 0.05);
  border-radius: 4px;
  margin-bottom: 15px;
  .content {
    margin-left: 12px;
    p {
      font-style: normal;
      font-weight: 500;
      font-size: var(--size_14);
      line-height: var(--height_21); 
      letter-spacing: 0.1px;
      color: var(--color_000);
    }
    .isregisterBtn {
        display: flex;
        align-items: center;
        font-style: normal;
        font-weight: 400;
        font-size: var(--size_12);
        line-height: var(--heigh_19);
        letter-spacing: 0.22px;
        color: #939393;
        p {
            margin-bottom: 0;
          }
        div {
          margin-right: 5px;
        }
      }
`