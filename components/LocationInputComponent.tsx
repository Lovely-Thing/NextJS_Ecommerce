import {Image} from 'antd'
import { useContext, useState } from 'react'
import styled from 'styled-components'
import { AppContext } from '../context/AppContext'
import ChooseLocationModal from './ChooseLocationModal'

export default function LocationInputComponent() {
    const map_icon = '../img/icon/map.svg' 

    const {
      isSetLocality,
      setIsSetLocality,
      isChooseLocationModalShow,
      setIsChooseLocationModalShow
    } = useContext(AppContext)     

    const yes =()=> {
      setIsSetLocality(false)
    }

    const other =()=> {
      setIsChooseLocationModalShow(true)
    }

    return(
        <>             
            <Component className="triangle">
                <div className="map_icon img_wrap">
                    <Image
                        preview={false}
                        src={map_icon}
                        alt="map icon" 
                    />
                </div>
                <div className="location_input">
                    <input type='text' placeholder="Toronto" readOnly={true}/>
                </div>
                <div className={"locallity_modal " + (isSetLocality?"active":"")}>
                  <div className="modal_content">
                    <h5>Is this your locality?</h5>
                    <p>Now the delivery date and availability of products are shown for:</p>
                    <div className="select_locallity triangle">
                      <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 0C3.13 0 0 3.13 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 3.13 10.87 0 7 0ZM7 9.5C5.62 9.5 4.5 8.38 4.5 7C4.5 5.62 5.62 4.5 7 4.5C8.38 4.5 9.5 5.62 9.5 7C9.5 8.38 8.38 9.5 7 9.5Z" fill="#3A4B6D"/>
                      </svg>
                      <input type='text' placeholder="Placeholder" readOnly={true}/>
                    </div>
                    <div className="control_btns">
                      <div>
                        <button className='outline_btn' onClick={yes}>Yes</button>
                      </div>
                      <div>
                        <button className='fill_btn' onClick={other}>Other</button>
                      </div>
                    </div>
                  </div>
                </div>
            </Component> 
            <ChooseLocationModal/>
        </>
    )
}

const Component = styled.div`
  display: flex;
  align-items: center; 
  background: var(--color_F2F);
  border-radius: 4px;
  width: 300px;
  height: 40px;
  padding: 10px 17px;  
  .location_input input{
    border: none !important;
    outline: none !important;
    background: transparent;
    padding-left: 15px;
    cursor: pointer;
    &::placeholder {
      font-family: var(--font_inter);
      font-style: normal;
      font-weight: 400;
      font-size: var(--size_14);
      line-height: var(--heigh_20);
    }
  }
  &.triangle::after {
    right: 17px;
    top: 50%;
    transform: translateY(-11%);
  }

  .locallity_modal {
    &.active {
      display: block;
      transition: ease-in 0.5s;
    }
    position: absolute;
    transition: ease-in 0.5s;
    display: none;
    top: 75px;
    z-index: 8;
    left: -20px;
    width: 340px;
    height: 232px;
    background: #FFFFFF;
    border: 1px solid #F9F9F9;
    box-shadow: 0px 4px 150px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    .modal_content {
      padding: 20px;
      h5 {
        font-style: normal;
        font-weight: 600;
        font-size: var(--size_16);
        line-height: var(--heigh_24); 
        color: #1E2535;
      }
      p {
        font-style: normal;
        font-weight: 400;
        font-size: var(--size_14);
        line-height: var(--heigh_21);
        color: #7E858E;
      }
      .select_locallity {
        height: 40px;
        background: #F2F3F4;
        border-radius: 4px;
        display: flex;
        align-items: center;
        padding: 10px 17px;
        input {
          border: none;
          outline: none;
          font-style: normal;
          font-weight: 400;
          font-size: var(--size_14);
          line-height: var(--heigh_19);
          letter-spacing: 0.15px;
          color: #696E79;
          margin-left: 15px;
          background: transparent;
          &:focus, &:hover {
            outline: none;
            border: none;
          }
        }
        &.triangle::after {
          right: 17px;
          top: 48%;
        }
      }
      .control_btns {
        margin-top: 18px; 
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-left: -6px;
        margin-right: -6px;
        div {
          padding: 0 6px;
          width: 50%;
          button {
            width: 100%;
            height: 40px;
            border-radius: 4px;
            font-style: normal;
            font-weight: 600;
            font-size: var(--size_14);
            line-height: var(--heigh_24); 
            letter-spacing: 0.4px; 
            &.outline_btn {
              border: 1px solid #9CA5B6;
              background: #fff;              
              color: #3A4B6D;
            }
            &.fill_btn {
              background: #344362;
              color: #fff;
            }
          }
        }
      }
    }
  }
`