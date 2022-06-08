/* eslint-disable @next/next/no-img-element */ 
import { useState } from "react";
import styled from "styled-components" 
import CategorySidebarItem from "./CategorySidebarItem";



export default function CategorySidebar(props:any) { 
    let data01 = [
        {
            'main_title':'Categories',
            'count':123,
            'submenu':[
                {
                    'title': 'All',                    
                },
                {
                    'title': 'Repair/Protection Concrete',                    
                },
                {
                    'title': 'Masonry Products',                    
                },
                {
                    'title': 'Injection',                    
                },
                {
                    'title': 'Anchors',                    
                },
                {
                    'title': 'Isolation',                    
                },
                {
                    'title': 'Flooring',                    
                },
                {
                    'title': 'Coffrage',                    
                },
                {
                    'title': 'H VAC',                    
                },
                {
                    'title': 'Caulking',                    
                },
                {
                    'title': 'Health & Security',                    
                }            
            ]
        }
    ]
   
    let data02 = [
        {
            'main_title':'Brands',
            'count':623,
            'submenu':[
                {
                    'title': 'All',                    
                },
                {
                    'title': 'Abzac',                    
                },
                {
                    'title': 'Alfa',                    
                },
                {
                    'title': 'Conmat',                    
                },
                {
                    'title': 'CV Plastique',                    
                },
                {
                    'title': 'Dayton superior Canada',                    
                },
                {
                    'title': 'Euclid',                    
                },
                {
                    'title': 'Lyva',                    
                },
                {
                    'title': 'Syka',                    
                },
                {
                    'title': 'Stopo',                    
                },
                {
                    'title': 'Marshalltown',                    
                }            
            ]
        }
    ]

    let data03 = [
        {
            'main_title':'Price',
            'count':undefined,
            'submenu':[
                {
                    'title': 'All',                    
                },
                {
                    'title': 'Abzac',                    
                },
                {
                    'title': 'Alfa',                    
                },
                {
                    'title': 'Conmat',                    
                },
                {
                    'title': 'CV Plastique',                    
                },
                {
                    'title': 'Dayton superior Canada',                    
                },
                {
                    'title': 'Euclid',                    
                },
                {
                    'title': 'Lyva',                    
                },
                {
                    'title': 'Syka',                    
                },
                {
                    'title': 'Stopo',                    
                },
                {
                    'title': 'Marshalltown',                    
                }            
            ]
        }
    ]
    return(
        <Component>              
            <CategorySidebarItem data={data01}/>
            <CategorySidebarItem data={data02}/>             
            <CategorySidebarItem data={data03}/>             
        </Component>
    )
}

const Component = styled.div` 
    background: #FFFFFF;
    border: 1px solid #F4F4F4;
    border-radius: 4px;
    padding: 20px; 
    padding-bottom: 1px;
    &>div:last-of-type {
        border-bottom: none;
    }
    &>div:first-of-type {
        margin-top: 0;
    }    
`