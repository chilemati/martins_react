import axios from 'axios';
import React, { useState } from 'react'
import { FcCancel } from 'react-icons/fc'
import {BsToggleOff} from 'react-icons/bs'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  //! toast step: 1

const Update = ({ id, blog, cancel, }) => {
    let [title, setTitle] = useState(blog.title);
    let [author, setAuthor] = useState(blog.author);
    let [content, setContent] = useState(blog.content);

    const notify = () => toast.success("Blog Updated Successfully", //! toast step: 2
        {
            theme: 'dark',
            position: 'top-center',
            duration: '2000'
        }
    );

    let toUpd = {
        title,
        author,
        content
    }
    
    function handleSubmit(e) {
        e.preventDefault(e);
        // console.log(toUpd);
        axios.patch(`http://localhost:8000/Blogs/${id}`, toUpd)
            .then(res => {
                // console.log('Blog Updated Successfully!');
                notify(); //! toast step: 4
                setTimeout(() => {
                    cancel(false);
                }, 2000);
            })
            .catch(err => {
                console.log(err.message);
        })
    }

  return (
      <div>
          <h1>Blog Update for Blog No. {id} </h1> <span>Dark Theme</span> <BsToggleOff />

          <div className="form">
          <form  onSubmit={(e)=> handleSubmit(e)}>
                  <label htmlFor="">Title</label> 
                  <div></div>
                  <input
                      type="text"
                      name='title'
                      onChange={(e)=> setTitle(e.target.value)}
                      value={title}
                  />
                  <div></div>

                  <label htmlFor="">Content</label>
                  <div></div>
                  <textarea
                      name="content"
                      cols="60"
                      rows="10"
                      onChange={(e)=> setContent(e.target.value)}
                      value={content}

                  ></textarea>
                  <div></div>

                  <label htmlFor="">Authors</label>
                  <select
                      name="author"
                      onChange={(e)=> setAuthor(e.target.value)}
                      value={author}
                  >
                      <option value="Mr. Martins">Mr. Martins</option>
                      <option value="Mr. James">Mr. James</option>
                      <option value="Mr. Chile">Mr. Chile</option>
                      <option value="Mr. Elite">Mr. Elite</option>
                      <option value="Mr. Amadi">Mr. Amadi</option>
                  </select>
              
              
              <div className="btn">
                  <button onClick={()=> cancel(false)} title='Cancel'> <FcCancel /> </button>
                  <button>Update Blog</button>
              </div>
          </form>
              
          </div>
            <ToastContainer /> {/*//! toast step: 3 */}
    </div>
  )
}

export default Update