import Link from "next/link" 
import styled from 'styled-components';
import { media } from '../utils/styleHelper';

export default function CategoryComponent() {
    const categories = [
        {
            id:1,
            name:'Concrete products',
            url:'/'
        },
        {
            id:2,
            name:'Masonry products',
            url:'/'
        },
        {
            id:3,
            name:'Sealing and coatings',
            url:'/'
        },
        {
            id:4,
            name:'Insulation products',
            url:'/'
        },
        {
            id:5,
            name:'Steel and rebal',
            url:'/'
        }
        ,
        {
            id:6,
            name:'Formwork',
            url:'/'
        }

    ]

    return( 
        <Category>
            <ul>
                {
                    categories.map((cat, id)=> {
                        return(
                            <li key={id}>
                                <Link href={cat.url} passHref> 
                                    {cat.name}
                                </Link> 
                            </li>
                        )
                    })
                } 
            </ul>
        </Category> 
    )
}


const Category = styled.div`
ul {
    padding-left: 0;
    margin-left: -5px;
    li {
      margin-top: 15px;
      padding-left: 5px;
      border-radius: 3px;
      &:first-of-type {
        margin-top: 0;
      }
      a {
        font-style: normal;
        font-weight: 600;
        font-size: var(--size_16);
        line-height: var(--heigh_28);
        color: var(--color_696);
        letter-spacing: 0.15px;
      }
      &:hover {
        box-shadow: 3px 2px 10px rgb(194, 194, 194);        
      }
    }
  }
`