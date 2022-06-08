import Link from 'next/link';
import { useState } from 'react'; 
import { useRouter } from "next/router";
import MetaComponent from '../components/MetaComponent';
import HeaderComponent from '../components/HeaderComponent'    
import BottomBannerComponent from '../components/BottomBannerComponent';
import FooterMenuComponent from '../components/FooterMenuComponent';
import FooterCompoent from '../components/FooterCompoent'; 

import { bottom_menu01, bottom_menu02, bottom_menu03, bottom_menu04 } from '../utils/bottomMenuHelper'   
import H2component from '../components/H2component';
import H3component from '../components/H3component';
import CustomButtonComponent from '../components/CustomButtonComponent';

export default function FAQ_Detail() {  
  const { query } = useRouter();
  const [faqTitle, setFaqTitle] = useState('')
  const [actvieFaq, setactvieFaq] = useState('')   
  const pid  = query.id   

  const setFaqTitleActive = (id:any, title:any) => {
    setactvieFaq(id)
    setFaqTitle(title)
  } 

  return (
    <div>
      <MetaComponent/>
      <HeaderComponent/>
      <main>   
        <div className="container" id='faq_detail'>
           <div className="faq_breads">
             <Link href={'/faq'}>Popular questions</Link>
             <Link href={'/faq_detail/?id=1'}>Payment</Link>
             {
               faqTitle !==''?
                <Link href={'#'}>{faqTitle}</Link>:<></>
             }
           </div>
           {
             faqTitle ==''?
              <div className="faq_sublists">
                <H2component text='Payment'/>
                <p className='description'>This section contains the necessary information about the available payment methods and how to use them.</p>
                <div className="lists">
                  <p className="subtitle" onClick={()=>setFaqTitleActive('1', 'Current situation regarding order processing')}>Current situation regarding order processing</p>
                  <p className="subtitle" onClick={()=>setFaqTitleActive('2', 'How to pay by card when delivered by courier to the store?')}>How to pay by card when delivered by courier to the store?</p>
                  <p className="subtitle" onClick={()=>setFaqTitleActive('3', 'How to pay for goods by bank transfer?')}>How to pay for goods by bank transfer?</p>
                  <p className="subtitle" onClick={()=>setFaqTitleActive('4', 'How to make payment in installments without cards and papers from PSC ?')}>How to make payment in installments without cards and papers from PSC ?</p>
                  <p className="subtitle" onClick={()=>setFaqTitleActive('5', 'How to buy goods on credit?')}>How to buy goods on credit?</p> 
                </div>
              </div>:
              <div className="faq_lists_content">
                <div className="faqlists">
                  <p className={"subtitle " + (actvieFaq ==="1"?'active':'')} onClick={()=>setFaqTitleActive('1', 'Current situation regarding order processing')}>Current situation regarding order processing</p>
                  <p className={"subtitle " + (actvieFaq ==="2"?'active':'')} onClick={()=>setFaqTitleActive('2', 'How to pay by card when delivered by courier to the store?')}>How to pay by card when delivered by courier to the store?</p>
                  <p className={"subtitle " + (actvieFaq ==="3"?'active':'')} onClick={()=>setFaqTitleActive('3', 'How to pay for goods by bank transfer?')}>How to pay for goods by bank transfer?</p>
                  <p className={"subtitle " + (actvieFaq ==="4"?'active':'')} onClick={()=>setFaqTitleActive('4', 'How to make payment in installments without cards and papers from PSC ?')}>How to make payment in installments without cards and papers from PSC ?</p>
                  <p className={"subtitle " + (actvieFaq ==="5"?'active':'')} onClick={()=>setFaqTitleActive('5', 'How to buy goods on credit?')}>How to buy goods on credit?</p> 
                </div>
                <div className="faq_content">
                  <H2component text={faqTitle}/>
                  <div>
                    Dear customer!

                    Due to the situation in the country, there are significant difficulties with the processing and delivery of orders.
                    Possibility of delivery is connected not only with the schedule of branches of carriers in this or that region, but also with a possibility of shipment of the goods from warehouses of shop which are located in various locations.

                    Our employees also do not always have the opportunity to get to work safely and work properly.
                    For our part, we do our best to ensure that you receive your order as soon as possible, and it can take up to several days to ship goods from the warehouse. Please understand the situation and wait for the shipment information in the message from the carrier.
                    If you can&apos;t wait, please fill out the form below.
                  </div>
                  <div className='mt_60'>
                    <H3component text='Do you still need our help?' />
                    <div className="contactbtn mt_40">
                      <Link href={''}>
                        <div>
                          <CustomButtonComponent dataname={undefined} buttonText={'Contact us'} even={undefined}/>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
           }
        </div>
        <div className='container'>   
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
