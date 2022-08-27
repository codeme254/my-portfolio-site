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
					<li className="header__nav--list-item"> <a href="#home">home</a> </li>
					<li className="header__nav--list-item"> <a href="#about">about</a> </li>
					<li className="header__nav--list-item"> <a href="#projects">projects</a> </li>
					<li className="header__nav--list-item"> <a href="#skills">skills</a> </li>
					<li className="header__nav--list-item"> <a href="#resume">resume</a> </li>
					<li className="header__nav--list-item"> <a href="#repos-contact">contact me</a> </li>
					<li className="header__nav--list-item"> <a href="#repos-contact">best repos</a> </li>
					<li className="header__nav--list-item"> <a href="#influencers">my influencers</a> </li>

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