import React from 'react';
import Blog from './blog'

function Blogs(props){
    let mystyle = {
        minHeight: '70vh',
        margin: '20px auto'
    }
    return (
        <div className="container" style={mystyle}>
            <h1 className="text-center my-3">Blogs List</h1>
            {props.blogs.length===0? "No Blogs to display":
                props.blogs.map((blog)=>{
                    return <Blog blog={blog} key={blog.sno} onDelete={props.onDelete}/>
                })
            }
        </div>
    )
}

export default Blogs;