/* eslint-disable @next/next/no-img-element */ 
import { Button, Modal } from "antd";
import { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components"
import { Loader } from "@googlemaps/js-api-loader"
import { AppContext } from "../context/AppContext";
import H2component from "./H2component";

export default function MapAddressModal(props:any) {
    const mapdiv = useRef<HTMLHeadingElement>(null)
    const searchinp = useRef<HTMLInputElement>(null)
    const [mapData,setMapData] = useState('')
    const [isSetMapData, setIsSetMapData] = useState(false)
    const {
        isMapModalShow,
        setIsMapModalShow
    } = useContext(AppContext)      

    const handleOk = () => {
        setIsMapModalShow(false);
    };

    const handleCancel = () => {
        setIsMapModalShow(false);
        setIsSetMapData(false)
    };

    const saveDeliveryAddress = () => {
        setIsMapModalShow(false);
    }

    useEffect(()=> {
        try {
            let map:any, autocomplete: google.maps.places.Autocomplete;
            const loader = new Loader({
                apiKey: "AIzaSyB-2uhGGdZfbOcJ6xcUeqgQSIbG4HcWx4Q",
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
    },[isMapModalShow])

    useEffect(()=> {
        if(mapData !== '') {
            setIsSetMapData(true)
        }
    }, [mapData])

    return(
        <Component>
            <Modal className='addProjectModal' visible={isMapModalShow} onOk={handleOk} onCancel={handleCancel} footer={null}>
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
                                onFocus={(e)=>setMapData(e.target.value)} 
                                onChange={(e)=>setMapData(e.target.value)} 
                                onBlur={(e)=>setMapData(e.target.value)}
                            />
                        </div> 
                    </div>
                    {
                        isSetMapData?
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

 

const Component = styled.div` 
`