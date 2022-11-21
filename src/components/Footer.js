import { Link } from "react-router-dom";
import Logo from '../images/logo.png';

function Footer() {
	return (
		<footer className="footer">
			<div className="footer__item footer__logo">
				<a href="/"><img src={Logo} alt="Company California" /></a>
				<p>Sign up for texts to be notified about our best offers on the perfect gifts.</p>
			</div>
			
			<div className='all__produts footer__item'>
				
				<ul>
					<h3>All products</h3>
					<li><Link to="/solutions/phones/">Phones</Link></li>
					<li><Link to="/solutions/watches/">Watches</Link></li>
					<li><Link to="/solutions/tablets/">Tablets</Link></li>
					<li><Link to="/solutions/laptops/">Laptops</Link></li>
				</ul>
				
			</div>

			<div className='company footer__item'>
				
				<ul>
					<h3>Company</h3>
					<li><Link to="/about/">About</Link></li>
					<li><Link to="/support/">Support</Link></li>
				</ul>
			</div>

			<div className="support footer__item">
				<ul>
					<h3>Support</h3>
					<li>Style Guide</li>
					<li>Licensing</li>
					<li>Change Log</li>
					<li><Link to="/contacts/">Contacts</Link></li>
				</ul>
			</div>

			<div className="follow__us footer__item">
				<ul>
					<h3>Follow Us</h3>
					<li><a href="https://www.facebook.com/apple/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
					<li><a href="https://ru.linkedin.com/" target="_blank" rel="noopener noreferrer">Limkedln</a></li>
					<li><a href="https://www.youtube.com/watch?v=ux6zXguiqxM" target="_blank" rel="noopener noreferrer">Youtube</a></li>
				</ul>
			</div>
		</footer>
	);
}

export default Footer;