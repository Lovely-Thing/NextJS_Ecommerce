import Link from "next/link"
import ImgComponent from "./ImgComponent"
import styled from 'styled-components'



export default function ProductItemComponent(props: any) {

    const hardmark     = '../img/icon/heart.svg'
    const wavemark     = '../img/icon/wave.png'
    const voicemark    = '../img/icon/voice.png'

    return( 
        <Link href="/" passHref> 
            <ProductItem hard_mark={props.hard_mark} wave_mark={props.wave_mark}>
                <div className="p_item_top">
                    <ImgComponent 
                        src={props.product_img}
                        alt="product"  
                    />
                    <div className='p_hard'>
                        <ImgComponent 
                            src={hardmark}
                            alt="hard_mark" 
                        />
                    </div>
                    <div className='wave_voice'>                        
                        <ImgComponent 
                            src={wavemark}
                            alt="hard_mark" 
                        />                         
                        <ImgComponent 
                            src={voicemark}
                            alt="hard_mark" 
                        /> 
                    </div>
                </div>
                <div className="p_item_bottom">
                    <h3>
                        {props.productName}
                    </h3>
                    <div className="price_div">
                        <label className={props.priceClassName}>{props.price}</label>
                        <label>/{props.unit}</label>
                    </div>
                </div>
            </ProductItem>
        </Link>   
    )
}
 
interface StyleProps {
  hard_mark?: boolean;
  wave_mark?: boolean;
} 


const ProductItem = styled.div<StyleProps>`
cursor: pointer;
transition: ease 0.3s;
background: var(--color_FFF); 
box-shadow: 0px 4px 8px rgba(121, 135, 148, 0.1);
border-radius: 4px;
height: 100% !important;
padding: 15px;
.p_item_top {
  position: relative;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  .p_hard {
    position: absolute;
    top: 6px;
    right: 5px;
    display: ${props =>props.hard_mark?`block`:`none`};
    img {
      width:auto;
    }
  } 
  .wave_voice {
    position: absolute;
    left: 5px;
    bottom: 5px;
    align-items: center;
    display: ${props =>props.wave_mark?`flex !important`:`none !important`};
    img {
      width:auto;
    }
    div{
      background: var(--color_FFF);
      border: 0.5px solid $color_F8F;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
      border-radius: 50%;
      width: 23px;
      height: 23px;
      display: flex;
      align-items: center;
      justify-content: center;
      &:last-of-type {
        margin-left: 8px;
      }
    }
  }

  .wave_voice.show {
    display: flex !important;
  }

}

.p_item_bottom {
  margin-top: 10px;
  min-height: 77px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  h3{
    font-style: normal;
    font-weight: 700;
    font-size: $size_16;
    line-height: $heigh_21;
    letter-spacing: 0.44px;
    text-transform: capitalize;
    color: $color_1E2;
    flex: 1 0 auto;
    cursor: pointer;
  }
  .price_div {
    flex: 0 0 auto;
    &>label:first-of-type {
      font-style: normal;
      font-weight: 600;
      font-size: $size_16;
      line-height: $heigh_19;
      letter-spacing: 0.2px;
      color: $color_BC2;
      cursor: pointer;
    }

    &>label:first-of-type.big {
      font-style: normal;
      font-weight: 700;
      font-size: $size_20;
      line-height: $heigh_24;
      letter-spacing: 0.2px;
      color: $color_1E2;
      cursor: pointer;
    }

    &>label:last-of-type {
      font-style: normal;
      font-weight: 400;
      font-size: $size_12;
      line-height: $heigh_23;
      letter-spacing: 0.2px;
      color: $color_7E8;
    }
  }
}
&:hover {
  box-shadow: 0px 0px 15px var(--color_484);
  transition: box-shadow ease 0.3s;
} 
`