import React from 'react';
import {Link} from 'react-router-dom'

function Blog(prop){
    return (
        <div>
            <h4>{prop.blog.title}</h4>
            <p>{prop.blog.body}</p>
            <Link to={"/blog/"+ prop.blog.id}><button className="btn btn-sm btn-info">View</button></Link><hr/>
        </div>
    )
}

export default Blog;