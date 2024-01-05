import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Blogs from './Blogs'

import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

const Home = () => {
    
    const [data, setData] = useState([]);

    const Mydata = async ()=>{
        try {
            const {data} = await axios.get('https://rucksolly.pythonanywhere.com/api/blogs');
            
            setData(data)
        } catch (error) {
            console.error(error);
        }
    }


    useEffect(() => {
        Mydata();
    },[])







    const [lgShow, setLgShow] = useState(false);
    
    const [isLoggedIn, setIsLoggedIn] = useState(true)
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
                            <button 
                                className='text-muted font_12 bold8'
                                onClick={()=>setLgShow(!lgShow)}
                            >
                                Write blog
                            </button>
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
            {data && data.length > 0 && <Blogs dataFromServer={data} info={"The information"}/>}
            {/* <Test datas= {MyTestData} /> */}
            <div className="mt_3">
                <Link to={"/all_blogs"} className='text-danger bold6 font_20'>
                    View all...
                </Link>
            </div>



            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        {isLoggedIn ? "Write a blog" : "Please log in"}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    { !isLoggedIn && 
                        <div className="loginImg">
                            <img src="/Images/login.gif" alt="Login gif" />
                        </div>
                    }
                    {
                        isLoggedIn &&
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicAbout">
                                <textarea className='form-control' cols="30" rows="2" placeholder="Write blog"></textarea>
                            </Form.Group>
                            <div>
                                <button className='btn btn-primary'>
                                    Post
                                </button>
                            </div>
                        </Form>
                    }
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Home



