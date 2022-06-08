/* eslint-disable @next/next/no-img-element */ 
import styled from "styled-components" 
import CardForAddDeliveryAddress from "./CardForAddDeliveryAddress"
import CardForAddProject from "./CardForAddProject"
import CardForAuth from "./CardForAuth"


export default function CheckoutSideBarForAuthComponent(props:any) {
    return(
        <Component>
            <div>
                <CardForAuth/>
            </div>
            <div>
                <CardForAddProject/>
            </div>
            <div>
                <CardForAddDeliveryAddress />
            </div>
        </Component>
    )
}

const Component = styled.div` 
&>div {
    margin-bottom: 10px;
}
`