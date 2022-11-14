import { Link } from "react-router-dom";
import Tooltip from "./Tooltip";

function Nav() {
	return (
        Tooltip(),
		<nav className="nav">
            <button className="nav_toggle"><label htmlFor="nav_toggle"></label></button>
            <input type="checkbox" id="nav_toggle"/>
            <ul>
                <li><Link className="toolTip" data-tooltip="Go to a home page!?" to="/">Home</Link></li>
                <li><Link className="toolTip" data-tooltip="Let's see all products" to="/allproducts/">All products</Link></li>
                <li className="dropdown_li">Solutions<img src="../imgs/arrow.png" alt="arrow"></img>
                    <ul className="dropdown_content">
                        <li><Link to="/solutions/laptops/">Laptops</Link></li>
                        <li><Link to="/solutions/phones/">Phones</Link></li>
                        <li><Link to="/solutions/watches/">Watches</Link></li>
                        <li><Link to="/solutions/tablets/">Tablets</Link></li>
                    </ul>
                </li>
                <li><Link className="toolTip" data-tooltip="Here's our story!" to="/about/">About</Link></li>
                <li><Link className="toolTip" data-tooltip="Have a problem?" to="/support/">Support</Link></li>
                
            </ul>
            <div className="tooltipElement"></div>
        </nav>
	);
}

export default Nav;