/* eslint-disable react-hooks/exhaustive-deps */
import { useState, createContext, useEffect, useContext } from "react"; 
import MetaComponent from '../components/MetaComponent';
import HeaderComponent from '../components/HeaderComponent'    
import BottomBannerComponent from '../components/BottomBannerComponent';
import FooterMenuComponent from '../components/FooterMenuComponent';
import FooterCompoent from '../components/FooterCompoent'; 
import CheckoutPageHeader from '../components/CheckoutPageHeader'; 
import ProductItem from '../components/ProductItemComponent';
import MediumBanner from '../components/MediumBannerCompoent'; 
import CheckoutSideBarForAuthComponent from "../components/CheckoutSideBarForAuthComponent";

import { bottom_menu01, bottom_menu02, bottom_menu03, bottom_menu04 } from '../utils/bottomMenuHelper'  
import { Col, Row } from "antd";
import CustomButtonComponent from "../components/CustomButtonComponent";
import { AppContext } from "../context/AppContext";
import ShoppingCart from "../components/ShoppingCart";
import Delivery from "../components/Delivery";
import PaymentMethod from "../components/PaymentMethod";


type TodosContextState = {
  currentStep: number;
  setCurrentStep: (num: number) => void;
};

const contextDefaultValues: TodosContextState = {
  currentStep: 1,
  setCurrentStep: () => {}
};

export const StepContext = createContext<TodosContextState>(contextDefaultValues);

 

const product_img01 = '../img/product/product_01.png'
const product_img02 = '../img/product/product_02.png'
const product_img03 = '../img/product/product_03.png'

const data: any[] = [
  {
    image           : product_img01,
    hard_mark       : true,
    wave_mark       : true,
    productName     : "Sikafloor 317 6.58LT (Partie A et B)",
    price           : '$4.02',
    unit            : 'sq.ft.',
    priceClassName  : ''
  },
  {
    image           : product_img02,
    hard_mark       : true,
    wave_mark       : true,
    productName     : "Beton LM-S6",
    price           : '$101.99',
    unit            : 'sq.ft.',
    priceClassName  : 'big'
  },
  {
    image           : product_img03,
    hard_mark       : false,
    wave_mark       : false,
    productName     : "Sikafloor 317 6.58LT (Partie A et B)",
    price           : '$4.02',
    unit            : 'sq.ft.',
    priceClassName  : ''
  },
  {
    image           : product_img01,
    hard_mark       : true,
    wave_mark       : true,
    productName     : "Sikafloor 317 6.58LT (Partie A et B)",
    price           : '$4.02',
    unit            : 'sq.ft.',
    priceClassName  : ''
  },{
    image           : product_img01,
    hard_mark       : true,
    wave_mark       : true,
    productName     : "Sikafloor 317 6.58LT (Partie A et B)",
    price           : '$4.02',
    unit            : 'sq.ft.',
    priceClassName  : 'big'
  },
  {
    image           : product_img01,
    hard_mark       : true,
    wave_mark       : true,
    productName     : "Sikafloor 317 6.58LT (Partie A et B)",
    price           : '$4.02',
    unit            : 'sq.ft.',
    priceClassName  : ''
  },{
    image           : product_img01,
    hard_mark       : false,
    wave_mark       : true,
    productName     : "Sikafloor 317 6.58LT (Partie A et B)",
    price           : '$4.02',
    unit            : 'sq.ft.',
    priceClassName  : ''
  },
  {
    image           : product_img01,
    hard_mark       : true,
    wave_mark       : true,
    productName     : "Sikafloor 317 6.58LT (Partie A et B)",
    price           : '$4.02',
    unit            : 'sq.ft.',
    priceClassName  : ''
  } 
] 



export default function CheckOutPage() {    

  const {user, setUser} = useContext(AppContext)
  const [currentStep, setCurrentStep] = useState(1);  
 
  

  let perstepHTML;
  
  if(currentStep == 1) {
    perstepHTML = <ShoppingCart />;
  }
  if(currentStep == 2) {
    perstepHTML = <Delivery />;
  }
  if(currentStep == 3) {
    perstepHTML = <PaymentMethod />;
  } 

  useEffect(()=>{
    console.log('userdata', user)
  }, [user])

  return (
    <div>
      <MetaComponent/>
      <HeaderComponent/>
      <main>   
        <StepContext.Provider value={{
          currentStep: currentStep, 
          setCurrentStep: setCurrentStep
        }}>
          <CheckoutPageHeader/>
        </StepContext.Provider>
        <div className='container'>    
          <div className="mt_40 checkoutpage_content">
            <div> 
                <CheckoutSideBarForAuthComponent/> 
            </div> 
            <div className="right">
              {perstepHTML}
            </div> 
          </div> 
          <div className='mt_60 mb_60'>
            <MediumBanner/>
          </div>
          <Row gutter={[32, 32]}>
            {
              data.map((subdata, id)=> {
                return(
                  <Col xs={24} sm={12} md={8} lg={6} key={id}>
                    <div className='product_item'>
                      <ProductItem
                        product_img={subdata.image}
                        hard_mark={subdata.hard_mark}
                        wave_mark={subdata.wave_mark}
                        productName={subdata.productName}
                        price={subdata.price}
                        unit={subdata.unit}
                        priceClassName={subdata.priceClassName}
                      />
                    </div>
                  </Col>    
                )
              })
            }          
          </Row>
          <div className='mt_60 flex-cc mb_108'>
              <CustomButtonComponent buttonText='Show More' dataname="showmore" even={undefined}/>
          </div>
          <div>
            <BottomBannerComponent />
          </div>
          <div className='bottom_menu_container mt_60'>
            <FooterMenuComponent data={bottom_menu01} menu_title="Brokrete Market"/>
            <FooterMenuComponent data={bottom_menu02} menu_title="Help"/>
            <FooterMenuComponent data={bottom_menu03} menu_title="Our Community"/>
            <FooterMenuComponent data={bottom_menu04} menu_title="Contact"/>
          </div>
        </div> 
      </main>
      <FooterCompoent />
    </div>
  )
}
