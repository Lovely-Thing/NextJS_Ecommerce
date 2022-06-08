import React, { useEffect, useState } from 'react';
  
const defaultState = {
    user: 'lovelything',
    setUser:(userdata)=>{},
    delivery_address: '',
    setDelivery_address:(data)=>{},
    projectData:null,
    setProjectData:(data)=>{},
    isMapModalShow:false,
    setIsMapModalShow:(data)=>{},
    isStoreModalShow:false,
    setIsStoreModalShow:(data)=>{},
    isEditQtyModalVisible: false,
    setIsEditQtyModalVisible: (data) => {},
    isChooseLocationModalShow:false,
    setIsChooseLocationModalShow:(data)=>{},
    isSetLocality:false,
    setIsSetLocality:(data)=>{},    
    isAuthModalVisible:false,
    setIsAuthModalVisible:(data)=>{},
};

export const AppContext = React.createContext(defaultState);
 
export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);  
  const [delivery_address, setDelivery_address] = useState('');  
  const [projectData, setProjectData] = useState(null);  
  const [isMapModalShow, setIsMapModalShow] = useState(false)
  const [isStoreModalShow, setIsStoreModalShow] = useState(false)  
  const [isEditQtyModalVisible, setIsEditQtyModalVisible] = useState(false);  
  const [isChooseLocationModalShow, setIsChooseLocationModalShow] = useState(false);  
  const [isAuthModalVisible, setIsAuthModalVisible] = useState(false);  
  const [isSetLocality, setIsSetLocality] = useState(true)

  useEffect(() => {
    var data = localStorage.getItem('user') 
    console.log("APPContext User:", data)
    if(data !== null || data !== undefined) {
      setUser(data)
    }

  }, [user])

  useEffect(() => {
    var deliveryAddressData = localStorage.getItem('delivery_address')
    console.log("APPContext deliveryAddressData:", deliveryAddressData)
    if(deliveryAddressData !== null || deliveryAddressData !== undefined) {
      setDelivery_address(deliveryAddressData)
    }

  }, [delivery_address])

  useEffect(() => {
    var projectData = localStorage.getItem('project_data')
    console.log("APPContext projectData:", projectData)
    if(projectData !== null || projectData !== undefined) {
      setProjectData(projectData)
    }
  }, [projectData])

   
    

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        delivery_address,
        setDelivery_address,
        projectData,
        setProjectData,
        isMapModalShow,
        setIsMapModalShow,
        isStoreModalShow,
        setIsStoreModalShow,
        isEditQtyModalVisible,
        setIsEditQtyModalVisible,
        isChooseLocationModalShow,
        setIsChooseLocationModalShow,
        isSetLocality,
        setIsSetLocality,
        isAuthModalVisible,
        setIsAuthModalVisible
      }}
    >
      {children}
    </AppContext.Provider>
  );
};