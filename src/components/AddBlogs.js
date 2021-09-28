import React, {useState} from 'react';
import axios from 'axios'

function AddBlog(props) {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [add, setAdded] = useState(false)
    const submit = (e) =>{
        e.preventDefault();
        if (!title || !body){
            alert("Title or Body should not be empty")
        }
        const myBlog = {
            title: title,
            body: body,
        }
        axios.post('http://127.0.0.1:8000/blog', myBlog).then(response => {
                console.log("added success", response)
                setAdded(true)
            }).catch(error => {console.log(error)})
        
    }
    return (

        <div className="container-sm my-3">
            {!add && 
                <>
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
                </>
            }
            {add &&
                <h4 className="text-center">Added Successfully</h4>
            }
            
        </div>
    );
}

export default AddBlog