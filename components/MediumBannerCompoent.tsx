import { Image } from 'antd'
import styled from 'styled-components';
import { media } from '../utils/styleHelper';




export default function MediumBannerCompoent() {
    const medium_baner = '../img/medium_logo.svg'

    return(
        <MediumBanner>
            <div className='logo_title'>
                <div className='img_wrap'>
                    <Image
                        preview={false}
                        src={medium_baner}
                        alt='logo'
                    />
                </div>
                <p>More than 200 Products For your building</p>
            </div>
            <h3>Our Biggest Bath Event of the Year </h3>
            <h2>$50.00</h2>
        </MediumBanner>
    )
}

const MediumBanner = styled.div`
background: 
linear-gradient(86.07deg, rgba(32, 32, 32, 0.83) 15.29%, rgba(35, 34, 34, 0.3486) 94.51%), 
url('../img/top/medium_banner.png') center no-repeat;
background-size: cover;
border-radius: 8px;
padding: 25px 50px 45px;
.logo_title {
    display: flex;
    align-items: center;
    p{
      font-family: var(--font_altone_nomal);
      font-style: normal;
      font-weight: 400;
      font-size: var(--size_16);
      line-height: var(--heigh_22);  
      letter-spacing: 0.3px;
      color: var(--color_FFF);
      margin-bottom: 0;
      margin-left: 17px;
      padding-left: 10px;
      border-left: solid 1px var(--color_FFF);
      height: 23px;
      display: flex;
      align-items: center;
      margin-bottom: 1px;
    }
  }

  h3 {
    font-style: normal;
    font-weight: 600;
    font-size: var(--size_24);
    line-height: var(--heigh_36); 
    letter-spacing: 0.2px;
    text-transform: capitalize; 
    color: var(--color_FFF);
    margin-top: 48px;
    margin-bottom: 8px;
  }
  h2 {
    font-style: normal;
    font-weight: 500;
    font-size: var(--size_28);
    line-height: var(--heigh_40); 
    letter-spacing: 0.44px;
    text-transform: capitalize; 
    color: var(--color_FFF);
    margin-bottom: 0;
  }
`