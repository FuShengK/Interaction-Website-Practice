import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './NavBar.css'
import '../../global.css'

export default function NavBar() {
	const [isNavCollapsed, setIsNavCollapsed] = useState(true);

	const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

	return (

		<div>
			<header>

				<nav class="navbar navbar-dark navbar-expand-lg mx-6">
					<Link className="navbar-brand" to="/">
						<div class="logo-img-blue" />
					</Link>


					<button class="navbar-toggler text-white" type="button" data-toggle="collapse"
						data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded={!isNavCollapsed ? true : false}
						aria-label="Toggle navigation" onClick={handleNavCollapse}>
						{/* <span class="navbar-toggler-icon" style={{ "color": "white" }} ></span> */}
						<i class="fa fa-bars"></i>
					</button>

					<div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNavDropdown">
						<ul className="nav navbar-nav">
							<li className="nav-item">
								<Link className="nav-link" to="/about">About</Link>
							</li>

							<li className="nav-item">
								<Link className="nav-link" to="/contact">Contacts</Link>
							</li>

							{/* <li className="nav-item">
								<Link className="nav-link" to="/secondhand">Secondhand</Link>
							</li>
							
							<li className="nav-item">
								<Link className="nav-link" to="/subjectreview">SubjectReview</Link>
							</li>

							<li className="nav-item">
								<Link className="nav-link" to="/extended" >Extended</Link>
							</li>

							<li className="nav-item">
								<Link className="nav-link" to="/signin" >Sign In</Link>
							</li> */}

						</ul>
					</div>
				</nav>
			</header>
		</div>
	)
}



