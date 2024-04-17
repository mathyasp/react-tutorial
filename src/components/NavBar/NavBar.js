import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';
import './NavBar.css';

function NavBar() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?query=${encodeURIComponent(query)}`);
  }

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar light expand="md">
      <NavbarToggler onClick={toggle} />
      <div className="navbar-left">
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/newsletter">Newsletter</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
      <div className="navbar-center">
        <NavbarBrand href="/">SFPOPOS</NavbarBrand>
      </div>
      <form className="navbar-right" onSubmit={handleSearchSubmit}>
        <input
          value={query}
          placeholder='Search'
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </Navbar>
  );
}

export default NavBar;