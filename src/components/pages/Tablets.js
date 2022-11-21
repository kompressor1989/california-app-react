import React, {useContext, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { MainContext, useRef } from "../../App";
import Swal from 'sweetalert2'

function Tablets() {
	const {idbasket, setBasket} = useContext(MainContext);
	const {store, setStore} = useContext(MainContext);
	const {count, setCount} = useContext(MainContext);

	let tablets = store;
    tablets = tablets.filter(item => item.category === "electronics");
	

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
	

		return tablets.map((item, index) => {
					return (
						<div key={item.id} className="best__item allproducts__item">
							<Link to={`/product/${item.id}/`}><img src={item.image} alt={item.category}></img></Link>
							<h4>{item.title}</h4>
							<div className="item__bottom">
								<button key={item.id} onClick={(e) => addCart(e, item.id, item.title) } className="btn__explore add_cart">Add to cart</button>
								<span>{item.price} $</span>
							</div>
						</div>)
		})
	}

	return (
		<div className="page__title">
            <h1>Tablets</h1>
			<div className="container__best container__all_products">
				{add()}
			</div>
		</div>	
	);
}

export default Tablets;