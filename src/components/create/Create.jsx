import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Create = () => {
    let [title, setTitle] = useState('');
    let [author, setAuthor] = useState('Mr. Chile');
    let [content, setContent] = useState('');
    let cancel = useNavigate();
    let [filled, setFilled] = useState(true);

    let toUpd = {
        title,
        author,
        content
    }

    function validate() {
        if (toUpd.title.length > 0 && toUpd.content.length > 0) {
            setFilled(false)
        }
        if (toUpd.title.length < 1 || toUpd.content.length < 1) {
            setFilled(true)
        }

    }
    
        
        
    
    function handleSubmit(e) {
        e.preventDefault(e);
        // console.log(toUpd);
        axios.post(`http://localhost:8000/Blogs`, toUpd)
            .then(res => {
                console.log('Blog Created Successfully!');
                setTimeout(() => {
                    cancel('/blog');
                }, 2000);
            })
            .catch(err => {
                console.log(err.message);
        })
    }

  return (
      <div>
          <h1>Create a New Blog </h1>

          <div className="form">
          <form  onSubmit={(e)=> handleSubmit(e)}>
                  <label htmlFor="">Title</label> 
                  <div></div>
                  <input
                      type="text"
                      name='title'
                      onChange={(e) => setTitle(e.target.value)}
                      onKeyUp={()=> validate()}
                      value={title}
                      required
                  />
                  <div></div>

                  <label htmlFor="">Content</label>
                  <div></div>
                  <textarea
                      name="content"
                      cols="60"
                      rows="10"
                      onChange={(e) => setContent(e.target.value)}
                      onKeyUp={()=> validate()}
                      value={content}
                      required

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
                  <button onClick={()=> cancel('/blog')} >Cancel</button>
                  <button disabled={filled}>Create Blog</button>
              </div>
          </form>
              
          </div>
      

    </div>
  )
}

export default Create