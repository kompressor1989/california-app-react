import  React, {useEffect}  from "react";
import { Link } from "react-router-dom";
import Tooltip from "../Tooltip";
import Alert from "../Alert";
import Tippy from '@tippy.js/react'
import 'tippy.js/dist/tippy.css'


function Home() {
	
	
	function Slider(opt) {

		if (!opt.name || !opt.btns.left || !opt.btns.right) return;
	
		const listElem = document.querySelector('#' + opt.name);
	
		if (!listElem || listElem.children.length <= 1) return;
	
		const btnLeft = document.querySelector('#' + opt.btns.left);
		const btnRight = document.querySelector('#' + opt.btns.right);
		
	
		if (!btnLeft || !btnRight) return;

		let sIid = null;

		const autoplay = function () {
			sIid = setTimeout(() => {
				if (next()) autoplay();
			}, 3000);
		}

		const stopplay = function() {
			clearTimeout(sIid);
		}

	
		const next = () => {
			stopplay()
			
			let x = listElem.style.transform;
	
			if (!x) {
				x = 0;
			} else {
				x = x.replace('translateX(', '');
				x = x.replace('%)', '');
				x = Math.abs(x);
			}
	
			x += 100;
	
			const stopPoint = (listElem.children.length - 1) * 100;
	
			if (x <= stopPoint) {listElem.style.transform = `translateX(-${x}%)`
			}
			else if (x > stopPoint ) {listElem.style.transform = `translateX(0%)`};

			return true;
		}
	
	
		const prevNext = function() {
			let x = listElem.style.transform;
	
			if (!x) {
				x = 0;
			} else {
				x = x.replace('translateX(', '');
				x = x.replace('%)', '');
				x = Math.abs(x);
			}
			
			const dir = (this === btnLeft) ? 'prev' : 'next';
	
			x += 100 * (dir === 'prev' ? -1 : 1);
			
			const stopPoint = (listElem.children.length - 1) * 100;
	
			if (x <= stopPoint) listElem.style.transform = `translateX(-${x}%)`;
			else if (x > stopPoint) listElem.style.transform = `translateX(0%)`;
			
			if (dir === 'prev' && x < 0) listElem.style.transform = `translateX(-${stopPoint}%)`;
		};
	
		listElem.addEventListener('mouseleave', autoplay);
		listElem.addEventListener('mouseover', stopplay);
		btnLeft.addEventListener('click', prevNext);
		btnRight.addEventListener('click', prevNext);
	
	};
	
	window.addEventListener('load', function() {
		
		const slider1_options = {
			name: 'slider1',
			btns: {
				left: 'slider1_btn_left',
				right: 'slider1_btn_right'
			}
		};
	
		Slider(slider1_options);
	
	});

	let dataTmp=[];
	
	function setStorageSingup() {
		
		const input = document.getElementById('item');
		//eslint-disable-next-line 
		const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		
		if(reg.test(input.value) === false) {
			alert('Введите корректный e-mail');
			input.value = '';
			
			return;
		}
		

		if(!input.value) return;
		
		
		let inputTmp = {
			id: input.id,
			email: input.value,
		}
		
		dataTmp.push(inputTmp);
		localStorage.setItem('singup',JSON.stringify(dataTmp));
		Alert()
		input.value = '';
		
	}
	
	
	Tooltip()
	
	
	return (
		
		<div className="page">
			<div className="container__slider">
				<div className="slider">
        			<div className="slider__wrapper">
						<div className="slider__list" id="slider1">
                			<div className="slider__item">
								<div className="slider__item_post slider_phone">
									<h1>The new phones are<br/> here take a look.</h1>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui,<br/> aliquam, tempor. Faucibus morbi turpis.</p>
									<Link to="/solutions/phones/"><button className="btn__explore btn__post">Explore</button></Link>
									<ul className="slider__indicators">
										<li><div className="indicator__active"></div></li>
										<li><div></div></li>
										<li><div></div></li>
									</ul>
								</div>
                    			
                			</div>
                			<div className="slider__item">
									<div className="slider__item_post slider_watch">
										<h1>The new Watches are<br/> here take a look.</h1>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui,<br/> aliquam, tempor. Faucibus morbi turpis.</p>
										<Link to="/solutions/watches/"><button className="btn__explore btn__post">Explore</button></Link>
										<ul className="slider__indicators">
											<li><div></div></li>
											<li><div className="indicator__active"></div></li>
											<li><div></div></li>
										</ul>
									</div>
                			</div>
                			<div className="slider__item">
								<div className="slider__item_post slider_laptop">
									<h1>The new Laptops are<br/> here take a look.</h1>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui,<br/> aliquam, tempor. Faucibus morbi turpis.</p>
									<Link to="/solutions/laptops/"><button className="btn__explore btn__post">Explore</button></Link>
									<ul className="slider__indicators">
										<li><div></div></li>
										<li><div ></div></li>
										<li><div className="indicator__active"></div></li>
									</ul>
								</div>
                			</div>
            			</div>
        			</div>
        			<button id="slider1_btn_left" className="slider__btn left"><span>&lsaquo;</span></button>
        			<button id="slider1_btn_right" className="slider__btn right"><span>&rsaquo;</span></button>
					
    			</div>
					

			</div>

			<div className="page__title">
				<h2>Shop our latest offers and categories</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est dui, aliquam, tempor. Faucibus morbi turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
			</div>
			<div className="container">
				<div className="container__left">
					<button className="btn btn__laptop btn__left">
						<Link to="/solutions/laptops/">
						<img src="../imgs/laptop.png" alt="laptop" width='500' height='380' ></img>
							<p>Laptop</p>
							<h4>True Laptop <br/>Solution</h4>
						</Link>
					</button>
					<button className=" btn btn__watch btn__left" >
						<Link to="/solutions/watches/">
							<img src="../imgs/watch.png" alt="watch" width='310'></img>
						<div>
							<p>Watch</p>
							<h4>Not just stylisht</h4>
						</div>
						</Link>
					</button>
				</div>
				<div className="container__right">
					<button className="btn btn__phones btn__right">
						<Link to="/solutions/phones/">
							<img src="../imgs/iphone.png" alt="iphone"></img>
							<p>Phones</p>
							<h4>Your day to day<br/>life</h4>
						</Link>
					</button>
					<button className="btn btn__tablet btn__right" >
						<Link to="/solutions/tablets/">
						<p>Tablet</p>
						<h4>Empower your <br/>work</h4>
						<img src="../imgs/tablet.png" alt="tablet"></img>
						</Link>
					</button>
				</div>
			</div>

			<div className="page__title">
				<h2>Save on our most selled items.</h2>
				<p>Our new Limited Edition Winter Design BESPOKE 4-Door Flex™</p>
				<div className="container__popular">
					<button className="btn__popular" width='300' >
						<Link to="/product/9/">
						<img src="../imgs/macbook.png" alt="macbook"></img>
						<h4>MacBook Pro 13</h4>
						<p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</p>
						<span>$ 1,200.00 USD</span>
						</Link>
					</button>
					<button className="btn__popular" width='300' >
						<Link to="/product/10/">
							<img src="../imgs/watch3.png" alt="tablet"></img>
							<h4>Smart Galaxy Watch 3</h4>
							<p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
							<span>$ 199.00 USD</span>
						</Link>
					</button>
					<button className="btn__popular" width='300'>
						<Link to="/product/11/">
							<img src="../imgs/air1.png" alt="air"></img>
							<h4>MacBook Air M1</h4>
							<p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
							<span>$ 1,009.00 USD</span>
						</Link>
					</button>
					<button className="btn__popular" width='300' >
						<Link to="/product/12/">
							<img src="../imgs/ipad.png" alt="tablet"></img>
							<h4>iPad</h4>
							<p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
							<span>$ 610.00 USD</span>
						</Link>
					</button>
				</div>
			</div>

			<div className="page__title">
				<h2>See the best around here</h2>
				<p>Our new Limited Edition Winter Design BESPOKE 4-Door Flex™</p>
				
				<div className="container__best">
					<div className="best__item">
						<p>Smart light bulb pack</p>
						<h4>Latest and gratest</h4>
						<Link to="/solutions/latest/">
							<button className="btn__explore">Explore</button>
						</Link>
						<img src="../imgs/watches.png" alt="tablet"></img>
					</div>

					<div className="best__item">
						<p>Smart light bulb pack</p>
						<h4>Best selling</h4>
						<Tippy content='The most popular selling'>
							<Link to="/solutions/rating/">
								<button className="btn__explore">Explore</button>
							</Link>
						</Tippy>
						<img src="../imgs/bestsalling.png" alt="tablet"></img>
					</div>

					<div className="best__item">
						<p>Smart light bulb pack</p>
						<h4>Every product</h4>
						<Tippy placement="bottom" delay={1000} content="Lets's see all products">
							<Link to="/allproducts/">
								<button className="btn__explore">Explore</button>
							</Link>
						</Tippy>
						
						<img src="../imgs/everyproducts.png" alt="tablet" width="300"></img>
						
					</div>

				</div>
			</div>

			<div className="page__title">
				<h2>Ideas have a place here</h2>
				<p>Our new Limited Edition Winter Design BESPOKE 4-Door Flex™</p>
			</div>
			<div className="container__ideas">
				<img src="../imgs/ideas.png" alt="ideas"></img>
				<div className="container__ideas_text">
					<span>We Make It Easy To Find The Great Design Talent, <br/>Easier...</span>
					<span>Road Design Handbook For The International Road...</span>
					<span>The Best Kept Secrets About Creative People</span>
					<span>We Make It Easy To Find The Great Design Talent, <br/>Easier...</span>
				</div>
				
			</div>
			<button className="btn__seeall">See All<img src="../imgs/vector.png" alt="vector"></img></button>
			<div className="page__title">
				<h2>Looking for anything else?</h2>
				<input className="input__search" placeholder="Search keyword"></input>
				<div className="container__btn_fast">
					<button className="btn_fast">iPhone</button>
					<button className="btn_fast">Charger</button>
					<button className="btn_fast">Gift</button>
					<button className="btn_fast">Google Pixel 3</button>
					<button className="btn_fast">Keyboard</button>
					<button className="btn_fast">13 Pro Max</button>
					<button className="btn_fast">iPhone 12</button>
					<button className="btn_fast">Laptop</button>
					<button className="btn_fast">Mobile</button>
				</div>
				
			</div>
			<div className="container__sing_up">
				<div className="page__title">
					<h2>Never miss a thing</h2>
					<p>Sign up for texts to be notified about our best offers on the perfect gifts.
					</p>
					<img src="../imgs/bestsalling.png" alt="singup"></img>
					<div className="sing__up_form" id="liveAlertPlaceholder">
						<input id="item" type='email' className="input__singup" placeholder="Your email"></input>
						<button onClick={setStorageSingup}  type="submit" className="btn__singup" id="liveAlertBtn">Sign up</button>
					</div>
				</div>
			</div>
			
		</div>
	);
}

export default Home;
