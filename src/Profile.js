import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import MyData from './MyData'
import DateFormater from './DateFormater'


const Profile = () => {
    const {username} = useParams()
    const serverUrl = "/Images/"

    const rawData = MyData()

    const [data,setData] = useState( rawData ? rawData.find(data=>(`${data.name}` === username)) : {} )
    
  return (
    <div className='standardWidth'>
        {data && 
            <div className='aboutContainer'>
                <div className="my_4 bold7 font_28">
                    {data.name}
                </div>
                <div className='pb_1'>
                    <span className="bold6">
                        Date joined :
                    </span>
                    <span className='text-muted pl_2'>
                        <DateFormater date={data.date} />
                    </span>
                </div>
                <Link to={"/all_blogs"} className='btn btn-sm btn-primary'>
                    View blogs by User
                </Link>
                <div className="profileContainer">
                    <div className='profileImageContainer rounded'>
                        <img src={`${serverUrl}${data.userImage}`} alt="User name" />
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
        }
    </div>
  )
}

export default Profile