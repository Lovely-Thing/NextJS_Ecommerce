/* eslint-disable @next/next/no-img-element */ 
import { Button, Modal } from "antd";
import { useContext, useEffect, useState, useRef } from "react";
import styled from "styled-components"
import { Loader } from "@googlemaps/js-api-loader"
import { AppContext } from "../context/AppContext";
import H2component from "./H2component";

export default function StoreChooseModal(props:any) { 
    const mapdiv = useRef<HTMLHeadingElement>(null)
    const [isOpen, setIsOpen] = useState(0)
    const [mapData,setMapData] = useState('')
    const [isSelected, setIsSelected] = useState(0)
    const [storeData, setStoreData] = useState(undefined)

    const {
        isStoreModalShow,
        setIsStoreModalShow
    } = useContext(AppContext)      

    const handleOk = () => {
        setIsStoreModalShow(false);
    };

    const handleCancel = () => {
        setIsStoreModalShow(false); 
    }; 

    const selectStore = (data:any, id:any, e:any) => {
        e.preventDefault();
        setStoreData(data)
        setIsSelected(id) 
    }

    const opentTab =(id:any, e:any)=> {
        e.stopPropagation();
        setIsOpen(id) 
    }

    useEffect(()=>{
        try {
            let map:any;
            const loader = new Loader({
                apiKey: "AIzaSyB-2uhGGdZfbOcJ6xcUeqgQSIbG4HcWx4Q",
                version: "weekly",  
                libraries:  ['places']
            });    
            
            loader.load().then(() => { 
                let mapHtml = mapdiv.current
                console.log(mapHtml)
                if (mapHtml !== null) {
                    map = new google.maps.Map( mapHtml , {
                        center: {lat: -34.397, lng: 150.644},
                        zoom: 10,
                        disableDefaultUI: true,
                        zoomControl: true, 
                    });            
                } 
            })
            .catch(e => {
                console.log('')
              });
        } catch (error) {
            console.log("=====",error)
        } 
    },[isStoreModalShow])



    return(
        <Component>
            <Modal className='addProjectModal storemodal' visible={isStoreModalShow} onOk={handleOk} onCancel={handleCancel} footer={null}>
                <div className="left">
                    <div>
                         <div className="modal_title_container">
                            <H2component text='Choose the store' color='#1E2535'/> 
                            <div className="searchLocation">
                                <div className="searchSVG">
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.9167 14.6667H15.2583L15.025 14.4417C15.8417 13.4917 16.3333 12.2583 16.3333 10.9167C16.3333 7.925 13.9083 5.5 10.9167 5.5C7.925 5.5 5.5 7.925 5.5 10.9167C5.5 13.9083 7.925 16.3333 10.9167 16.3333C12.2583 16.3333 13.4917 15.8417 14.4417 15.025L14.6667 15.2583V15.9167L18.8333 20.075L20.075 18.8333L15.9167 14.6667ZM10.9167 14.6667C8.84167 14.6667 7.16667 12.9917 7.16667 10.9167C7.16667 8.84167 8.84167 7.16667 10.9167 7.16667C12.9917 7.16667 14.6667 8.84167 14.6667 10.9167C14.6667 12.9917 12.9917 14.6667 10.9167 14.6667Z" fill="#3A4B6D"/>
                                    </svg>
                                </div>
                                <input 
                                    type="search" 
                                    id="placeSearch" 
                                    onFocus={(e)=>setMapData(e.target.value)} 
                                    onChange={(e)=>setMapData(e.target.value)} 
                                    onBlur={(e)=>setMapData(e.target.value)}
                                />
                            </div> 
                         </div>
                         <div className="store_lists">
                            <div className={"listitem " + (isOpen == 1?'active':'')} key={1} onClick={(e)=>opentTab(1,e)}>
                                <div className="item_top">
                                    <div className="store_name">
                                        <div>
                                            <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.5 0H1.5V2H17.5V0ZM18.5 10V8L17.5 3H1.5L0.5 8V10H1.5V16H11.5V10H15.5V16H17.5V10H18.5ZM9.5 14H3.5V10H9.5V14Z" fill="#BC2B2B"/>
                                            </svg>
                                            <label htmlFor="">Office Building</label>
                                        </div>
                                        <p>2483 Toy Avenue, Toronto, CA</p>
                                    </div>
                                    <div className="store_num">88</div>
                                </div>
                                <div className="item_bottom">
                                    <Button onClick={(e)=>selectStore(1,1,e)} className={isSelected==1?'active':''}>Select</Button>
                                </div>
                            </div>
                            <div className={"listitem " + (isOpen == 2?'active':'')} key={2} onClick={(e)=>opentTab(2, e)}>
                                <div className="item_top">
                                    <div className="store_name">
                                        <div>
                                            <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.5 0H1.5V2H17.5V0ZM18.5 10V8L17.5 3H1.5L0.5 8V10H1.5V16H11.5V10H15.5V16H17.5V10H18.5ZM9.5 14H3.5V10H9.5V14Z" fill="#BC2B2B"/>
                                            </svg>
                                            <label htmlFor="">Office Building</label>
                                        </div>
                                        <p>2483 Toy Avenue, Toronto, CA</p>
                                    </div>
                                    <div className="store_num">88</div>
                                </div>
                                <div className="item_bottom">
                                    <Button onClick={(e)=>selectStore(2,2,e)} className={isSelected==2?'active':''}>Select</Button>
                                </div>
                            </div>
                            <div className={"listitem " + (isOpen == 3?'active':'')} key={3} onClick={(e)=>opentTab(3, e)}>
                                <div className="item_top">
                                    <div className="store_name">
                                        <div>
                                            <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.5 0H1.5V2H17.5V0ZM18.5 10V8L17.5 3H1.5L0.5 8V10H1.5V16H11.5V10H15.5V16H17.5V10H18.5ZM9.5 14H3.5V10H9.5V14Z" fill="#BC2B2B"/>
                                            </svg>
                                            <label htmlFor="">Office Building</label>
                                        </div>
                                        <p>2483 Toy Avenue, Toronto, CA</p>
                                    </div>
                                    <div className="store_num">88</div>
                                </div>
                                <div className="item_bottom">
                                    <Button onClick={(e)=>selectStore(3,3,e)} className={isSelected==3?'active':''}>Select</Button>
                                </div>
                            </div>
                         </div>
                    </div>                     
                </div>              
                <div className="right"> 
                     <div id="storemap" ref={mapdiv}>                         
                     </div>
                </div>  
            </Modal>
        </Component>
    )
}

 

const Component = styled.div` 
`