import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <p>Hello my react APP</p>
        <small>Starting a new project</small>
        <p>
            <Link to={"/about"} className='btn btn-sm btn-info text-white'>
                View the about page
            </Link>
        </p>
        <p>
            <Link to={"/all_blogs"} className='BlogBtn'>
                View all blogs
            </Link>
        </p>
    </div>
  )
}

export default Home



