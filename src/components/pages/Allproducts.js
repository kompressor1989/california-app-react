import React, {useContext, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { MainContext, useRef } from "../../App";
import Logo from '../../images/logo.png';


function Allproducts () {
	
	const {idbasket, setBasket} = useContext(MainContext);
	const {store, setStore} = useContext(MainContext);
	const {count, setCount} = useContext(MainContext);
	const {addCart, addCounter} = useContext(MainContext);

	
	const[sortStatus, setSortStatus] = useState(false);

	useEffect(() => {
		
		if (!idbasket || idbasket.length === 0)  {

			let idbasketTmp = idbasket;
			idbasketTmp = localStorage.getItem('BasketTmp');
			if(!idbasketTmp) return
			idbasketTmp = JSON.parse(idbasketTmp);
			setBasket(idbasketTmp)
			addCounter(idbasketTmp) 
			}

		
			if (idbasket && idbasket.length > 0) {
				addCart()

	} 

		// eslint-disable-next-line react-hooks/exhaustive-deps		
	},[idbasket]);

	
	console.log(idbasket)

	

	function sort() {
		let storeFilter = store;
		storeFilter.sort((a,b) => {
			return a.price - b.price;
		})
		setSortStatus(!sortStatus);
		if(sortStatus) storeFilter.reverse();

		setStore([...storeFilter])
		
	}

	

	function add() {
	

		return store.map((item, index) => {
					let added = (idbasket.indexOf(item.id) !== -1) ? ' added': '';
					return (
						<div key={item.id} added={added} className={"best__item allproducts__item" + added}>
							<Link to={`/product/${item.id}/`}><img src={item.image} alt={item.category}></img></Link>
							<h4>{item.title}</h4>
							<div className="item__bottom">
								<button key={item.id} onClick={(e) => addCart(e, item.id, item.title)} className={"btn__explore add_cart"}>{added ? "Remove" : "Add to cart"}</button>
								<span>{item.price} $</span>
							</div>
						</div>)
				})
	}

		
		return (	
				
			<div className="page__title">
				<h2>All products</h2>
				<button onClick={sort} className="catalog__sort">
					<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-filter-circle" viewBox="0 0 16 16">
  					<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  					<path d="M7 11.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"/>
					</svg>
				</button>
				<div className={"container__best container__all_products"}>
					{add()}
				</div>
		
			</div>
				
		)
			
	}
  

export default Allproducts;
