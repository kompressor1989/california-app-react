import React, {useContext, useState, useEffect} from "react";
import {useLocation} from "react-router";
import { Link } from "react-router-dom";
import { MainContext, useRef } from "../../App"
import Swal from 'sweetalert2'


function Product () {
   
    const {store, setStore} = useContext(MainContext);
    const {idbasket, setBasket} = useContext(MainContext);
    const {count, setCount} = useContext(MainContext);
    
    const location = useLocation().pathname;
    // console.log(idbasket)
    let iD = +location.split('/')[2];
    
    let product = store;
    console.log(product)
    
    product = product.find(item => item.id === iD);

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
		console.log(basket);
		setBasket(basket);
		addCounter();
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
    
    return(
        <>
        <button className="btn_back"><Link to="/allproducts/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        </svg>Back</Link>
        </button>
        
        <div className="product__container container">

            <div className="product__image"><img src={product.image} alt={product.category}></img></div>
            <div className="product__description">
                        <h1>{product.title}</h1>
                        <div className="price">Now only ${product.price}</div>
                        <div className="description">{product.description}</div>
                        <button key={product.id} onClick={(e) => addCart(e, product.id, product.title) } className="btn__explore add_cart">Add to cart</button>
            </div>
            
        </div>
        </>
       
    )
}

export default Product