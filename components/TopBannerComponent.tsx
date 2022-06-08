import Link from "next/link" 
import { useState, useContext } from "react"
import styled from 'styled-components'
import { AppContext } from "../context/AppContext"

import CategoryComponent from "./CategoryComponent"

export default function TopBannerComponent(props:any) {
    const [isVisibleMore, setisVisibleMore] = useState(false)
    const viewAllCategory =()=> { 
        setisVisibleMore(true)
        props.viewcates(true)
    } 

    const {
        user, 
        setUser,
        projectData,
        setProjectData, 
    } = useContext(AppContext)  

    return( 
            <TopBanner layoutState={isVisibleMore}>
                <div className="cat_div">
                    <CategoryComponent/>
                    <div className="more_view">
                        <div onClick={viewAllCategory}>More</div>
                    </div>
                </div>
                <div className="banner">
                    <h1>Driven to build a solid foundation</h1>
                    <p>Click &quot;order now&quot; to connect with Toronto Redi-Mix and place your order. If you are not signed up with this supplier or do not have a Brokrete account you will need to create one before starting your order.</p>
                    {
                        projectData == null?
                        <button>
                            <div className="btn_inner">
                                Add project
                            </div>
                        </button>:
                        <></>
                    }
                </div>
            </TopBanner> 
    )
}

interface PropsType {
    layoutState:boolean
}

const TopBanner = styled.div<PropsType>`
    display: flex; 
    margin-top: 30px;
    background: linear-gradient(78.98deg, #000000 38.66%, rgba(0, 0, 0, 0.4) 110.62%), 
    url(../img/top/banner.png) right no-repeat;
    border-radius: 10px 8px 8px 10px;
    background-size: cover;    
    .cat_div {
        width: ${props=>props.layoutState?'0':'300px'};
        padding: ${props=>props.layoutState?'0':'30px'};
        transition: ease-in 0.4;
        background: var(--color_FFF);
        flex: 0 0 auto;
        border-radius: 8px 0 0 8px;
        .more_view {
            margin-top: 15px;
            div {
                font-style: normal;
                font-weight: 600;
                font-size: var(--size_16);
                line-height: var(--heigh_28);
                color: var(--color_000);
                letter-spacing: 0.15px;
                cursor: pointer;
                text-decoration-line: underline;
            }
        }
        ul {
            display: ${props=>props.layoutState?'none':'block'};
        }
    }
    .banner {
        border-radius: 0 8px 8px 0;
        background-size: cover;
        height: 100%; 
        padding: 50px 108px 50px 58px;
        transition: ease-in 0.4;
        button {      
            margin-top: 40px; 
            position: relative;
            border: 1px solid var(--color_BC2); 
            background: var(--color_BC2);
            font-style: normal;
            font-weight: 600;
            font-size: var(--size_14);
            line-height: var(--heigh_24); 
            letter-spacing: 0.4px;
            text-transform: capitalize;
            color: var(--color_FFF);
            padding: 8px 24px;
            border-radius: 4px;
            overflow: hidden;
            .btn_inner {
                position: relative;
                z-index: 3;
                transition: all 0.4s;
            }
            &::before {
                content: "";
                position: absolute;
                left: 0;
                top: 0;
                display: block;
                width: 100%;
                height: 100%;
                z-index: 1;
                background: var(--color_FFF);
                transform: scale(0, 1);
                transform-origin: left top;
                transition: all 0.4s;
                z-index: 1;
            }
            &:hover {
                color: var(--color_BC2);
                &::before {
                    transform: scale(1, 1);
                }
            }
        }
        h1 {
            font-style: normal;
            font-weight: 700;
            font-size: var(--size_40);
            line-height: var(--heigh_48);
            color: var(--color_FFF);
        }
        p {
            margin-top: 17px; 
            font-style: normal;
            font-weight: 400;
            font-size: var(--size_18);
            line-height: var(--heigh_28); 
            letter-spacing: 0.494118px;
            color: var(--color_FFF);
            text-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
        }
    }
`