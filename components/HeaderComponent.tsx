import Link from "next/link" 
import { Menu, Dropdown, Button, Image} from 'antd';

import Logo from "./LogoComponent"  
import LocationInput from "./LocationInputComponent" 
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import AuthModal from "./AuthModal";

const triang_icon  = '../img/icon/tagle.svg'
const sort_icon    = '../img/icon/sort.svg'
const search_icon  = '../img/icon/search.svg'
const heart_icon   = '../img/icon/heart_origin.svg'
const cart_icon    = '../img/icon/cart.svg'
const user_icon    = '../img/icon/user.png'

 
const menu =( 
    <Menu
        items={[
        {
            label: (
             <Link href=''>Menu 1</Link>
            ),
        } as any,
        {
            label: (
                <Link href=''>Menu 2</Link>
            ),
        },
        {
            label: (
                <Link href=''>Menu 3</Link>
            ),
        },
        ]}
    />
  ); 

export default function Header() {
    const {
        user, 
        setUser,
        isAuthModalVisible,
        setIsAuthModalVisible
    } = useContext(AppContext)  
    
    return(
        <>
            <header>
                <div className="h_top">
                    <div className="container">
                        <div className="header_top">
                            <div className="topbar_left">
                                <Logo />
                                <div className="ml_50">
                                    <LocationInput />
                                </div>
                                <div className="select_store">
                                    <Link href="/" passHref>Select Store</Link>
                                </div>                            
                            </div>
                            <nav className="topbar_right">
                                <li className="menu_item">
                                    <Link href='/'>Delivery</Link>
                                </li>
                                <li className="menu_item">
                                    <Link href='/'>Help</Link>
                                </li> 
                                <li className="menu_item">
                                    <Dropdown overlay={menu} placement="bottom" arrow={{ pointAtCenter: true }}>
                                        <div className="submenu_container">
                                            <div>CAD</div>
                                            <div className="img_wrap">
                                                <Image preview={false} src={triang_icon} alt="triangle"/>
                                            </div>
                                        </div> 
                                    </Dropdown>
                                </li>
                                <li className="menu_item">
                                    <Dropdown overlay={menu} placement="bottom" arrow={{ pointAtCenter: true }}>
                                        <div className="submenu_container">
                                            <div>Eng</div>
                                            <div className="img_wrap">
                                                <Image preview={false} src={triang_icon} alt="triangle"/>
                                            </div>
                                        </div>
                                    </Dropdown>
                                </li>
                            </nav>
                        </div>
                    </div> 
                </div>   
                <div className="h_bot">
                    <div className="container">
                        <div className="header_bottom">
                            <div className="header_bottom_left">
                                <Button icon={<Image preview={false} src={sort_icon} alt="sort"/>}>Catalogue</Button>
                            </div>
                            <div className="header_bottom_right">
                                <nav className="icon_group">
                                    <li>
                                        <div className="img_wrap">
                                            <Image preview={false} src={search_icon} alt="search"/>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="img_wrap">
                                            <Image preview={false} src={heart_icon} alt="heart"/>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="img_wrap">
                                            <Image preview={false} src={cart_icon} alt="cart"/>
                                        </div>
                                    </li>
                                </nav>
                                <div className="login_btn" onClick={()=>setIsAuthModalVisible(true)}>
                                    <label>Login In</label>
                                    <div className="img_wrap">
                                        <Image preview={false} src={user_icon} alt="user"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>         
            </header>
            <AuthModal />
        </>
    )
}