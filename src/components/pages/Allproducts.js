import { getElementError } from "@testing-library/react";
import React, {useContext, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { MainContext, useRef } from "../../App";
import Swal from 'sweetalert2'


function Allproducts () {
	
	const {idbasket, setBasket} = useContext(MainContext);
	const {store, setStore} = useContext(MainContext);
	const {count, setCount} = useContext(MainContext);

	const [active, setActive] = useState({clname:"name0"});
	console.log(active)

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

	function onClickBTN(id) {
		let activeTmp = active;
		idbasket.forEach(e => {
			activeTmp = {clname: 'name' + id}
			
		});
		// activeTmp = {clname:'name' + id};
		setActive(activeTmp);
		
		
		// alert("Товар добавлен в корзину")
	}


	function addCart (e, id, title) {
		let basket = idbasket;
		if(!id) return;
		
		basket.push(id);
		const idbasketTmp = new Set(basket);
		basket = [...idbasketTmp];
		localStorage.setItem('BasketTmp', JSON.stringify(basket));
		basket = localStorage.getItem('BasketTmp');
		if (!basket) return;
		if (basket) basket = JSON.parse(basket);
		console.log(basket)
		setBasket(basket)
		addCounter()
		onClickBTN(id)
		
		Swal.fire({
			title: `${title}`,
			text: 'Товар добавлен в корзину!',
			icon: 'success',
			confirmButtonText: 'OK',
			heightAuto: 'false',
			width: '200px',
			
		  })
	}

	function addCounter() {
			let countTmp = count
			countTmp = localStorage.getItem('BasketTmp')
			if (!countTmp) return;
			if (countTmp) countTmp = JSON.parse(countTmp)
			countTmp = +countTmp.length
			setCount(countTmp)
	}

	

	function add() {
	

		return store.map((item, index) => {
					return (
						<div key={item.id} className="best__item allproducts__item">
							<Link to={`/product/${item.id}/`}><img src={item.image} alt={item.category}></img></Link>
							<h4>{item.title}</h4>
							<div className="item__bottom">
								<button key={item.id} onClick={(e) => addCart(e, item.id, item.title)} className={(active.clname === 'name' + (item.id)) ? "activeBTN" : ' '}>Add to cart</button>
								<span>{item.price} $</span>
							</div>
						</div>)
				})
	}

		
		return (	
				
			<div className="page__title">
				<h2>All products</h2>
				<div className="container__best container__all_products">
					{add()}
				</div>
		
			</div>
				
		)
			
	}
  

export default Allproducts;