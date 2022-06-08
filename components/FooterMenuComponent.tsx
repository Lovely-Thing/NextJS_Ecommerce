import Link from "next/link"
import { Key } from "react"
import styled from "styled-components" 

export default function FooterMenuComponent(props:any) {
    return(
        <Comment>
            <h3>{props.menu_title}</h3>
            <ul>
                {
                    props.data.map((menu_item: { link: string ; link_name: string }, id: Key)=> {
                        return(
                            <li key={id}>
                                <Link href={menu_item.link}>{menu_item.link_name}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </Comment>
    )
}

const Comment = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: var(--size_18);
    line-height: var(--heigh_26); 
    letter-spacing: 0.1px; 
    color: var(--color_333);
    margin-bottom: 22px;
    width: 100%;
    h3 {
        font-style: normal;
        font-weight: 600;
        font-size: var(--size_18);
        line-height: var(--heigh_26);
        letter-spacing: 0.1px;
        color: var(--color_333);
    }
    ul {
        font-style: normal;
        font-weight: 400;
        font-size: var(--size_16);
        line-height: var(--heigh_22);
        letter-spacing: 0.1px;
        color: var(--color_333);
        padding-left: 0;
        margin-top: 22px;
        li {
            margin-bottom:10px;
        }
    }
`