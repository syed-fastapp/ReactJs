import React, {useState} from 'react';

function AddBlog(props) {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const submit = (e) =>{
        e.preventDefault();
        if (!title || !body){
            alert("Title or Body should not be empty")
        }
        props.addBlog(title, body)
        setTitle("");
        setBody("");
    }
    return (
        <div className="container-sm my-3">
            <h1>Add a Blog</h1>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Blog Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} 
                    className="form-control" id="title" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="body" className="form-label">Blog Body</label>
                    <input type="text" value={body} onChange={(e)=>{setBody(e.target.value)}} 
                    className="form-control" id="body"/>
                </div>
                <button type="submit" className="btn btn-sm btn-success" >Add Blog</button>
            </form>
        </div>
    );
}

export default AddBlog