import React, {useState, useEffect} from 'react'
import { Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import About from './pages/About';
import Support from './pages/Support';
import Allproducts from "./pages/Allproducts";
import Contacts from "./pages/Contacts";
import Laptops from "./pages/Laptop";
import Watches from "./pages/Watches";
import Phones from "./pages/Phones";
import Tablets from "./pages/Tablets"
import Basket from "./pages/Basket";
import Product from "./pages/Product";
import Rating from './pages/Rating';
import Latest from './pages/Latest';




function Main() {
	
	return (
		<main className="main">
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/allproducts/" element={<Allproducts />} />
			<Route path="/product/:id/" element={<Product />} />
			<Route path="/solutions/laptops/" element={<Laptops />} />
			<Route path="/solutions/watches/" element={<Watches />} />
			<Route path="/solutions/phones/" element={<Phones />} />
			<Route path="/solutions/tablets/" element={<Tablets />} />
			<Route path="/solutions/rating/" element={<Rating />} />
			<Route path="/solutions/latest/" element={<Latest/>} />
			<Route path="/about/" element={<About />} />
			<Route path="/support/" element={<Support />} />
			<Route path="/contacts/" element={<Contacts />} />
			<Route path="/basket/" element={<Basket />} />
		</Routes>
		</main>
	);
}

export default Main;