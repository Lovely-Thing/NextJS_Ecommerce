/* eslint-disable @next/next/no-img-element */ 
import { Button, Modal } from "antd";
import { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components"
import { Loader } from "@googlemaps/js-api-loader"
import { AppContext } from "../context/AppContext";
import H2component from "./H2component";
import { Notification } from "./Notification";

export default function ChooseLocationModal(props:any) {
    const mapdiv = useRef<HTMLHeadingElement>(null)
    const searchinp = useRef<HTMLInputElement>(null)
    const [mapData,setMapData] = useState('')
    const [isSetMapData, setIsSetMapData] = useState(false)
    const [isNewProjectModalVisible, setIsNewProjectModalVisible] = useState(false); 
    const [selectedOption, setSelectedOption] = useState('')
    const [projectTitle, setProjectTitle] = useState('')
    const [placeData, setPlaceData] = useState('Country,City');
    const [isAddedProject, setIsAddedProject] = useState(false);  

    const {
        user, 
        setUser,
        projectData,
        setProjectData,
        isChooseLocationModalShow,
        setIsChooseLocationModalShow
    } = useContext(AppContext)      

    const handleOk = () => {
        setIsChooseLocationModalShow(false);
    };

    const handleCancel = () => {
        setIsChooseLocationModalShow(false);
        setIsSetMapData(false)
    };

    const saveDeliveryAddress = () => {
        setIsChooseLocationModalShow(false);
    }

    const modalOK = () => {
        setIsNewProjectModalVisible(true)
    }

    const modalCancel = () => {
        setIsNewProjectModalVisible(false)
    }

    const showlocationModal = () => { 
        // setIsNewProjectModalVisible(false) 
    }

    const addProject = () => {        
        if( projectTitle == '') {
            Notification(
                'warning', 
                'Please input project title',
                ''
            )            
            return
        }
        else if(placeData =='Country,City' || placeData =='') {
            Notification(
                'warning', 
                'Please input place name',
                ''
            ) 
            return
        }
        else if(selectedOption == '') {
            Notification(
                'warning', 
                'Please select project type',
                ''
            )
            return
        }
        else {
            setIsNewProjectModalVisible(false);
            setIsAddedProject(true)
            Notification(
                '', 
                'Delivery address successfully saving',
                'The shipping address will appear on each item.'
            )
            let saveData = 
                {
                    title: projectTitle,
                    option: selectedOption,
                    place: placeData
                }
            

            localStorage.setItem('project_data', JSON.stringify(saveData))
        }
        
    }

    useEffect(() => {
        if(projectData !== null) {
            let projectStorageData = JSON.parse(projectData)
            setPlaceData(projectStorageData.place)
            setProjectTitle(projectStorageData.title)
            setSelectedOption(projectStorageData.option)
            setIsAddedProject(true)
        }
    },[projectData])

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
    },[isChooseLocationModalShow])

    useEffect(()=> {
        if(mapData !== '') {
            setIsSetMapData(true)
        }
    }, [mapData])

    return(
        <Component>
            <Modal className='chooseLocationtModal' visible={isChooseLocationModalShow} onOk={handleOk} onCancel={handleCancel} footer={null}>
                <div className="left">
                    <div>
                        <H2component text='Choose your address' color='#1E2535'/> 
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

                        {
                            user == ''?
                            <div className="startyourproject">
                                <h4>Start your project with us</h4>
                                <p>If you have already Brokrete project, use it in our shop, or create account.</p>
                                <div className="twobtns">
                                    <div>
                                        <button className="outline">Skip</button>
                                    </div>
                                    <div>
                                        <button className="fill" onClick={()=>setIsNewProjectModalVisible(true)}>Add a Project</button>
                                    </div>
                                </div>
                            </div>:
                            <div className="startyourproject authed">
                                <div className="hiuser">
                                    <h5>Hi, <span>Milla Pattinson </span></h5>
                                    {
                                        projectData == null?
                                        <p>You haven&apos;t project yet.</p>:
                                        <p>Please choose a project</p>
                                    }
                                </div>
                                {
                                projectData == null?
                                    <div className="twobtns">
                                        <div>
                                            <button className="outline">Skip</button>
                                        </div>
                                        <div>
                                            <button className="fill" onClick={()=>setIsNewProjectModalVisible(true)}>Add a Project</button>
                                        </div>
                                    </div>:
                                    <div className="chooseyourproject">
                                        <div className="searchLocation">
                                            <div className="searchSVG">
                                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M15.9167 14.6667H15.2583L15.025 14.4417C15.8417 13.4917 16.3333 12.2583 16.3333 10.9167C16.3333 7.925 13.9083 5.5 10.9167 5.5C7.925 5.5 5.5 7.925 5.5 10.9167C5.5 13.9083 7.925 16.3333 10.9167 16.3333C12.2583 16.3333 13.4917 15.8417 14.4417 15.025L14.6667 15.2583V15.9167L18.8333 20.075L20.075 18.8333L15.9167 14.6667ZM10.9167 14.6667C8.84167 14.6667 7.16667 12.9917 7.16667 10.9167C7.16667 8.84167 8.84167 7.16667 10.9167 7.16667C12.9917 7.16667 14.6667 8.84167 14.6667 10.9167C14.6667 12.9917 12.9917 14.6667 10.9167 14.6667Z" fill="#3A4B6D"/>
                                                </svg>
                                            </div>
                                            <input 
                                                type="search"   
                                            />
                                        </div> 
                                        <button className="addnewprojectbtn">
                                            <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.50002 0.666687C3.90002 0.666687 0.166687 4.40002 0.166687 9.00002C0.166687 13.6 3.90002 17.3334 8.50002 17.3334C13.1 17.3334 16.8334 13.6 16.8334 9.00002C16.8334 4.40002 13.1 0.666687 8.50002 0.666687ZM12.6667 9.83335H9.33335V13.1667H7.66669V9.83335H4.33335V8.16669H7.66669V4.83335H9.33335V8.16669H12.6667V9.83335Z" fill="#BC2B2B"/>
                                            </svg>
                                            Project
                                        </button>
                                    </div>
                                }
                            </div>
                        }

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
            <Modal visible={isNewProjectModalVisible} onOk={modalOK} onCancel={modalCancel} className='newProject' footer={null}>
                <H2component text='New Project' color='#2E2E2E'/>
                <p className="mt_40">Project Name</p>
                <input type="text" name="projectTitle" placeholder="Toronto Stadioum" onChange={(e)=>setProjectTitle(e.target.value)}/>
                <h3>What type of project are you working on?</h3>
                <p>Contactor Type</p>
                <div className="selectDiv triangle">
                    <select name="projectType" id="" onChange={e => setSelectedOption(e.target.value)}>
                        <option value="Footing">Footing</option> 
                        <option value="Footing01">Footing01</option> 
                    </select>
                </div>                
                <h3>Please Add project Location</h3>
                <div className="location" onClick={showlocationModal}>
                    <div className="svg">
                        <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 0C3.13 0 0 3.13 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 3.13 10.87 0 7 0ZM7 9.5C5.62 9.5 4.5 8.38 4.5 7C4.5 5.62 5.62 4.5 7 4.5C8.38 4.5 9.5 5.62 9.5 7C9.5 8.38 8.38 9.5 7 9.5Z" fill="#3A4B6D"/>
                        </svg>
                    </div>
                    <div className="input">{placeData}</div>
                </div>
                {
                    placeData !=='Country,City' && placeData !==''?
                    <div className="addprojectBtn active" onClick={addProject}>
                        Add Project
                    </div>:
                    <div className="addprojectBtn">
                        Add Project
                    </div>
                }                
            </Modal>  
        </Component>
    )
}

 

const Component = styled.div` 
`