import { Button, Tabs } from 'antd'; 
import { useState } from 'react';
import MetaComponent from '../components/MetaComponent';
import HeaderComponent from '../components/HeaderComponent'    
import BottomBannerComponent from '../components/BottomBannerComponent';
import FooterMenuComponent from '../components/FooterMenuComponent';
import FooterCompoent from '../components/FooterCompoent';
import ImgComponent from '../components/ImgComponent';
import ProfileSidebarComponent from '../components/ProfileSidebarComponent'; 
import ManagerTabContent from '../components/ManagerTabContent';
import DeliveryCompletedTabContent from '../components/DeliveryCompletedTabContent';
import DeliveryActiveTabContent from '../components/DeliveryActiveTabContent';

import { bottom_menu01, bottom_menu02, bottom_menu03, bottom_menu04 } from '../utils/bottomMenuHelper' 
const plus_icon = '../img/icon/plus_red.svg' 

const { TabPane } = Tabs; 

export default function Profile() { 
 
  const [tab, setTab] = useState(1)
  const [delivery_subtab, setDelivery_subtab] = useState('active')
 
   
  return (
    <div>
      <MetaComponent/>
      <HeaderComponent/>
      <main>  
        <div className='profile_tabs mb_60'> 
            <Tabs defaultActiveKey="1">
              <TabPane tab="My account" key="1">
                <div className='profile_tab_content mt_60'> 
                  <ProfileSidebarComponent tab={setTab}/> 
                  <div className='sub_tabs_container'>
                    <div className={'subTab ' + (tab == 1?'active':'')}>
                      <div className='manager_tab_header'>
                        <h2>Manager</h2>
                        <Button icon={<ImgComponent src={plus_icon} alt="plus"/>}>Add Manager</Button>
                      </div>
                      <ManagerTabContent/>
                    </div>
                    <div className={'subTab ' + (tab == 2?'active':'')}>
                        <h1>Saved Address</h1>
                    </div>
                    <div className={'subTab ' + (tab == 3?'active':'')}>
                        <h1>Payment Method</h1>
                    </div>
                    <div className={'subTab ' + (tab == 4?'active':'')}>
                        <h1>Profile Settings</h1>
                    </div>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="Delivers" key="2">
                <div className='delivery_tab_content'>
                  <div className='segmentTabButtons'>
                    <button 
                      onClick={(e)=>setDelivery_subtab('active')} 
                      className={""+(delivery_subtab === 'active'?'active':'')}>
                        Active
                    </button>
                    <button 
                      onClick={(e)=>setDelivery_subtab('complete')}
                      className={""+(delivery_subtab === 'complete'?'active':'')}>
                        Completed
                    </button>
                  </div> 
                  <div className={'delivery_subtab' + (delivery_subtab==='active'?' active':'')}>
                    <div className='active_order_item_row'>
                      <DeliveryActiveTabContent/>
                    </div>
                    <div className='active_order_item_row'>
                      <DeliveryActiveTabContent/>
                    </div>
                    <div className='active_order_item_row'>
                      <DeliveryActiveTabContent/>
                    </div>
                    <div className='active_order_item_row'>
                      <DeliveryActiveTabContent/>
                    </div>
                  </div>  
                  <div className={'delivery_subtab' + (delivery_subtab==='complete'?' active':'')}>
                    <DeliveryCompletedTabContent/>
                  </div>                
                </div>
              </TabPane>
              <TabPane tab="Projects" key="3">
                Content of Tab Pane 3
              </TabPane>
            </Tabs>  
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
