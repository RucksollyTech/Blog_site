import React from 'react'
import Blogger from './Blogger'

const AllUsers = () => {
    return (
        <div className='bgGray'>
            <div className='standardWidth'>
                <div className="filterSection">
                    <div className='allMem'>
                        All members (100)
                    </div>
                    <div className='usersSearch'>
                        <img width="20" height="20" src="https://img.icons8.com/ios/20/search--v1.png" alt="search--v1"/>
                        <input type="search" />
                    </div>
                </div>
                <div className="userDescriptions">
                    <div></div>
                    <div>
                        <span>
                            Name
                        </span>
                    </div>
                    <div>
                        <span>
                            Area of expertise
                        </span>
                    </div>
                    <div>
                        <span>
                            Date joined
                        </span>
                    </div>
                    <div>
                        <span>
                            Number of blogs
                        </span>
                    </div>
                    <div></div>
                </div>
                <Blogger />
            </div>
            <br />
            <br />
            <br />
        </div>
    )
}

export default AllUsers