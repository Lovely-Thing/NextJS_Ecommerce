/* eslint-disable @next/next/no-img-element */ 
import styled from "styled-components"
import BodyText01 from "./BodyText01"
import CheckoutLists from "./CheckoutLists"
import CustomButtonComponent from "./CustomButtonComponent"
import H2component from "./H2component"
import H3component from "./H3component"
import H4component from "./H4component"
import RelatedProductLists from "./RelatedProductLists"
import SubTitle01 from "./SubTitle01"

export default function ShoppingCart(props:any) {
    return(
        <Component>
            <CheckoutLists/>
            <div className="mt_30">
                <SubTitle01 text="Related Products"/>
            </div>
            <div>
                <RelatedProductLists/>
            </div>
            <div className="mt_30 flex-csb">
                <BodyText01 text='Without VAT'/>
                <H4component text='$1400.00'/>
            </div>
            <div className="mt_20 flex-csb">
                <H3component text='Total with VAT'/>
                <H2component text='$ 13500.00'/>
            </div>
            <div className="mt_30 flex-csb two_different_btn">
                <CustomButtonComponent buttonText='Continue Shopping' dataname="" even={undefined}/>
                <CustomButtonComponent buttonText='Continue' dataname="" even={undefined}/>
            </div>
        </Component>
    )
}

 

const Component = styled.div` 
`