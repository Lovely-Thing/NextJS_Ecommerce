import MetaComponent from '../components/MetaComponent';
import HeaderComponent from '../components/HeaderComponent'    
import BottomBannerComponent from '../components/BottomBannerComponent';
import FooterMenuComponent from '../components/FooterMenuComponent';
import FooterCompoent from '../components/FooterCompoent'; 

import { bottom_menu01, bottom_menu02, bottom_menu03, bottom_menu04 } from '../utils/bottomMenuHelper' 
import QuzItemComponent from '../components/QuzItemComponent';
import H2component from '../components/H2component';
import Link from 'next/link';
const plus_icon = '../img/icon/plus_red.svg' 
 

export default function FAQ() {  
 
   
  return (
    <div>
      <MetaComponent/>
      <HeaderComponent/>
      <main>   
        <div className="container">
          <div className="qz_title">
            <H2component text='Popular questions' />
          </div>
          <div className="quz_lists">
            <Link href={{ pathname: '/faq_detail', query: { id: 1 } }} >
              <div>
                <QuzItemComponent 
                  icon={
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 0H2C0.89 0 0.00999999 0.89 0.00999999 2L0 14C0 15.11 0.89 16 2 16H18C19.11 16 20 15.11 20 14V2C20 0.89 19.11 0 18 0ZM18 14H2V8H18V14ZM18 4H2V2H18V4Z" fill="#BC2B2B"/>
                    </svg>
                  }
                  title="Payment"
                  texts='This section contains the necessary information about the available payment methods and how to use them.'
                />
              </div>
            </Link>
            
            <Link href={{ pathname: '/faq_detail', query: { id: 1 } }} >
              <div>
                <QuzItemComponent 
                  icon={
                    <svg width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 4.99999C14.83 4.99999 15.5 4.32999 15.5 3.49999C15.5 2.49999 14 0.799988 14 0.799988C14 0.799988 12.5 2.49999 12.5 3.49999C12.5 4.32999 13.17 4.99999 14 4.99999ZM9 4.99999C9.83 4.99999 10.5 4.32999 10.5 3.49999C10.5 2.49999 9 0.799988 9 0.799988C9 0.799988 7.5 2.49999 7.5 3.49999C7.5 4.32999 8.17 4.99999 9 4.99999ZM4 4.99999C4.83 4.99999 5.5 4.32999 5.5 3.49999C5.5 2.49999 4 0.799988 4 0.799988C4 0.799988 2.5 2.49999 2.5 3.49999C2.5 4.32999 3.17 4.99999 4 4.99999ZM15.92 8.00999C15.72 7.41999 15.16 6.99999 14.5 6.99999H3.5C2.84 6.99999 2.29 7.41999 2.08 8.00999L0 14V22C0 22.55 0.45 23 1 23H2C2.55 23 3 22.55 3 22V21H15V22C15 22.55 15.45 23 16 23H17C17.55 23 18 22.55 18 22V14L15.92 8.00999ZM3.5 18C2.67 18 2 17.33 2 16.5C2 15.67 2.67 15 3.5 15C4.33 15 5 15.67 5 16.5C5 17.33 4.33 18 3.5 18ZM14.5 18C13.67 18 13 17.33 13 16.5C13 15.67 13.67 15 14.5 15C15.33 15 16 15.67 16 16.5C16 17.33 15.33 18 14.5 18ZM2 13L3.5 8.49999H14.5L16 13H2Z" fill="#BC2B2B"/>
                    </svg>
                  }
                  title="Delivery"
                  texts='Information about the terms and methods of delivery, conditions of receipt and storage can be found here.'
                />
              </div>
            </Link>
            
            <Link href={{ pathname: '/faq_detail', query: { id: 1 } }} >
              <div>
              <QuzItemComponent 
                icon={
                  <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 5H14C14 2.24 11.76 0 9 0C6.24 0 4 2.24 4 5H2C0.9 5 0.00999999 5.9 0.00999999 7L0 19C0 20.1 0.9 21 2 21H16C17.1 21 18 20.1 18 19V7C18 5.9 17.1 5 16 5ZM9 2C10.66 2 12 3.34 12 5H6C6 3.34 7.34 2 9 2ZM9 12C6.24 12 4 9.76 4 7H6C6 8.66 7.34 10 9 10C10.66 10 12 8.66 12 7H14C14 9.76 11.76 12 9 12Z" fill="#BC2B2B"/>
                  </svg>
                }
                title="Product information"
                texts='Want to buy a product, but are not sure that you have taken into account all the details? Not sure how to place an order? '
              />
              </div>
            </Link>
            
            <Link href={{ pathname: '/faq_detail', query: { id: 1 } }} >
              <div>
              <QuzItemComponent 
                icon={
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 17H9V15H11V17ZM13.07 9.25L12.17 10.17C11.45 10.9 11 11.5 11 13H9V12.5C9 11.4 9.45 10.4 10.17 9.67L11.41 8.41C11.78 8.05 12 7.55 12 7C12 5.9 11.1 5 10 5C8.9 5 8 5.9 8 7H6C6 4.79 7.79 3 10 3C12.21 3 14 4.79 14 7C14 7.88 13.64 8.68 13.07 9.25Z" fill="#BC2B2B"/>
                  </svg>
                }
                title="Help on order"
                texts='Information on how to check the status of an order, cancel it or change the reservation period.'
              />
              </div>
            </Link>
            
            <Link href={{ pathname: '/faq_detail', query: { id: 1 } }} >
              <div>
              <QuzItemComponent 
                icon={
                  <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 2H10L8 0H2C0.89 0 0.00999999 0.89 0.00999999 2L0 14C0 15.11 0.89 16 2 16H18C19.11 16 20 15.11 20 14V4C20 2.89 19.11 2 18 2ZM17 10H14V13H12V10H9V8H12V5H14V8H17V10Z" fill="#BC2B2B"/>
                  </svg>
                }
                title="Bonus account and Build Account"
                texts='Do you want to purchase a loan or installment plan and receive incentives from PSC ? '
              />
              </div>
            </Link>
            
            <Link href={{ pathname: '/faq_detail', query: { id: 1 } }} >
              <div>
              <QuzItemComponent 
                icon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.17 5.70001L1 10.48V21H6V13H10V21H15V10.25L8.17 5.70001Z" fill="#BC2B2B"/>
                    <path d="M10 3V4.51L12 5.84L13.73 7H15V7.85L17 9.19V11H19V13H17V15H19V17H17V21H23V3H10ZM19 9H17V7H19V9Z" fill="#BC2B2B"/>
                  </svg>
                }
                title="Website and personal account"
                texts='Information about registering on the site, using your personal account and site functionality'
              />
              </div>
            </Link>
            
            <Link href={{ pathname: '/faq_detail', query: { id: 1 } }} >
              <div>
              <QuzItemComponent 
                icon={
                  <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 0L0 4V10C0 15.55 3.84 20.74 9 22C14.16 20.74 18 15.55 18 10V4L9 0ZM9 10.99H16C15.47 15.11 12.72 18.78 9 19.93V11H2V5.3L9 2.19V10.99Z" fill="#BC2B2B"/>
                  </svg>
                }
                title="Warranty and return of goods"
                texts="Need help with an item you've already purchased? Useful information here"
              />
              </div>
            </Link>
            
            <Link href={{ pathname: '/faq_detail', query: { id: 1 } }} >
              <div>
              <QuzItemComponent 
                icon={
                  <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 12H20V14H0V12ZM11.84 2.79C11.94 2.55 12 2.28 12 2C12 0.9 11.1 0 10 0C8.9 0 8 0.9 8 2C8 2.28 8.06 2.55 8.16 2.79C4.25 3.6 1.27 6.93 1 11H19C18.73 6.93 15.75 3.6 11.84 2.79Z" fill="#BC2B2B"/>
                  </svg>
                }
                title="Services"
                texts='Services that our company includes'
              />
              </div>
            </Link>            
          </div>
        </div>
        <div className='container'>   
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
