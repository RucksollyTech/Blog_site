import React, { useState } from 'react'
import TestData from './TestData'

const Test = ({datas}) => {
    // const datas = TestData()
    // const [data,setData] = useState(datas ? datas : [])
    if (datas){
        
    }else{
        datas = TestData()
    }
  return (
    <div className='standardWidth'>
        <div className="grider">
            {datas && datas.map(item=>(
                <div className="border p-4 mb-3 rounded">
                    <h3>
                        {item.title}
                    </h3>
                    <p>
                        {item.body}
                    </p>
                    <h6>
                        {item.name}
                    </h6>
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default Test