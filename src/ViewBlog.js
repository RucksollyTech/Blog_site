import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import MyData from './MyData'

const ViewBlog = () => {
    const {id} = useParams()
    const serverUrl = "/Images/"

    // console.log(ids, "ids")
    // console.log(id, "id")
    // const obj = {
    //     faith : "Ineye",
    //     Tony : "Rucksolly"
    // }
    // const {faith} =obj
    // console.log(obj.faith,"From Obj.faith")
    // console.log(obj)

    // console.log(faith,"From destructure")

    const rawData = MyData()

    const [data,setData] = useState( rawData ? rawData.find(data=>(`${data.id}` === id)) : {} )
    
    
    return (
        <div className='standardWidth'>
            {/* {loading && <Loader /> } */}
            {data && 
                <div className='aboutContainer'>
                    <div className="my_4 bold7 font_28">
                        {data.blogTitle}
                    </div>
                    <div className='bloggerInfoContainer bl'>
                        <Link to={"/profile"}>
                            <img src={`${serverUrl}${data.userImage}`} alt={`${data.name} Profile Image`} />
                        </Link>
                        <Link to={"/profile"} className='text-dark'>
                            <span>
                                {data.name}
                            </span>
                        </Link>
                    </div>
                    <p className='pt_3'>
                        {data.blog}
                    </p>
                </div>
            }
        </div>
    )
}

export default ViewBlog