import Link from "next/link"
import styled from "styled-components"
import ImgComponent from "./ImgComponent"

const facebook_icon = '../img/icon/facebook.svg'
const twitter_icon = '../img/icon/twitter.svg'
const instagram_icon = '../img/icon/instagram.svg'
const linkedin_icon = '../img/icon/linkedin.svg'


export default function Footer() {

    return(
        <Component>
            <div className="container">
                <div className="footer_container">
                    <div className="left">
                        <label htmlFor="">© 2022 PSC All right reserved.</label>
                    </div>
                    <div className="right">
                        <div>
                            <Link href="/" passHref> 
                                <div>
                                    <ImgComponent
                                        src={facebook_icon}
                                        alt='Facebook'
                                        />
                                </div>
                            </Link>
                        </div> 
                        <div>
                            <Link href="/" passHref> 
                                <div>
                                    <ImgComponent
                                        src={linkedin_icon}
                                        alt='googleplay_icon'
                                        />
                                </div>
                            </Link> 
                        </div>
                        <div>
                            <Link href="/" passHref> 
                                <div>
                                    <ImgComponent
                                        src={instagram_icon}
                                        alt='instagram_icon'
                                        />
                                </div>
                            </Link> 
                        </div>
                        <div>
                            <Link href="/" passHref> 
                                <div>
                                    <ImgComponent
                                        src={twitter_icon}
                                        alt='twitter_icon'
                                        />
                                </div>
                            </Link> 
                        </div>
                    </div>
                </div>
            </div>
        </Component>
    )
}


const Component = styled.footer`
    margin-top: 60px;
    background: linear-gradient(0deg, rgba(5, 34, 186, 0.02), rgba(5, 34, 186, 0.02)), #2B2B2B;
    .footer_container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 35px 0;
        .left{
            label {
                font-family: var(--font_poppins);
                font-style: normal;
                font-weight: 400;
                font-size: var(--size_15);
                line-height: var(--heigh_24);  
                letter-spacing: -0.0033em;  
                color: var(--color_A7A);
            }
        }
        .right {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            &>div {
                cursor: pointer;
                margin-left: 15px;
            }
        }
    }
`