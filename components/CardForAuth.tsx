/* eslint-disable @next/next/no-img-element */ 
import { Button } from "antd" 
import { useContext, useEffect, useState } from "react";
import styled from "styled-components"
import { AppContext } from "../context/AppContext";
import AuthModal from "./AuthModal"; 

export default function CardForAuth(props:any) {
    
    const {
        user, 
        setIsAuthModalVisible
    } = useContext(AppContext)  
    
    const [isauth, setIsauth] = useState(false)
    const [cardTitle, setCardTitle] = useState('Please Sign In')

    const showModal = () => {
        setIsAuthModalVisible(true);
    };  

    useEffect(()=>{
        if(user !== null) {
            setIsauth(true)
            setCardTitle('Personal Details')
        }
        else {
          setIsauth(false)
          setCardTitle('Please Sign In')
        }
    }, [user])
    
    return(
        <Component user={isauth}>
            <div className="cardBadge">
                Step 1
            </div>
            <h5>{cardTitle}</h5>
            <p className="description">If you have already Brokrete account
please, use it in our shop</p>
            {
                isauth?
                <>
                    <div className="carditem">
                        <label htmlFor="">Name</label>
                        <p>Milla Pattinson</p>
                    </div>
                    <div className="two_col">
                        <div className="carditem">
                            <label htmlFor="">Phone Number</label>
                            <p>+380634601259</p>
                        </div>
                        <div className="carditem ml_20">
                            <label htmlFor="">Company</label>
                            <p>Brokrete</p>
                        </div>
                    </div>
                    <div className="carditem">
                        <label htmlFor="">Email</label>
                        <p className="mb_0">pattinson@brokrete.com</p>
                    </div>
                </>:
                <div>
                    <Button className="signin" onClick={showModal}>Sign In</Button>
                    <div className="ordiv">Or</div>
                    <Button className="register">Create Account</Button>
                </div>
            }
            
            <AuthModal />
        </Component>
    )
}

interface StyleProps {
    user:boolean
}

const Component = styled.div<StyleProps>` 
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
    color: ${props=>props.user?'#2DAA6E':'#1E2535'};  
    width: 50px;
    height: 22px; 
    background: ${props=>props.user?'linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), #D2F1E2':'#F2F3F4'};
    border-radius: 16px;
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
    margin-top: 20px;
    margin-bottom: 10px;
}
.description {
    font-style: normal;
    font-weight: 400;
    font-size: var(--size_14);
    line-height: var(--heigh_20); 
    color: #696E79;
    margin-bottom: 20px;
    display:${props=>props.user?'none':'block'};
}
.signin {
    background: #3A4B6D;
    border-radius: 4px;
    width: 100%;
    border-color: #3A4B6D;
    font-style: normal;
    font-weight: 600;
    font-size: var(--size_14);
    line-height: var(--heigh_24); 
    letter-spacing: 0.4px;
    text-transform: capitalize; 
    color: #FFFFFF;
    height: 40px;
}
.register {
    background: #FFFFFF;
    border-radius: 4px;
    width: 100%;
    border: 1px solid #9CA5B6;
    font-style: normal;
    font-weight: 600;
    font-size: var(--size_14);
    line-height: var(--heigh_24); 
    letter-spacing: 0.4px;
    text-transform: capitalize; 
    color: #3A4B6D;
    height: 40px;
}
.ordiv {
    font-style: normal;
    font-weight: 400;
    font-size: var(--size_12);
    line-height: var(--heigh_19); 
    letter-spacing: 0.22px; 
    color: #696E79;
    text-align: center;
    padding: 8px 0;
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
 
`