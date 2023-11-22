import React from 'react'
import AppName from './AppName'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='standardWidth'>
            <div className="footerWrapper">
                <AppName />
                <div className='flex justifier'>
                    <Link to={"/"} className='bold6'>
                        All blog
                    </Link>
                    <Link to={"/"} className='bold6'>
                        FAQs
                    </Link>
                    <Link to={"/"} className='bold6'>
                        About
                    </Link>
                    <Link to={"/"} className='bold6'>
                        Support
                    </Link>
                </div>
                <div className='flex'>
                    <div className="left_auto flex justifier">
                        <img width="25" height="25" src="https://img.icons8.com/ios/25/instagram-new--v1.png" alt="instagram-new--v1"/>
                        <img width="25" height="25" src="https://img.icons8.com/ios/25/twitter--v1.png" alt="twitter--v1"/>
                        <img width="25" height="25" src="https://img.icons8.com/small/25/facebook-new.png" alt="facebook-new"/>
                        <img width="25" height="25" src="https://img.icons8.com/ios/25/pinterest--v1.png" alt="pinterest--v1"/>
                    </div>
                </div>
            </div>
            <div className="py_2">
                <span className='text-muted pr_2 bold6 font_14'>
                    © 2023 Dribbble
                </span>
                <Link to={"/"} className='text-muted pr_2 bold6 font_14'>
                    Terms
                </Link>
                <Link to={"/"} className='text-muted bold6 font_14'>
                    Privacy
                </Link>
            </div>
        </div>
    )
}

export default Footer