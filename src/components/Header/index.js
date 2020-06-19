import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
	background: #100e17;
	padding: 10px 20px;
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
	padding: 10px 20px;
	&:hover {
		background-color: rgba(255,255,255, 0.1)
	}
	
`;

const ItemInput = styled.li`
	margin-left: auto;

`;

const Header = () => {
  return (
    <Nav>
      <Menu>
		<ItemLogo>
			<Logo />
		</ItemLogo>
		<Link to="/">
		<ItemButton>Home</ItemButton>
		</Link>
        <ItemButton>
			<Link to="/blog">Blog</Link>
        </ItemButton>
        <ItemButton>
			<Link to="/contact">Contact</Link>
        </ItemButton>
      </Menu>
    </Nav>
  );
}

export default Header;