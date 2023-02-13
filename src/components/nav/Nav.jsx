import React from 'react'
import { Link } from 'react-router-dom';
import './nav.scss';


const Nav = () => {
  return (
      <div>
      <nav className="nav">
        {/* //! browser router step:3 */}
        <ol>
          <li className='logo'> <Link to={'/'}>logo</Link> </li>
          <li className='blog'> <Link to={'/blog'}>blog</Link> </li>
          <li className='about'><Link to={'/about'}>about</Link> </li>
          <li className='about'><Link to={'/create'}>Create-Blog</Link> </li>
          <li className='more'><Link to={' '}>&#9776;</Link></li>
         </ol>
          </nav>
          
    </div>
  )
}

export default Nav