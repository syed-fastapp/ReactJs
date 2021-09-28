import React,{useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import axios from 'axios'

function EditBlog(props){
    let params = useParams()
    
    const [blog, setBlog] = useState(null);
    const [updated, setUpdated] = useState(false);
    const [deleted, setDeleted] = useState(false)
    
    const url = 'http://127.0.0.1:8000/blog/'+params.id
    useEffect(() => {
        axios.get(url)
            .then(response => {
                setBlog(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    },[url])

    const handleChange = ({target}) => {
        const {name, value} = target;
        setBlog({...blog, [name]: value});
        
    };
    const submit = (e) => {
        e.preventDefault();
        if (!blog.title || !blog.body){
            alert("Title or Body should not be empty")
        }
        
        axios.put(url, blog).then(response => {
            setUpdated(true)
        })
        
    }
    const onDelete = () => {
        
        axios.delete('http://127.0.0.1:8000/blog/'+params.id)
              .then(response =>{
                setDeleted(true);
              })
      };
    if(blog){
        return (
            <div className="container-sm my-3">

                {!updated && !deleted && blog &&
                    <>
                    <h1>Add a Blog</h1>
                    <form onSubmit={submit}>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Blog Title</label>
                            <input type="text" name="title" value={blog.title} onChange={handleChange} 
                            className="form-control" id="title"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="body" className="form-label">Blog Body</label>
                            <input type="text" name="body" value={blog.body} onChange={handleChange} 
                            className="form-control" id="body"/>
                        </div>
                        <div className="col">
                            <button type="submit" className="btn btn-sm btn-success" >Update Blog</button>
                            <button type="button" className="btn btn-sm btn-danger mx-1" onClick={()=>onDelete()}>Delete Blog</button>
                        </div>
                        
                    </form>
                    </>
                }
                
                {updated && <h4 className="text-center">Successfully Updated</h4>}
                {deleted && <h4 className="text-center">Deleted Successfully</h4>}
            </div>
        );
    }
    else{
        return <></>
    }
    
}

export default EditBlog;