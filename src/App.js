import logo from './logo.svg';
import './App.css';
import Nav from './components/nav'
import Blogs from './components/blogs'
import Footer from './components/footer';
import {useState, useEffect} from 'react'
import AddBlog from './components/AddBlogs'
import EditBlog from './components/editBlog'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import axios from 'axios'


function App() {
  let initBlog;
  if(localStorage.getItem("blogs")===null){
    initBlog = [];
  }
  else{
    initBlog = JSON.parse(localStorage.getItem("blogs"));
  }
  const onDelete = (id) => {
    axios.delete('http://127.0.0.1:8000/blog/'+id)
          .then(response =>{
            console.log(response)
          })
    // setblog(blogs.filter((e)=>{
      
    //   return e!==blog;
    // }));
    // localStorage.setItem("blogs",JSON.stringify(blogs))
  };
  const addBlog = (title, body) =>{
    // if (localStorage.getItem('blogs')){
    //   localStorage.setItem("blogs",JSON.stringify(blogs))
    // }
    // let sno;
    // if (blogs.length===0){
    //   sno = 0
    // }
    // else{
    //   sno = blogs[blogs.length-1].sno + 1
    // }
    
    const myBlog = {
      title: title,
      body: body,
    }
    // setblog([...blogs, myBlog])
    
    // localStorage.setItem("blogs",JSON.stringify(blogs))

    axios.post('http://127.0.0.1:8000/blog', myBlog).then(response => {
                console.log("added success", response)
            }).catch(error => {console.log(error)})
  }

  const [blogs, setblog] = useState(initBlog);
  useEffect(() => {
    localStorage.setItem("blogs",JSON.stringify(blogs))
  }, [blogs])
  
  return (
    <div >
      <Router>
        <Nav title='MyBlogs' searchBar={false}/>
        <Switch>
          <Route exact path="/" render={()=>{
            return(
              <>
                <Blogs blogs={blogs} onDelete={onDelete}></Blogs>
              </>
            )
          }}></Route>

          <Route exact path="/addblog" render={()=>{
            return(
              <>
                <AddBlog addBlog={addBlog}/>
              </>
            )
          }}></Route>
          <Route exact path="/blog/:id" render={()=>{
            return(
              <EditBlog></EditBlog>
            )
          }}></Route>
        </Switch>
        
        
        
        <Footer/>
      </Router>
    </div>
  );
}



export default App;
