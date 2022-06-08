import { useState, useContext } from 'react';
import { Row, Col } from 'antd';    
import MetaComponent from '../components/MetaComponent';
import HeaderComponent from '../components/HeaderComponent'   
import TopBanner from '../components/TopBannerComponent'
import SectionTitle from '../components/SectionTitleComponent'
import ProductItem from '../components/ProductItemComponent';
import MediumBanner from '../components/MediumBannerCompoent';
import CustomButtonComponent from '../components/CustomButtonComponent';
import BottomBannerComponent from '../components/BottomBannerComponent';
import FooterMenuComponent from '../components/FooterMenuComponent';
import FooterCompoent from '../components/FooterCompoent';
import MediumBannerCompoentAfterLocation from '../components/MediumBannerCompoentAfterLocation';
import styles from '../styles/Home.module.scss' 


import { bottom_menu01, bottom_menu02, bottom_menu03, bottom_menu04 } from '../utils/bottomMenuHelper'
import CategorySidebar from '../components/CategorySidebar';
import ToppageCardForAddProject from '../components/ToppageCardForAddProject';
import { AppContext } from '../context/AppContext';

const product_img01 = '../img/product/product_01.png'
const product_img02 = '../img/product/product_02.png'
const product_img03 = '../img/product/product_03.png'
  

export default function Home() { 

  const {
    user, 
    setUser,
    projectData, 
} = useContext(AppContext)     

  const [isViewAllCategories, setisViewAllCategories] = useState(false)
  const [tabLists, setTabLists] = useState<number[]>([])


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
      hard_mark       : true,
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
 

  return (
    <div>
      <MetaComponent/>
      <HeaderComponent/>
      <main>
        <div className='container'>
          <TopBanner viewcates={setisViewAllCategories}/>
          {/* Common Product List */}
          {
            // Full Layout
            isViewAllCategories !== true?
            <>
              <div className='mt_120 mb_30'>
                <SectionTitle title="Bestseller"/>
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
              <div className='mt_60 mb_60'>
                {
                  projectData == null ?
                  <MediumBanner/>:
                  <MediumBannerCompoentAfterLocation />
                }
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
            </>:
            <>
              <div className='mt_40 mb_20'>
                <SectionTitle title="Products" num='1236'/>
              </div>
              <div className={styles.has_catsidebar}>
                <div className={styles.category_sidebar}>
                  <CategorySidebar />  
                  <div className='mt_15'>
                    <ToppageCardForAddProject/>
                  </div>
                </div>
                <div className={styles.category_products}>
                  <Row gutter={[30, 30]}>
                    {
                      data.map((subdata, id)=> {
                        return(
                          <Col xs={24} sm={12} md={8} lg={8} key={id}>
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
                </div>
              </div>
            </>
          }
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
