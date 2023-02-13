import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import Loader from '../loader/Loader';
// import { Blogs } from '../offline/blogs'

const Blog = () => {
  let [blogs, setBlogs] = useState([]);
  let [loader, setLoader] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:8000/Blogs') //? this is a promise, meaning
    //? it takes time to complete. to handle this, use then() and catch()
      .then(res => { //? this is like an if statement
        // console.log(res.data);
        setTimeout(() => {
          setLoader(true);
          setBlogs(res.data);
          
        }, 3000);
      })
      .catch(err => { //? this is like an else statement
        console.log(err.message);
    })

  },[])

  return (
    <div>
      {
        loader && blogs.map(blog => {
          return <div key={blog.id}>
            <h1>Latest Blog</h1>
            <h2> {blog.title} </h2>
            <p> {blog.content.slice(0,30)}... </p>
            <h5> {blog.author} </h5>
            <Link to={`/details/${blog.id}`}> Read More </Link>
            </div>
      })
      }

      {
        !loader && <Loader />
      }
    </div>
  )
}

export default Blog