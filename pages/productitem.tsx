import Link from 'next/link';
import ImageGallery from 'react-image-gallery';
import MetaComponent from '../components/MetaComponent';
import HeaderComponent from '../components/HeaderComponent'    
import BottomBannerComponent from '../components/BottomBannerComponent';
import FooterMenuComponent from '../components/FooterMenuComponent';
import FooterCompoent from '../components/FooterCompoent'; 
import ProductItemPageHeader from '../components/ProductItemPageHeader';
import ProductItem from '../components/ProductItemComponent'; 

import { bottom_menu01, bottom_menu02, bottom_menu03, bottom_menu04 } from '../utils/bottomMenuHelper'  
import H2component from '../components/H2component';
import { Col, Row } from 'antd';
import CustomButtonComponent from '../components/CustomButtonComponent';
import { useState } from 'react';
const plus_icon = '../img/icon/plus_red.svg' 
 

const product_img01 = '../img/product/product_01.png'
const product_img02 = '../img/product/product_02.png'
const product_img03 = '../img/product/product_03.png'

const original = '../img/product/pitem_origin.png'
const thumbnail = '../img/product/pitem_thumb.png'


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


export default function Productitem() {  
 
  const [isVisiblethumbnail, setIsVisiblethumbnail] = useState(true)
  const [isVisibleArrow, setisVisibleArrow] = useState(false)
  const images = [
    {
      original: original,
      thumbnail: thumbnail,
    },
    {
      original: original,
      thumbnail: thumbnail,
    },
    {
      original: original,
      thumbnail: thumbnail,
    },
    {
      original: original,
      thumbnail: thumbnail,
    },
    {
      original: original,
      thumbnail: thumbnail,
    }
  ];

  const fullScreen =(e:any)=> {
    console.log("OK", e)
    setIsVisiblethumbnail(!e)
    setisVisibleArrow(e)
  }
   
  return (
    <div>
      <MetaComponent/>
      <HeaderComponent/>
      <main>   
        <ProductItemPageHeader />
        <div className="container" id='productitem'>
          <div className="produt_item_content">
            <div className="pimg_gallery">
              <button className="favorite_mark_btn">
                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.5 0C12.76 0 11.09 0.81 10 2.09C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.42 0 5.5C0 9.28 3.4 12.36 8.55 17.04L10 18.35L11.45 17.03C16.6 12.36 20 9.28 20 5.5C20 2.42 17.58 0 14.5 0ZM10.1 15.55L10 15.65L9.9 15.55C5.14 11.24 2 8.39 2 5.5C2 3.5 3.5 2 5.5 2C7.04 2 8.54 2.99 9.07 4.36H10.94C11.46 2.99 12.96 2 14.5 2C16.5 2 18 3.5 18 5.5C18 8.39 14.86 11.24 10.1 15.55Z" fill="#7E858E"/>
                </svg>
              </button>
              <ImageGallery 
                items={images} 
                thumbnailPosition='left' 
                showPlayButton={false} 
                autoPlay={false} 
                showNav={isVisibleArrow}
                showThumbnails={isVisiblethumbnail}
                onScreenChange={(e)=>fullScreen(e)}
              />
            </div>
            <div className="pitem_controls">
              <div className="pitem_controls_container">
                <div className="pic_head">
                  <H2component text='14 X 7/64 X 1 Diamond Chop saw blade – Diamon' />
                  <span>Item 1772</span>
                </div>
                <div className="pic_subitem_ttl_count">
                  <p>Edge profile & grid size: <span>15/16</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>        
        <div className='container'> 
          <div className='mt_60 mb_30'>
            <H2component text="You may also be interested"/>
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
          <div className='mt_40'>
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
