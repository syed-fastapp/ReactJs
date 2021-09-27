import logo from './logo.svg';
import './App.css';
import Nav from './components/nav'
import Blogs from './components/blogs'
import Footer from './components/footer';
import {useState, useEffect} from 'react'
import AddBlog from './components/AddBlogs'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'


function App() {
  let initBlog;
  if(localStorage.getItem("blogs")===null){
    initBlog = [];
  }
  else{
    initBlog = JSON.parse(localStorage.getItem("blogs"));
  }
  const onDelete = (blog) => {

    setblog(blogs.filter((e)=>{
      
      return e!==blog;
    }));
    localStorage.setItem("blogs",JSON.stringify(blogs))
  };
  const addBlog = (title, body) =>{
    if (localStorage.getItem('blogs')){
      localStorage.setItem("blogs",JSON.stringify(blogs))
    }
    let sno;
    if (blogs.length===0){
      sno = 0
    }
    else{
      sno = blogs[blogs.length-1].sno + 1
    }
    
    const myBlog = {
      sno: sno,
      title: title,
      body: body,
    }
    setblog([...blogs, myBlog])
    localStorage.setItem("blogs",JSON.stringify(blogs))
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
        </Switch>
        
        
        
        <Footer/>
      </Router>
    </div>
  );
}



export default App;
