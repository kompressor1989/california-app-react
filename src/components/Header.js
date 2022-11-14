import React, {useContext, useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import Nav from './Nav';
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'
import { MainContext, useRef } from "../App";
import Logo from '../images/logo.png';


function Header() {
	const {count, setCount} = useContext(MainContext);
	
	return (
		<header className="header">
			<a className="header__logo_link" href="/"><img className="header__logo" src={Logo} alt="Company California" /></a>
			<Nav />
			<Tippy placement="bottom" content="Lets's see your basket!">
			<button className='btn__basket'><Link to="/basket">
				<img src='../imgs/basket.png' alt='basket'></img></Link>
			</button>
			</Tippy>
			<span className='header__count'>{count}</span>
		</header>
	);
}

export default Header;