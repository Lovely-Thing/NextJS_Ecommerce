/* eslint-disable @next/next/no-img-element */ 
import styled from "styled-components"

export default function QuzItemComponent(props:any) {
    return(
        <Component>
            <div className="icon">
                {props.icon}
            </div>
            <div className="quzbody">
                <h2>{props.title}</h2>
                <p>{props.texts}</p>
            </div>
        </Component>
    )
}
 
const Component = styled.div`
display: flex;
width: 100%;
.icon {
    background: #FFFFFF;
    box-shadow: 0px 4px 12px rgba(193, 198, 215, 0.12);
    border-radius: 50%;
    width: 52px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    margin-right: 16px;
}
.quzbody {
    h2 {
      font-style: normal;
      font-weight: 600;
      font-size: var(--size_16);
      line-height: var(--heigh_28); 
      display: flex;
      align-items: center;
      letter-spacing: 0.15px;
      color: #000000;
      margin-bottom: 15px;
    }
    p {
      font-style: normal;
      font-weight: 400;
      font-size: var(--size_14);
      line-height: var(--heigh_20);
      color: #696E79;
      margin-bottom: 0;
    }
  }
`