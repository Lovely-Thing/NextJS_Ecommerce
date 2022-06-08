import { Image } from 'antd'
import styled from 'styled-components';
import { media } from '../utils/styleHelper';
import CustomButtonComponent from './CustomButtonComponent';
import ImgComponent from './ImgComponent';




export default function MediumBannerCompoentAfterLocation() {
    const medium_baner = '../img/top/medium_banner01.png'

    return(
        <MediumBanner> 
          <div className='banner_left'>
            <h2>Produit hydrofuge à <br />base de silane </h2>
            <p>high performance</p>
            <CustomButtonComponent dataname={undefined} buttonText={'Show More'} even={undefined} />
          </div>
          <div className='deco_img'>
            <ImgComponent src={medium_baner} alt='image'/>
          </div>
        </MediumBanner>
    )
}

const MediumBanner = styled.div`
position: relative;
background: #6B89C9;  
border-radius: 8px;
display: flex;
align-items: center;
justify-content: space-between;
.banner_left {
  padding-left: 100px;
}
.deco_img { 
  padding-right: 15px;
}
button {
  width: 124px;
  height: 40px;
  margin-top: 29px;
}
h2 {
  font-style: italic;
  font-weight: 800;
  font-size: 36px;
  line-height: 44px;
  display: flex;
  align-items: center;
  text-transform: capitalize; 
  color: #FFFFFF;
  margin-bottom: 0;
}
p {
  font-style: italic;
  font-weight: 400;
  font-size: 36px;
  line-height: 44px;
  display: flex;
  align-items: center;
  text-transform: capitalize; 
  color: #FFFFFF;
  margin-bottom: 0;
}
`