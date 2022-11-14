import React from "react";
import GoogleMapReact from 'google-map-react';



function Contacts() {
	const AnyReactComponent = ({ text }) => <div>{text}</div>;
	const defaultProps = {
		center: {
		  lat: 53.5439,
		  lng: 27.33
		},
		zoom: 11
	  };

	return (
		<div className="page__contacts">
			<h1>Contacting California Shop</h1>
			<h3>Sales and Product Inquiries</h3>
			<div className="container__contacts">
				<div className="contacts__item">
					<h4>California Online Store</h4>
					<p>California.com is a convenient place to purchase Apple products and accessories from Apple and other manufacturers. You can buy online or call (800) MY–APPLE (800–692–7753).</p>
					<p>You can get information about an order you placed on the Apple Online Store through the Order Status page. If you prefer, you can also get order status or make changes by phone at (800) 692–7753.</p>
				</div>
				<div className="contacts__item">
					<h4>How to Buy for Business</h4>
					<p>If you are a business or professional user, visit the<br/>California Store for Business or call 1–800–854–3680.</p>
					<p>Corporate and Government Sales:</p>
					<ul>
						<li>California Enterprise Sales (877) 412–7753</li>
						<li>California Government Sales (877) 418–2573</li>
					</ul>
				</div>
			</div>
				<div className="container__contacts">
					<div className="contacts__item">
						<h4>Shop with SignTime ASL Support</h4>
						<p>American Sign Language (ASL) interpreters are available for all your online shopping needs, right in your web browser.</p>
					
					</div>

					<div className="contacts__item">
						<h4>Find California Authorized Resellers</h4>
						<p>Use our Reseller Locator to find an Apple Authorized Reseller in the U.S.</p>
						<p>California Authorized Resellers offer industry expertise, multi-platform services, and Mac-based solutions for a wide variety of organizations.</p>
					
					</div>

					

				</div>

				<div className="map__google_container" style={{ height: '100vh', width: '100%' }}>
						<GoogleMapReact 
						bootstrapURLKeys={{ key: "" }}
						defaultCenter={defaultProps.center}
						defaultZoom={defaultProps.zoom}
						>
						<AnyReactComponent
						lat={70.955413}
						lng={30.337844}
						text="California shop"
						/>
						</GoogleMapReact>
					</div>
		</div>
	);
}

export default Contacts;