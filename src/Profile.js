import React from 'react'
import { Link } from 'react-router-dom'


const Profile = () => {
  return (
    <div className='standardWidth'>
        <div className='aboutContainer'>
            <div className="my_4 bold7 font_28">
                Bloggers Name
            </div>
            <div className='pb_1'>
                <span className="bold6">
                    Date joined :
                </span>
                <span className='text-muted pl_2'>
                    12-12-2023
                </span>
            </div>
            <Link to={"/all_blogs"} className='btn btn-sm btn-primary'>
                View blogs by User
            </Link>
            <div className="profileContainer">
                <div>
                    <img src="/Images/mmm.jpg" alt="User name" className='rounded' />
                </div>
                <div>
                    <div className='bold6 font_20'>
                        About
                    </div>
                    <p className="pt2 font_14">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi esse rem nulla libero consequatur recusandae atque ipsam, maxime expedita quam?
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile