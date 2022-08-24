import React, {useRef, useState} from 'react';

const Header = () => {
	const [isActive, setIsActive] = useState(false);
	const navRef = useRef(null);
	const handleClick = () => {
		setIsActive(!isActive);

		isActive ? navRef.current.classList.add('nav__active'): navRef.current.classList.remove('nav__active');
	}
	return(
		<header className="header">
			<a href="/" className="header__logo">
				<h2>d.otwoma</h2>
			</a>

			<nav className="header__nav" ref = {navRef}>
				<ol className="header__nav--list">
					<li className="header__nav--list-item"> <a href="/">home</a> </li>
					<li className="header__nav--list-item"> <a href="/">about</a> </li>
					<li className="header__nav--list-item"> <a href="/">resume</a> </li>
					<li className="header__nav--list-item"> <a href="/">services</a> </li>
					<li className="header__nav--list-item"> <a href="/">skills</a> </li>
					<li className="header__nav--list-item"> <a href="/">my blog</a> </li>
					<li className="header__nav--list-item"> <a href="/">contact me</a> </li>
				</ol>
			</nav>
			<button className="hamburger" onClick = {handleClick}>
				<div className="hamburger__line"></div>
				<div className="hamburger__line"></div>
				<div className="hamburger__line"></div>
			</button>
		</header>
	)
}

export default Header;