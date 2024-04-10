import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './NavBar.css';

function NavBar() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?query=${encodeURIComponent(query)}`);
  }

  return (
    <div className='NavBar'>
      <div className='NavLink'>
        <NavLink 
            className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link' }
            to='/'>Home</NavLink>
        <NavLink 
          className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link' }
          to='/about'>About</NavLink>
        <NavLink 
          className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link' }
          to='/newsletter'>Newsletter</NavLink>
      </div>
      <h1>SFPOPOS</h1>
      <div className='Search'>
        <form onSubmit={handleSearchSubmit}>
          <input
            value={query}
            placeholder='Search'
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
      </div>
    </div>
  )
}

export default NavBar;