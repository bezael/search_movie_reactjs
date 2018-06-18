import React, { Component } from 'react'

export class Navbar extends Component{
	render(){
		return(
		<nav className="navbar is-dark">
		<div className="navbar-brand">
			<a className="navbar-item" href="/">
				<img 
					src="https://www.shareicon.net/download/2016/07/05/791306_cinema_512x512.png" 
					alt="Bulma: a modern CSS framework based on Flexbox" 
					 />
			</a>

		</div>

		<div id="navMenuColordark-example" className="navbar-menu">
			<div className="navbar-start">
				<a className="navbar-item" href="/">
					Home
				</a>

			</div>
		</div>
	</nav>

		)	
	}
}





