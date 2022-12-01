import React, {useContext, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { MainContext, useRef } from "../../App";

function Rating() {
	const {idbasket, setBasket} = useContext(MainContext);
	const {store, setStore} = useContext(MainContext);
	const {count, setCount} = useContext(MainContext);
	const {addCart, addCounter} = useContext(MainContext);

	let rating = store;
    
    rating = rating.filter(item => item.rating.rate >= 4);

	function add() {
	

		return rating.map((item, index) => {
			let added = (idbasket.indexOf(item.id) !== -1) ? ' added': '';
					return (
						<div key={item.id} className={"best__item allproducts__item" + added}>
							<Link to={`/product/${item.id}/`}><img src={item.image} alt={item.category}></img></Link>
							<h4>{item.title}</h4>
							<div className="item__bottom">
								<button key={item.id} onClick={(e) => addCart(e, item.id, item.title) } className="btn__explore add_cart">{added ? "Remove" : "Add to cart"}</button>
								<span>{item.price} $</span>
							</div>
						</div>)
		})
	}

	return (
		<div className="page__title">
            <h1>Best Selling!</h1>
			<div className="container__best container__all_products">
				{add()}
			</div>
		</div>	
	);
}

export default Rating;