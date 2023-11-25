import React from 'react'
import { Link } from 'react-router-dom'

const ViewBlog = () => {
  return (
    <div className='standardWidth'>
        
        <div className='aboutContainer'>
            <div className="my_4 bold7 font_28">
                Blog Title
            </div>
            <div className='bloggerInfoContainer bl'>
                <Link to={"/profile"}>
                    <img src="/Images/mmm.jpg" alt="" />
                </Link>
                <Link to={"/profile"} className='text-dark'>
                    <span>
                        Name of blogger
                    </span>
                </Link>
            </div>
            <p className='pt_3'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aut inventore consectetur laborum eaque velit reprehenderit facere quam quae animi quibusdam molestiae, modi incidunt, doloribus labore quod. Blanditiis veritatis libero velit, id adipisci soluta molestias numquam sunt est iusto porro, quis quod odio atque rem, accusantium aliquid officia unde! Repellendus nesciunt illo id, dolorem incidunt praesentium perspiciatis reprehenderit laboriosam soluta odio facilis. Magni labore est enim, quidem veniam vel iure error, esse iste accusantium incidunt earum voluptates! Commodi iste officia dicta cumque, rem blanditiis quis placeat quidem nesciunt excepturi aperiam doloribus sed, maiores debitis, est itaque impedit. Quis, accusantium at?
            </p>
        </div>
    </div>
  )
}

export default ViewBlog