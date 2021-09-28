import React, {useEffect, useState} from 'react';
import Blog from './blog'
import axios from 'axios'

function Blogs(props){
    let mystyle = {
        minHeight: '70vh',
        margin: '20px auto'
    }
    const url = 'http://127.0.0.1:8000/blog'
    const [blogs, setBlog] = useState([]);
    
    useEffect(() => {
        axios.get(url)
            .then(response => {
                setBlog(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    },[url])
    
    return (
        <div className="container" style={mystyle}>
            <h1 className="text-center my-3">Blogs List</h1>
            {blogs.length===0? "No Blogs to display":
                blogs.map((blog)=>{
                    return <Blog blog={blog} key={blog.id} onDelete={props.onDelete}/>
                })
            }
        </div>
    )
}

export default Blogs;