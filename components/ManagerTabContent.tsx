/* eslint-disable @next/next/no-img-element */ 
import styled from "styled-components" 
import ManagerItemComponent from './ManagerItemComponent'; 

const manger = '../img/icon/profile.png'

export default function ManagerTabContent(props:any) {
    return(
      <Component>
        <div>
          <ManagerItemComponent 
            manager_img={manger}
            alt="manger"
            mail="anastasiarubezhina@gmail.com"
            isregistered={true}
          />
        </div>
        <div>
          <ManagerItemComponent 
            manager_img={manger}
            alt="manger"
            mail="anastasiarubezhina@gmail.com"
            isregistered={false}
          />
        </div>
        <div>
          <ManagerItemComponent 
            manager_img={manger}
            alt="manger"
            mail="anastasiarubezhina@gmail.com"
            isregistered={false}
          />
        </div>
      </Component>
    )
}

const Component = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-left: -10px;
  margin-right: -10px;
  &>div {
    padding: 0 10px;
    width: 50%;
  }
`