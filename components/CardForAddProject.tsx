/* eslint-disable @next/next/no-img-element */ 
import { Button, Modal  } from "antd"
import styled from "styled-components"
import { useEffect, useContext, useState, useCallback, useRef } from "react"; 
import { AppContext } from "../context/AppContext";   
import { Loader } from "@googlemaps/js-api-loader"
import H2component from "./H2component";  
import { Notification } from "./Notification";

export default function CardForAddProject(props:any) {
    const {
        user, 
        setUser,
        projectData,
        setProjectData
    } = useContext(AppContext)   

    const mapdiv = useRef<HTMLHeadingElement>(null)
    const searchinp = useRef<HTMLInputElement>(null)
    
    const [isauth, setIsauth] = useState(false)
    const [isModalVisible, setIsModalVisible] = useState(false); 
    const [isNewProjectModalVisible, setIsNewProjectModalVisible] = useState(false); 
    const [isLocation, setLocationModal] = useState(false); 
    const [placeData, setPlaceData] = useState('Country,City'); 
    const [isAddedProject, setIsAddedProject] = useState(false); 
    const [projectTitle, setProjectTitle] = useState('')
    const [selectedOption, setSelectedOption] = useState('')


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
                    mapTypeControl: false,
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
        console.log('error:', error)
    }
     
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setLocationModal(false)
    };

    const showNewProjectModal = () => {
        setIsNewProjectModalVisible(true)
        setIsModalVisible(false)
    }

    const modalOK = () => {
        setIsNewProjectModalVisible(true)
    }

    const modalCancel = () => {
        setIsNewProjectModalVisible(false)
    }

    const showlocationModal = () => {
        setIsModalVisible(true);
        setIsNewProjectModalVisible(false)
        setLocationModal(true)
    }

    const saveLocationData = () => {
        setIsModalVisible(false);
        setLocationModal(false)
        setIsNewProjectModalVisible(true)
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

    useEffect(()=>{
      if(user !== null) {
          setIsauth(true)
      }
      else {
        setIsauth(false)
      }
    }, [user])  


    return(
        <Component user={isauth} isAddedProject={isAddedProject}>
            <div className="cardBadge">
                Step 2
            </div>
            { 
                isAddedProject? 
                <>
                    <h5>{projectTitle}</h5>
                    <div className="arounded_info triangle">
                        <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.04167 0C2.09409 0 0.5 1.46771 0.5 3.26087V11.7391C0.500209 11.7608 0.501594 11.7825 0.50415 11.8041C0.542445 13.5673 2.11789 15 4.04167 15H16.7917C17.1829 15 17.5 14.708 17.5 14.3478V2.6087C17.5 2.24852 17.1829 1.95656 16.7917 1.95652H4.75V0.652174C4.74996 0.292003 4.43285 0 4.04167 0ZM4.75 3.26087H16.0833V13.6957H4.04167C2.85982 13.6957 1.91667 12.8273 1.91667 11.7391C1.91667 10.651 2.85982 9.78261 4.04167 9.78261C4.43285 9.78257 4.74996 9.49061 4.75 9.13043V3.26087ZM11.125 4.56522L12.395 5.73454L10.4167 7.55605L8.79248 6.06063C8.51585 5.80604 8.06748 5.80604 7.79085 6.06063L6.37419 7.36498C6.18914 7.52856 6.1146 7.77146 6.17931 8.00001C6.24402 8.22856 6.43787 8.40704 6.6861 8.46662C6.93433 8.5262 7.19815 8.45757 7.37581 8.28719L8.29167 7.44395L9.91585 8.93937C10.1925 9.19396 10.6409 9.19396 10.9175 8.93937L13.3966 6.65676L14.6667 7.82609V4.56522H11.125ZM6.875 10.4348C6.61955 10.4315 6.38194 10.555 6.25316 10.7582C6.12438 10.9613 6.12438 11.2126 6.25316 11.4157C6.38194 11.6189 6.61955 11.7425 6.875 11.7391H13.9583C14.2138 11.7425 14.4514 11.6189 14.5802 11.4157C14.7089 11.2126 14.7089 10.9613 14.5802 10.7582C14.4514 10.555 14.2138 10.4315 13.9583 10.4348H6.875Z" fill="#3A4B6D"/>
                        </svg>
                        <div className="description"> 
                            <p>{placeData}</p>
                        </div>
                    </div>
                </>:
                <>
                    <h5>Add Your Project</h5>
                    <p className="description">If you have already Brokrete account
        please, use it in our shop</p>
                    <div>
                        <Button type="primary" className="signin" onClick={showModal}>Add Project</Button> 
                        <div className="ordiv"></div>
                        <Button className="register">Skip</Button>
                    </div>
                </>
            }
            <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} className='addProjectModal' footer={null}>
                <div className="left">
                    <div>
                        <H2component text={isLocation?'Project Location':'Add your Project'} color='#1E2535'/>
                        {
                            isLocation?
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
                            </div>:
                            <>
                                <p className="mt_40">Hi, <label htmlFor="">Milla Pattinson</label> </p>
                                <p>You haven”t project yet.</p>
                            </>
                        }
                    </div>
                    <Button onClick={isLocation?saveLocationData:showNewProjectModal}>{isLocation?'Save & Continue':'Choose a project'}</Button>
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

interface StyleProps {
    user:boolean,
    isAddedProject:boolean
}

const Component = styled.div<StyleProps>` 
position: relative;
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
    color: ${props=>props.isAddedProject?'#2DAA6E':'#1E2535'};  
    width: 50px;
    height: 22px;  
    background: ${props=>props.isAddedProject?'linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), #D2F1E2':'#F2F3F4'};
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

.arounded_info {
    display: flex;
    align-items: center;
    border: 1px solid #E5E7E8;
    border-radius: 4px;
    padding-left: 43px;
    padding-right: 37px;
    padding-top: 7px;
    padding-bottom: 7px;
    svg {
        position: absolute;
        left: 11.5px;
        top: 50%;
        transform: translateY(-50%);
    }
    .description {
        margin-bottom: 0;
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

 