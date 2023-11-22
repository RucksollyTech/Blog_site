import React from 'react'
import { Link } from 'react-router-dom'
import Blogs from './Blogs'

const Home = () => {
  return (
    <div className='standardWidth pt_4'>
        <h1>
            Blog
        </h1>
        <p>
            Explore Blog from everyone around the globe.
        </p>
        <div className="searchSection">
            <div>
                <div className='searchBox'>
                    <img width="20" height="20" src="https://img.icons8.com/ios/20/search--v1.png" alt="search--v1"/>
                    <input type="text" />
                </div>
            </div>
            <div className='flex'>
                <div className='left_auto sideBarContainer'>
                    <span className='font_12 bold8'>
                        <Link to={"/"} className='text-muted'>Home</Link>
                    </span>
                    <span className='font_12 bold8'>
                        <Link to={"/all_blogs"} className='text-muted'>All blogs</Link>
                    </span>
                    <span className='font_12 bold8'>
                        <Link to={"/about"} className='text-muted'>About</Link>
                    </span>
                </div>
            </div>
        </div>

        <Blogs />
        <div className="mt_3">
            <Link to={"/all_blogs"} className='text-danger bold6 font_20'>
                View all...
            </Link>
        </div>
    </div>
  )
}

export default Home



