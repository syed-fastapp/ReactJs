import React from 'react';

function Blog(prop){
    return (
        <div>
            <h4>{prop.blog.title}</h4>
            <p>{prop.blog.body}</p>
            <button className="btn btn-sm btn-danger" onClick={()=>{prop.onDelete(prop.blog)}}>Delete</button><hr/>
        </div>
    )
}

export default Blog;