import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Update from '../update/Update';
import { AiFillDelete, AiFillStepBackward } from 'react-icons/ai'
import {RiEdit2Fill} from 'react-icons/ri'

const Details = () => {
    let { id } = useParams();
    let redirects = useNavigate();
    let [blog, setBlog] = useState('');
    let [show, setShow] = useState(false);

    useEffect(()=> {
        axios.get(`http://localhost:8000/Blogs/${id}`)
        .then(res=> {
            setBlog(res.data);
        })
            .catch(err => {
                console.log(err.message);
        })

    },[show])

    function handleDelete() {
        axios.delete(`http://localhost:8000/Blogs/${id}`)
            .then(res => {
                console.log(`Blog with id of ${id} was deleted Successfully!`);
                setTimeout(() => {
                    redirects('/blog');
                }, 2000);
            })
            .catch(err => {
                console.log(err.message);
            })
        }
    
  return (
      <div>
          { !show &&
              
              <div className="blog">
                  
          <h1>Blog Detalis for Blog No. {id} </h1>
              <h2> {blog.title} </h2>
              <p> {blog.content} </p>
            <h5> {blog.author} </h5>
                  
          <div className="btn">
              <button onClick={() => redirects('/blog')}> <AiFillStepBackward /> </button>
              <button onClick={()=> handleDelete()}> <AiFillDelete /> </button>
              <button onClick={()=> setShow(true)}> <RiEdit2Fill /> </button>
                  </div>
                  
          </div>

          }

          { show && 
              <Update cancel={setShow} id={id} blog={blog}  />
          }

    </div>
  )
}

export default Details