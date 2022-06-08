import styled from "styled-components";

const SectionTitle = styled.div`
display: flex;
align-items: center;
h2 {
  font-style: normal;
  font-weight: 600;
  font-size: var(--size_24);
  line-height: var(--heigh_36);
  letter-spacing: 0.2px;
  text-transform: capitalize;
  color: $color_000;
  margin-bottom: 0;
}
.num_mark {
  background: var(--color_F2F);
  border-radius: 16px;
  padding: 4px 13px;
  font-style: normal;
  font-weight: 400;
  font-size: var(--size_10);
  line-height: var(--heigh_14);
  margin-left: 8px;
}
`

export default function SectionTitleComponent(props: any) {

    let renderHTML;
    if(props.num) {
        renderHTML = <SectionTitle>
                        <h2>{props.title}</h2>
                        <div className="num_mark">{props.num}</div>
                    </SectionTitle>
    }
    else{
        renderHTML = <SectionTitle>
                        <h2>{props.title}</h2>
                    </SectionTitle>
        
    }
    
    return(
        <div>
             {renderHTML}
        </div>
    )
}

