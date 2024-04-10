import { NavLink } from 'react-router-dom';
import './Title.css';
import RandomSpace from '../RandomSpace/RandomSpace'

function Title() {
  return (
    <div className='Title'>
      <h1>SFPOPOS</h1>
      <div className="Title-Subtitle">San Francisco Privately Owned Public Spaces</div>

      <div className='NavLink'>
        <NavLink 
	        className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
	        to="/">List</NavLink>
        <NavLink 
          className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
          to="/about">About</NavLink>
        <NavLink 
          className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
          to="/newsletter">Newsletter</NavLink>
        <RandomSpace />
      </div>
    </div>
  )
}

export default Title;