import React, {useState, useEffect} from 'react'
import { 
	BrowserRouter as Router
} from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer.js';
export const MainContext = React.createContext();



function App() {
	const [store, setStore] = useState([])
	const [count, setCount] = useState(0)
	const [idbasket, setBasket] = useState([])

	useEffect(() => {
		if (!count || count.length === 0){
			addCounter()
		}
		
	},[count])
	
	useEffect(() => {
		setStorage()
		if (!store || store.length === 0)  {
			let storeLocal = getStorage();
		
			if (storeLocal && storeLocal.length > 0) {
				setStore([...storeLocal])
				} 

	} else {
		setStorage();
	}

		// eslint-disable-next-line react-hooks/exhaustive-deps		
	},[store]);
	
	function addCounter() {
		let countTmp = count
		countTmp = localStorage.getItem('BasketTmp')
		if (!countTmp) return;
		if (countTmp) countTmp = JSON.parse(countTmp)
		countTmp = +countTmp.length
		setCount(countTmp)
}

	function setStorage () {
		let storeTmp = store;
		storeTmp = fetch('https://fakestoreapi.com/products/')
		.then(response => response.text())
		.then(data => {
			if (!storeTmp) return;
			localStorage.setItem('data', data);
			
		});
		
	}

	function getStorage () {
		let storeTmp = localStorage.getItem('data');
		if (!storeTmp) return;
		if (storeTmp) storeTmp = JSON.parse(storeTmp);

		if (!storeTmp) return;
		
		return storeTmp;
		
	};
	
	return (
		<>
			<MainContext.Provider value={{store, setStore, count, setCount, idbasket, setBasket}}>
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