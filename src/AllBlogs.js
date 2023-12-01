import React from 'react'
import Blogs from './Blogs'
import MyData from './MyData';

const AllBlogs = () => {
    const data = MyData()
    return (
        <div className='standardWidth'>
            <Blogs dataFromServer={data} info={"The information"}/>
        </div>
    )
}

export default AllBlogs
