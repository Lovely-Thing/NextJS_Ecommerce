import { Image } from 'antd'
import Link from 'next/link'
import styled from 'styled-components' 

export default function BottomBannerComponent() {

    const googleStore = '../img/icon/googleplay.svg'
    const appStore = '../img/icon/appstore.svg'
    
    return( 
        <BottomBanner>  
            <h1>Download our app now on Google Play and Apple Store</h1>
            <div className='external_links'>
                <div>
                    <Link href={''}>
                        <>
                        <Image
                            src={googleStore}
                            preview={false}
                            alt="googleStore"
                        />
                        </>
                    </Link>
                </div>
                <div>
                    <Link href={''}>
                        <>
                            <Image 
                                preview={false}
                                src={appStore}
                                alt="appStore"
                            />
                        </>
                    </Link>
                </div>
            </div> 
        </BottomBanner> 
    )
}

const BottomBanner = styled.div`
    border-radius: 8px;
    background: url('../img/top/bottom.png') center no-repeat;
    background-size: cover;
    padding: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .external_links {
        margin-top: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        &>div:first-of-type {
            margin-right: 18px;
        }
        &>div {
            cursor: pointer;
        }
    }
    h1 {
        font-style: normal;
        font-weight: 600;
        font-size: var(--size_24);
        line-height: var(--heigh_36);  
        text-align: center;
        letter-spacing: 0.2px;
        color: var(--color_FFF);  
    }
`