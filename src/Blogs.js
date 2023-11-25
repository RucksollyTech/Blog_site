import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';

const Blogs = () => {
  return (
    <div className='pt_4'>
        <CardGroup >
            <div className='bloger'>
                <Card>
                    <div className='bloggerInfoContainer'>
                        <Link to={"/profile"}>
                            <img src="/Images/mmm.jpg" alt="" />
                        </Link>
                        <Link to={"/profile"} className='text-dark'>
                            <span>
                                Name of blogger
                            </span>
                        </Link>
                    </div>
                    <Link to={"/view_blogs"} className='text-dark'>
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in
                                to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </Link>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                
            </div>
        </CardGroup>
        
    </div>
  )
}

export default Blogs