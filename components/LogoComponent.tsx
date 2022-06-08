import Link from "next/link"
import { Image } from 'antd'
import styled from "styled-components"
 

export default function LogoComponent() {
    const logoimg = '../logo.svg' 

    return(
        <Component>
            <Link href="/" passHref>
                <div className="img_wrap">
                    <Image
                        preview={false}
                        src={logoimg}
                        alt="Logo" 
                    />
                </div>
            </Link>
        </Component>
    )
}

const Component = styled.div`
    cursor: pointer;
`