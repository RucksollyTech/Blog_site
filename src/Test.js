import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Test = () => {
    const [data,setData] =useState()

    
    async function getData(){
        try {
            const response = await axios.get('https://rucksolly.pythonanywhere.com/api/blogs');
            setData(response.data)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(()=>{
        getData()
    },[])
    
    return (
        <div className='standardWidth'>
            {data && data.map((info)=>(
                <div key={info.id} className='border-bottom mb-3 p-2'>
                    <h2>{info.user.user}</h2>
                    <p>
                        About : {info.user.about}
                    </p>
                    <p>
                        Email: {info.user.email}
                    </p>
                    <div className="pt-2">
                        Blog Title : {info.title}
                    </div>
                    <div className="pt-3">
                        <h4>
                            My profile picture
                        </h4>
                        <img src={`https://rucksolly.pythonanywhere.com${info.user.image}`} alt={info.user.user} />
                    </div>
                </div>
            ))
        }
        </div>
    )
}

export default Test