import React from 'react';

const Header = () => {
	return(
		<header className="header">
			<a href="/" className="header__logo">
				<h2>d.otwoma</h2>
			</a>

			<nav className="header__nav">
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
		</header>
	)
}

export default Header;