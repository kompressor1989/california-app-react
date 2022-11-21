import React, {useContext, useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import Nav from './Nav';
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'
import { MainContext, useRef } from "../App";
import Logo from '../images/logo.png';


function Header() {
	const {count, setCount} = useContext(MainContext);
	const[menuActive, setMenuActive] = useState(false);

	const items = [{value:"Home", href:"/"}, {value:"All products", href:"/allproducts/"}, {value:"Laptops", href:"/solutions/laptops/"},
	{value:"Phones", href:"/solutions/phones/"}, {value:"Watches", href:"/solutions/watches/"}, {value:"About", href:"/about/"},
	{value:"Support", href:"/support/"}, {value:"Contacts", href:"/contacts/"}, {value:"Basket", href:"/basket/"}]

	const Menu = ({header, items, active, setActive}) => {
		return (
			<div className={active ? 'menu active' : 'menu'} onClick={() => setActive(false)}>
					<div className='blur'></div>
					<div className='menu__content'>
						<div className='menu__header'>{header}</div>
						<ul>
							{items.map(item =>
								<li key={item.value}><Link to={item.href}>{item.value}</Link></li>)}
						</ul>
					</div>
			</div>
		)
	}
	
	return (
		<header className="header">
			<div className='burger__btn' onClick={()=> setMenuActive(!menuActive)}>
			<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
  				<path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
				</svg>
			</div>
			<a className="header__logo_link" href="/"><img className="header__logo" src={Logo} alt="Company California" /></a>
			<Nav />
			<Tippy placement="bottom" content="Lets's see your basket!">
			<button className='btn__basket'><Link to="/basket">
				<img src='../imgs/basket.png' alt='basket'></img></Link>
			</button>
			</Tippy>
			<span className='header__count'>{count}</span>
			<Menu active={menuActive} setActive={setMenuActive} header={'California Menu'} items={items}/>
		</header>
		
	);
}

export default Header;