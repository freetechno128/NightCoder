import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as HamburgerMenu } from './hamburger_menu.svg';


const Nav = styled.nav`
	background: rgba(0,0,0,0);
	padding: 10px 26px;
	position:absolute;
	z-index:20;
	width: 100vw;
`;

const Menu = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	list-style-type: none;
	margin: 0;
	padding: 0;
	& a {
		text-decoration: none;
		color: white;

	}
`;

const ItemLogo = styled.li`
	margin-right: auto;
`;

const ItemButton = styled.li`
	text-decoration: none;
	padding: 10px 14px;
	font-size: 14px;
	font-weight: 600;
	letter-spacing: 1px;
	&:hover {
		background-color: rgba(255,255,255, 0.1)
	}

	
`;


const Header = () => {
  return (
    <Nav>
      <Menu>
		<ItemLogo>
			<Logo />
		</ItemLogo>
		<ItemButton className="d-none d-lg-block" >
			<Link to="/">HOME</Link>
		</ItemButton>
		<ItemButton className="d-none d-lg-block" >
			<Link to="/blog">BLOG</Link>
        </ItemButton>
		<ItemButton className="d-none d-lg-block" >
			<Link to="/contact">CONTACT</Link>
        </ItemButton>
		<ItemButton className="d-lg-none d-xl-none ml-auto" style={{filter: "invert(1)"}}>
			<HamburgerMenu />
		</ItemButton>
      </Menu>
    </Nav>
  );
}

export default Header;