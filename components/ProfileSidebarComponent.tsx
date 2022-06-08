
import styled from "styled-components"
import ImgComponent from "./ImgComponent"
import ReactCountryFlag from "react-country-flag"
import { useState } from "react"

const profile_img = '../img/icon/profile.png'
const mailbox = '../img/icon/mailbox.svg'
const man = '../img/icon/man.svg'
const phone = '../img/icon/phone.svg'

export default function ProfileSidebarComponent(props:any) {
    
    const [active, setActive] = useState(1)

    return(  
        <Component>
            <div className="avatar_name">
                <ImgComponent src={profile_img} alt="profile image"/>
                <div className="username_id">
                    <p>Anastasiia Rubezhyna</p>
                    <div>ID:1245674322</div>
                </div>                
            </div>
            <div className="p_row mt_30">
                <ReactCountryFlag countryCode="UA" svg />
                <label>Ukraine</label>
            </div>
            <div className="p_row mt_10">
                <ImgComponent src={mailbox} alt="mailbox"/>
                <label>anastasiarubezhina@gmail.com</label>
            </div>
            <div className="p_row mt_10">
                <ImgComponent src={man} alt="profile"/>
                <label>Concrete contractor</label>
            </div>
            <div className="p_row mt_10">
                <ImgComponent src={phone} alt="phone"/>
                <label>+380 634 601 259</label>
            </div>
            <div className="personal_info_tabs">
                <p>Personal Information</p>
                <div>
                    <button className={"" + (active == 1?'active':'')} onClick={(e)=>{setActive(1); props.tab(1)}}>My Managers</button>
                </div>
                <div>
                    <button className={"" + (active == 2?'active':'')} onClick={(e)=>{setActive(2); props.tab(2)}}>Saved Address</button>
                </div>
                <div>
                    <button className={"" + (active == 3?'active':'')} onClick={(e)=>{setActive(3); props.tab(3)}}>Payment Method</button>
                </div>
                <div>
                    <button className={"" + (active == 4?'active':'')} onClick={(e)=>{setActive(4); props.tab(4)}}>Profile Settings</button>
                </div>
            </div>
            <div>
                <button className="logout_btn">Logout</button>
            </div>
        </Component> 
    )
}
 
const Component = styled.div`
    background: var(--color_FFF);
    box-shadow: 0px 2px 20px rgba(59, 66, 101, 0.05);
    border-radius: 4px;  
    max-width: 295px;
    width: 100%;
    padding: 15px 20px;
    .avatar_name {
        display: flex; 
        p{ 
            font-style: normal;
            font-weight: 500;
            font-size: var(--size_14);
            line-height: var(--heigh_21);
            letter-spacing: 0.1px;
            color: var(--color_333);
        }
        .username_id {
            margin-left: 10px;
        }
        div>div {
            background: #F2F3F4;
            border-radius: 16px;
            padding: 4px 10px;
            width: fit-content;
            font-style: normal;
            font-weight: 400;
            font-size: var(--size_10);
            line-height: var(--heigh_14);
            letter-spacing: 0.15px;
            color: #1E2535;
        }
    }
    .p_row {
        display: flex;
        align-items: center;
        label {
            margin-left: 10px;
            font-style: normal;
            font-weight: 400;
            font-size: var(--size_12);
            line-height: var(--heigh_19);
            letter-spacing: 0.22px;
            color: #272727;
        }
    }
    .personal_info_tabs {
        margin-top: 45px;
        p{
          font-family: var(--font_Roboto);
          font-style: normal;
          font-weight: 400;
          font-size: var(--size_14);
          line-height: var(--heigh_20);
          letter-spacing: 0.22px;
          color: #282A31;
          margin-bottom:23px;
        }
        div {
            position: relative;
            button {
              font-family: var(--font_Roboto);
              font-style: normal;
              font-weight: 400;
              font-size: var(--size_14);
              line-height: var(--heigh_20);
              letter-spacing: 0.22px;
              color: #282A31;
              outline: none;
              background: none;
              border: none;
              margin-bottom: 15px;
              padding-left: 0;
            }
            button.active {
              color: var(--color_BC2);
              &::after {
                position: absolute;
                content: '';
                left: -20px;
                width: 2px;
                top: -7px;
                height: 38px;
                background: var(--color_BC2);
              }
            }
        }
    }

    .logout_btn {
        font-family: var(--font_Roboto);
        font-style: normal;
        font-weight: 400;
        font-size: var(--size_14);
        line-height: var(--heigh_20);
        letter-spacing: 0.22px;
        color: #282A31;
        outline: none;
        background: none;
        border: none;
        margin-top: 60px;
        margin-bottom: 10px;
        padding-left: 0;
    }
`
 