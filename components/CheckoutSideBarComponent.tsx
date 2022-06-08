/* eslint-disable @next/next/no-img-element */ 
import styled from "styled-components"
import StepCardComponent from "./StepCardComponent"


export default function CheckoutSideBarComponent(props:any) {
    return(
        <Component>
            <div>
                <StepCardComponent
                    cardnumber = "step1"
                    cardtitle  = "Personal Details" 
                    cardChild  = {
                        <>
                            <div className="carditem">
                                <label htmlFor="">Name</label>
                                <p>Milla Pattinson</p>
                            </div>
                            <div className="two_col">
                                <div className="carditem">
                                    <label htmlFor="">Phone Number</label>
                                    <p>+380634601259</p>
                                </div>
                                <div className="carditem ml_20">
                                    <label htmlFor="">Company</label>
                                    <p>Brokrete</p>
                                </div>
                            </div>
                            <div className="carditem">
                                <label htmlFor="">Email</label>
                                <p>pattinson@brokrete.com</p>
                            </div>
                        </>
                    }
                />
            </div>
            <div>
                <StepCardComponent
                    cardnumber = "step2"
                    cardtitle  = "Your Project" 
                    cardChild  = {
                        <>
                             <div className="arounded_info triangle">
                                <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.04167 0C2.09409 0 0.5 1.46771 0.5 3.26087V11.7391C0.500209 11.7608 0.501594 11.7825 0.50415 11.8041C0.542445 13.5673 2.11789 15 4.04167 15H16.7917C17.1829 15 17.5 14.708 17.5 14.3478V2.6087C17.5 2.24852 17.1829 1.95656 16.7917 1.95652H4.75V0.652174C4.74996 0.292003 4.43285 0 4.04167 0ZM4.75 3.26087H16.0833V13.6957H4.04167C2.85982 13.6957 1.91667 12.8273 1.91667 11.7391C1.91667 10.651 2.85982 9.78261 4.04167 9.78261C4.43285 9.78257 4.74996 9.49061 4.75 9.13043V3.26087ZM11.125 4.56522L12.395 5.73454L10.4167 7.55605L8.79248 6.06063C8.51585 5.80604 8.06748 5.80604 7.79085 6.06063L6.37419 7.36498C6.18914 7.52856 6.1146 7.77146 6.17931 8.00001C6.24402 8.22856 6.43787 8.40704 6.6861 8.46662C6.93433 8.5262 7.19815 8.45757 7.37581 8.28719L8.29167 7.44395L9.91585 8.93937C10.1925 9.19396 10.6409 9.19396 10.9175 8.93937L13.3966 6.65676L14.6667 7.82609V4.56522H11.125ZM6.875 10.4348C6.61955 10.4315 6.38194 10.555 6.25316 10.7582C6.12438 10.9613 6.12438 11.2126 6.25316 11.4157C6.38194 11.6189 6.61955 11.7425 6.875 11.7391H13.9583C14.2138 11.7425 14.4514 11.6189 14.5802 11.4157C14.7089 11.2126 14.7089 10.9613 14.5802 10.7582C14.4514 10.555 14.2138 10.4315 13.9583 10.4348H6.875Z" fill="#3A4B6D"/>
                                </svg>
                                <div className="description">
                                    <h5>Toronto Stadium</h5>
                                    <p>Toronto, 333 Dension Street..</p>
                                </div>
                             </div>
                        </>
                    }
                />
            </div>
            <div>
                <StepCardComponent
                    cardnumber = "step3"
                    cardtitle  = "Delivery address" 
                    cardChild  = {
                        <>
                            <p className="card_description">
                            The address you enter will be used to deliver
                            </p>
                             <div className="arounded_info triangle">
                                <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7 0C3.13 0 0 3.13 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 3.13 10.87 0 7 0ZM7 9.5C5.62 9.5 4.5 8.38 4.5 7C4.5 5.62 5.62 4.5 7 4.5C8.38 4.5 9.5 5.62 9.5 7C9.5 8.38 8.38 9.5 7 9.5Z" fill="#3A4B6D"/>
                                </svg>
                                <div className="description"> 
                                    <p>Toronto, 333 Dension Street, Unit 21, 49000</p>
                                </div>
                             </div>
                        </>
                    }
                />
            </div>
        </Component>
    )
}

const Component = styled.div` 
&>div {
    margin-bottom: 10px;
}
`