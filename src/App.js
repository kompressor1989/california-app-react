import React, {useState, useEffect} from 'react'
import { 
	BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer.js';
import Swal from 'sweetalert2'
export const MainContext = React.createContext();



function App() {
	
	const [store, setStore] = useState([])
	const [count, setCount] = useState(0)
	const [idbasket, setBasket] = useState([])

	useEffect(() => {
		if (!count || count.length === 0){
			addCounter()
		}
		// eslint-disable-next-line
	},[count])
	
	useEffect(() => {
		// setStorage()
		if (!store || store.length === 0)  {
			let storeLocal = setStorage();
		
			if (storeLocal && storeLocal.length > 0) {
				setStore([...storeLocal])
				} 

	} else {
		setStorage();
	}

		// eslint-disable-next-line react-hooks/exhaustive-deps		
	},[store]);


	function addCart (e, id, title) {
		let basket = idbasket;
		if(!id) return;
		if(basket.indexOf(id) !== -1){
			basket = basket.filter(item => item !== id)
		} else {
			basket.push(id);
		}
		
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

	function setStorage () {
		if (store.length !==0) return;
		let localTmp = localStorage.getItem('data');
		if(localTmp) localTmp = JSON.parse(localTmp);
		if(localTmp && localTmp.length>0) {
			setStore([...localTmp]);
			return;
		}
		fetch('https://fakestoreapi.com/products/')
		.then(response => response.json())
		.then(data => {
			setStore([...data]);
			localStorage.setItem('data', JSON.stringify(data));
		});
		
	}

	setStorage()

	return (
		<>
			<MainContext.Provider value={{store, setStore, count, setCount, idbasket, setBasket, addCart, addCounter}}>
			<Router>
				<Header />
				<Main />
				<Footer />
			</Router>
			</MainContext.Provider>
		</>
		
	);
}


export default App;