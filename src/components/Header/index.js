import React, {useState} from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as HamburgerMenu } from './hamburger_menu.svg';
import "./styles.scss";

const Nav = styled.nav`
	background: rgba(0,0,0,0);
	padding: 10px 26px;
	position:absolute;
	z-index: 83894740;
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

	const [ toggle, setToggle ] = useState(false);
	return (
		<Nav>
			<Menu>
				<ItemLogo>
					<Logo />
				</ItemLogo>
				<Link to="/">
					<ItemButton className="d-none d-lg-block" >
						HOME
					</ItemButton>
				</Link>
				<Link to="/blog">
					<ItemButton className="d-none d-lg-block" >
						BLOG
					</ItemButton>
				</Link>
				<Link to="/contact">
					<ItemButton className="d-none d-lg-block" >
						CONTACT
					</ItemButton>
				</Link>
				<ItemButton className="d-lg-none d-xl-none ml-auto" style={{}}>
					<div 
					  className={`mobile-nav-toggle ${toggle ? "mobile-nav-toggle--open" : ""}`} 
					  onClick={() => {
						setToggle(!toggle);
					  }} 
					>
						<HamburgerMenu style={{margin: "10px 0 0 12px"}}/>
					</div>
				</ItemButton>
			</Menu>
		</Nav>
	);
}

export default Header;