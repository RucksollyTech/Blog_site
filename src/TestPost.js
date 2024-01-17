import React, { useEffect } from 'react'
import axios from 'axios';

const TestPost = () => {
    async function getUser() {
        try {
        //   const {data} = await axios.post(
        //     'https://rucksolly.pythonanywhere.com/api/create_blog',
        //     {
        //         title: "First Done in the class tested couple of times",
        //         body: "This is the like 10th blog and this  blog post was done in the class",
        //     }

        //     );
            const {data} = await axios({
                method: 'post',
                url: 'https://rucksolly.pythonanywhere.com/api/create_blog',
                data: {
                    title: "lASTEST FOR THE DAY Done in the class tested couple of times",
                    body: " BLA THIS BLA THAT This is the like 10th blog and this  blog post was done in the class",
                }
    
            });
            console.log(data);
        } catch (error) {
          console.error(error);
        }
    }

    useEffect(()=>{
        getUser();
    },[])

    return (
        <div>
            <h1>
                Test Post
            </h1>
            {/* Display */}
        </div>
    )
}

export default TestPost