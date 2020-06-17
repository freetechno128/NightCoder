import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import './index.scss';
const Header = () => {
  return (
    <nav>
      <ul className="navbar__list">
				<li><Logo /></li>
        <li className="navbar__list__item">
					<Link to="/">Home</Link>
        </li>
        <li className="navbar__list__item">
					<Link to="/blog">Blog</Link>
        </li>
        <li className="navbar__list__item">
					<Link to="/contact">Contact</Link>
        </li>
				<li className="navbar__list__item">
					<input type="text" />
        </li>
      </ul>
    </nav>
  );
}

export default Header;