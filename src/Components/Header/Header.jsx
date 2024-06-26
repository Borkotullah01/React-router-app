import { Link } from "react-router-dom";
import Carousel from "../Carousel/Carousel";

const Header = () => {
    return (
        <div>
            <div className="w-8/12 mx-auto">
                <div className="navbar bg-gradient-to-b from-[#1e8ffff5] to-[#1e8fff14] shadow-lg">
                  <div className="navbar-start">
                    <div className="dropdown">
                      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                      </div>
                      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                        <li><a>Item 3</a></li>
                      </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                  </div>
                  <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li> <Link to='/carousel'>Carousel</Link> </li>
                        <li> <Link to='/posts'>Posts</Link> </li>
                      <li> <Link to='/contact'>Contact</Link> </li>
                      <li> <Link to='/about'>About Us</Link> </li>
                    </ul>
                  </div>
                  <div className="navbar-end">
                    <a className="btn">Button</a>
                  </div>
                </div>
            </div>
        </div>
        
    );
};

export default Header;