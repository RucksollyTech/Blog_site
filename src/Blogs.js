import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';
import DateFormater from './DateFormater';

// const Blogs = (props) => {
    // access it like so
    // props.dataFromServer

const Blogs = ({dataFromServer,info}) => {
    const serverUrl = "/Images/"

    const [data,setData]= useState(dataFromServer ? dataFromServer : [] )
    
    return (
        <div className='pt_4'>
            <CardGroup >
                <div className='bloger'>
                    {(data && data.length > 0 ) ? 
                        data.map(value=>(
                            <Card key={value.id}>
                                <div className='bloggerInfoContainer'>
                                    <Link to={`/profile/${value.id}`}>
                                        {/* /Images/user.jpg */}
                                        <img src={`${serverUrl}${value.userImage ? value.userImage : "user.jpg"}`} alt={value.user.user} />
                                    </Link>
                                    <Link to={`/profile/${value.user.user}`} className='text-dark'>
                                        <span>
                                            {value.user.user}
                                        </span>
                                    </Link>
                                </div>
                                <Link to={`/view_blogs/${value.id}`} className='text-dark'>
                                    <Card.Body>
                                        <Card.Title>{value.title}</Card.Title>
                                        <Card.Text>
                                            {value.body}
                                        </Card.Text>
                                    </Card.Body>
                                </Link>
                                <Card.Footer>
                                    <small className="text-muted">Date posted: {<DateFormater date={value.date}/>}</small>
                                </Card.Footer>
                            </Card>
                        ))
                        :
                        <h1>
                            No blogs today
                        </h1>
                    }
                    
                </div>
            </CardGroup>
            
        </div>
    )
}

export default Blogs