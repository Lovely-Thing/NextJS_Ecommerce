/* eslint-disable @next/next/no-img-element */ 
import styled from "styled-components"
import { useEffect, useContext, useState, useRef } from "react"; 
import { Button, Modal } from "antd";
import { Loader } from "@googlemaps/js-api-loader"
import H2component from "./H2component";
import { AppContext } from "../context/AppContext";
import { Notification } from "./Notification";


export default function CardForAddDeliveryAddress(props:any) {
    const {
        user,  
        delivery_address,
        setDelivery_address
    } = useContext(AppContext)     
    const [isModalVisible, setisModalVisible] = useState(false)
    const [isauth, setIsauth] = useState(false)
    const [placeData, setPlaceData] = useState('')
    const [isSetplaceData, setIsSetplaceData] = useState(false)
    const [isCompleted, setisCompleted] = useState(false)

    const mapdiv = useRef<HTMLHeadingElement>(null)
    const searchinp = useRef<HTMLInputElement>(null)

    const handleOk = () => {
        setisModalVisible(false)
    }
    const handleCancel = () => {
        setisModalVisible(false)
    }
    
    const showmodal =()=> {        
        setisModalVisible(true)
    }

    const saveDeliveryAddress = () => {
        setisModalVisible(false)
        setisCompleted(true)
        setDelivery_address(placeData)
        localStorage.setItem('delivery_address', placeData)
    }

    useEffect(()=>{
        try {
            let map:any, autocomplete: google.maps.places.Autocomplete;
            const loader = new Loader({
                apiKey: "",
                version: "weekly",  
                libraries:  ['places']
            });    
    
            const options = { 
                strictBounds: false, 
            };
            
            loader.load().then(() => {
                let mapHtml = mapdiv.current
                if (mapHtml !== null) {
                    map = new google.maps.Map( mapHtml , {
                        center: {lat: -34.397, lng: 150.644},
                        zoom: 8,
                        disableDefaultUI: true,
                        zoomControl: true, 
                    });            
                }
    
                let inputTag = searchinp.current;
                if (inputTag !== null) {
                    autocomplete = new google.maps.places.Autocomplete(inputTag, options);
                    autocomplete.bindTo("bounds", map);
    
                    const marker = new google.maps.Marker({
                        map,
                        anchorPoint: new google.maps.Point(0, -29),
                    });
                    
                    autocomplete.addListener("place_changed", () => { 
                        marker.setVisible(false);            
                        const place = autocomplete.getPlace();            
                        if (!place.geometry || !place.geometry.location) { 
                            return;
                        } 
                        if (place.geometry.viewport) {
                            map.fitBounds(place.geometry.viewport);
                        } else {
                            map.setCenter(place.geometry.location);
                            map.setZoom(17);
                        }
                    
                        marker.setPosition(place.geometry.location);
                        marker.setVisible(true); 
                    });    
    
                }
            })
            .catch(e => {
                console.log('')
              });
        } catch (error) {
            console.log("=====",error)
        }
    }, [isModalVisible])

    useEffect(()=>{
      if(user !== null) {
          setIsauth(true)
      }
      else {
        setIsauth(false)
      }
    }, [user])

    
    useEffect(()=>{
        if(placeData !== '') {
            setIsSetplaceData(true)            
        }
        else {
            setIsSetplaceData(false)
            setisCompleted(false)
        }
      }, [placeData])

      useEffect(()=> { 
        if(delivery_address !== '' && delivery_address !== null) { 
            setPlaceData(delivery_address)
            setIsSetplaceData(true)
            setisCompleted(true)
        }
      }, [delivery_address])


    return(
        <Component user={isauth} isCompleted={isCompleted}>
            <div className="cardBadge">
            Step 3
            </div>
            <h5>Delivery address</h5>
            <div>
                <p className="card_description">
                The address you enter will be used to deliver
                </p>
                <div className="arounded_info triangle" onClick={showmodal}>
                    <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 0C3.13 0 0 3.13 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 3.13 10.87 0 7 0ZM7 9.5C5.62 9.5 4.5 8.38 4.5 7C4.5 5.62 5.62 4.5 7 4.5C8.38 4.5 9.5 5.62 9.5 7C9.5 8.38 8.38 9.5 7 9.5Z" fill="#3A4B6D"/>
                    </svg>
                    <div className="description"> 
                        {
                            isCompleted?
                            <p>{placeData}</p>:
                            <p>Toronto, 333 Dension Street, Unit 21, 49000</p>
                        }
                    </div>
                </div>
            </div>
            <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} className='addProjectModal' footer={null}>
                <div className="left">
                    <div>
                        <H2component text='Delivery address' color='#1E2535'/> 
                        <div className="searchLocation">
                            <div className="searchSVG">
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.9167 14.6667H15.2583L15.025 14.4417C15.8417 13.4917 16.3333 12.2583 16.3333 10.9167C16.3333 7.925 13.9083 5.5 10.9167 5.5C7.925 5.5 5.5 7.925 5.5 10.9167C5.5 13.9083 7.925 16.3333 10.9167 16.3333C12.2583 16.3333 13.4917 15.8417 14.4417 15.025L14.6667 15.2583V15.9167L18.8333 20.075L20.075 18.8333L15.9167 14.6667ZM10.9167 14.6667C8.84167 14.6667 7.16667 12.9917 7.16667 10.9167C7.16667 8.84167 8.84167 7.16667 10.9167 7.16667C12.9917 7.16667 14.6667 8.84167 14.6667 10.9167C14.6667 12.9917 12.9917 14.6667 10.9167 14.6667Z" fill="#3A4B6D"/>
                                </svg>
                            </div>
                            <input 
                                type="search" 
                                id="placeSearch" 
                                ref={searchinp}
                                onFocus={(e)=>setPlaceData(e.target.value)} 
                                onChange={(e)=>setPlaceData(e.target.value)} 
                                onBlur={(e)=>setPlaceData(e.target.value)}
                            />
                        </div> 
                    </div>
                    {
                        isSetplaceData?
                        <Button onClick={saveDeliveryAddress}>Save & Continue</Button>:
                        <Button className="unactive">Save & Continue</Button>
                    }
                </div>              
                <div className="right"> 
                     <div id="map" ref={mapdiv}>                         
                     </div>
                </div>  
            </Modal>
        </Component>
    )
}

interface StyleProps {
    user: boolean,
    isCompleted: boolean
}

const Component = styled.div<StyleProps>` 
position: relative;
background: #FFFFFF;
border: 1px solid #F4F4F4;
border-radius: 4px;
width: 295px;
padding: 20px;
&::before {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    background: #FFFFFF;
    opacity: 0.5;
    z-index: ${props=>props.user?-1:2};
    content: '';
}
.cardBadge {
    font-style: normal;
    font-weight: 400;
    font-size: var(--size_10);
    line-height: var(--heigh_14); 
    letter-spacing: 0.15px; 
    color: ${props=>props.isCompleted?'#2DAA6E':'#1E2535'}; 
    width: 50px;
    height: 22px; 
    background: ${props=>props.isCompleted?'linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), #D2F1E2':'#F2F3F4'};
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
    margin-top: 15px;
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
    cursor: pointer;
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