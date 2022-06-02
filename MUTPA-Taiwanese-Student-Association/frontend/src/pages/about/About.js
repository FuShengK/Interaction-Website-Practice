import React from 'react';
import './About.css';
import '../../global.css';
import 'bootstrap/dist/css/bootstrap.css';

import NavBar from '../../components/navbar/NavBar';
import Footer from '../../components/footer/Footer';

export default function about() {

	// Set up other generation committee members
	// Either in backend database or in another js file

	return (
		<body className='about'>
			<NavBar />
			<br />
			<br />
			<br />
			<br />
			<main>
				<section class="container py-4 about-main">
					<div class="d-flex justify-content-around flex-wrap" style={{ "font-size": "large" }}>
						<div class="col-12 col-md-3 col-lg-3">
							<h1>Melbourne University</h1>
							<h1>Taiwanese Student Association</h1>
						</div>
						<div class="col-12 col-md-7 col-lg-6">
							<p style={{ "line-height": "165%", "font-size": "larger" }}>
								We are a Taiwanese-Student-based Association in the University of Melbourne, we hope to 
								support students in Melbourne with career planning and friendship connections.
							</p>
						</div>
					</div>
				</section>

				<section >
					<div class="container main-img-hold">
						<img src="https://i.imgur.com/wcdCIfQ.jpg" alt="about" width="100%" style={{ "transform": "scale(0.75)" }} />
					</div>
					<div class="main-img-hold-support"></div>
				</section>


				<section class="about-sec" style={{ "background": "#013966" }}>
					<br />
					<br />
					<div class="container text-white mt-5">
						<div class="py-3 pl-2" style={{ "border-left": "3px solid #0074FF" }}>
							<h5>Here We Are</h5>
						</div>
						<br />
						<div class="d-flex flex-wrap justify-content-around" style={{ "font-size": "large", "line-height": "30px" }}>
							<div class="col-12 col-md-6">
								<p style={{ "max-width": "480px" }}>
									Our committees are responsible for events planning and career advisory, give our members much assistance in 
									future job enquiries and Melbourne city life tips, also we do hold activities to connect students 
								</p>
							</div>
							<div class="col-12 col-md-6">
								<p style={{ "max-width": "480px" }}>
									We believe all of our members can go through all the barriers with our help, we want to strengthen our community 
									by inviting all the Taiwanese students from Melbourne University.
								</p>
							</div>
						</div>
					</div>
					<br />
					<div class="container d-flex flex-wrap stats">
						<div class="my-2 col-lg-3 col-6">
							<h3 style={{ "color": "white" }}>Total Alumni</h3>
							<h2 style={{ "color": "#E6B85C" }}>400+</h2>
						</div>
						<div class="my-2 col-lg-3 col-6">
							<h3 style={{ "color": "white" }}>Current Members</h3>
							<h2 style={{ "color": "#E6B85C" }}>200+</h2>
						</div>
						<div class="my-2 col-lg-3 col-6">
							<h3 style={{ "color": "white" }}>Committee Staff</h3>
							<h2 style={{ "color": "#E6B85C" }}>6</h2>
						</div>
						<div class="my-2 col-lg-3 col-6">
							<h3 style={{ "color": "white" }}>Total Generation</h3>
							<h2 style={{ "color": "#E6B85C" }}>4</h2>
						</div>
					</div>
				</section>

				<section style={{ "background": "#013966" }}>
					<br />
					<br />
					<br />
					<br />
				</section>

				<section style={{ "min-height": "32vh" }}>
					<div class="container border" style={{ "position": "relative" }}>
						<div class="col-lg-5 col-11 border px-4" style={{ "position": "absolute", "top": "-50px", "background": "#fff", "box-shadow": "0px 4px 4px rgba(0, 0, 0, 0.25)" }}>
							<div class="card-body px-4">
								<h2 style={{ "color": "#013C6C", "font-weight": "bold" }}>Let's Meet Our</h2>
								<h2 style={{ "color": "#013C6C", "font-weight": "bold" }}>Committee</h2>
								<br />
								<br />
								<div class="px-2 py-1" style={{ "border-left": "3px solid gray" }}>
									<h5>6 Members</h5>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section>
					<div class="container team-hold" style={{ "column-gap": "100px" }}>
						<div class="col-lg-5 col-11 col-md-10">
							<div class="team-card py-3 border">
								<div class="img">
									<div class="w-50 mx-auto">
										<img src="https://i.imgur.com/jCu9jMp.jpg" alt="people" width="100%" />
									</div>
								</div>
								<div class="card-body text-center">
									<h1>Dennis</h1>
									<h3>4th | Director</h3>
									<br />
									<div class="d-flex justify-content-around">
										<span class="logo-hold">
											<a href="/">
												<i class="fa fa-instagram"></i>
											</a>
										</span>
										<span class="logo-hold">
											<a href="/">
												<i class="fa fa-facebook"></i>
											</a>
										</span>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-5 col-11 col-md-10">
							<div class="team-card py-3 border">
								<div class="img">
									<div class="w-50 mx-auto">
										<img src="https://i.imgur.com/Ef4xrvN.jpg" alt="people" width="100%" />
									</div>
								</div>
								<div class="card-body text-center">
									<h1>Huang EJ</h1>
									<h3>4th | Vice Derector</h3>
									<br />
									<div class="d-flex justify-content-around">
										<span class="logo-hold">
											<a href="/">
												<i class="fa fa-instagram"></i>
											</a>
										</span>
										<span class="logo-hold">
											<a href="/">
												<i class="fa fa-facebook"></i>
											</a>
										</span>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-5 col-11 col-md-10">
							<div class="team-card py-3 border">
								<div class="img">
									<div class="w-50 mx-auto">
										<img src="https://i.imgur.com/6LmPH30.jpg" alt="people" width="100%" />
									</div>
								</div>
								<div class="card-body text-center">
									<h1>Adelaide Tan</h1>
									<h3>4th | Executive Secretary</h3>
									<br />
									<div class="d-flex justify-content-around">
										<span class="logo-hold">
											<a href="/">
												<i class="fa fa-instagram"></i>
											</a>
										</span>
										<span class="logo-hold">
											<a href="/">
												<i class="fa fa-facebook"></i>
											</a>
										</span>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-5 col-11 col-md-10">
							<div class="team-card py-3 border">
								<div class="img">
									<div class="w-50 mx-auto mt-5">
										<img src="https://i.imgur.com/WHbpgKO.jpg" alt="people" width="100%" />
									</div>
								</div>
								<div class="card-body text-center">
									<h1>Alan Lin</h1>
									<h3>4th | Financial Officer</h3>
									<br />
									<div class="d-flex justify-content-around">
										<span class="logo-hold">
											<a href="/">
												<i class="fa fa-instagram"></i>
											</a>
										</span>
										<span class="logo-hold">
											<a href="/">
												<i class="fa fa-facebook"></i>
											</a>
										</span>
									</div>
								</div>
							</div>
						</div>

						<div class="col-lg-5 col-11 col-md-10">
							<div class="team-card py-3 border">
								<div class="img">
									<div class="w-50 mx-auto">
										<img src="https://i.imgur.com/blmsh4m.jpg" alt="people" width="100%" />
									</div>
								</div>
								<div class="card-body text-center">
									<h1>Chloe Chen</h1>
									<h3>4th | Career Plan Officer</h3>
									<br />
									<div class="d-flex justify-content-around">
										<span class="logo-hold">
											<a href="/">
												<i class="fa fa-instagram"></i>
											</a>
										</span>
										<span class="logo-hold">
											<a href="/">
												<i class="fa fa-facebook"></i>
											</a>
										</span>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-5 col-11 col-md-10">
							<div class="team-card py-3 border">
								<div class="img">
									<div class="w-50 mx-auto">
										<img src="https://i.imgur.com/x83WzZl.png" alt="people" width="100%" />
									</div>
								</div>
								<div class="card-body text-center">
									<h1>Finn Lin</h1>
									<h3>4th | Events Plan Officer</h3>
									<br />
									<div class="d-flex justify-content-around">
										<span class="logo-hold">
											<a href="/">
												<i class="fa fa-instagram"></i>
											</a>
										</span>
										<span class="logo-hold">
											<a href="/">
												<i class="fa fa-facebook"></i>
											</a>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<br /><br />
				</section>

				<section style={{ "background": "#f6f6f6" }} class="py-3">
					<br />
					<div class="container text-center">
						<h4>
							As the only Taiwanese Student Association in the University of Melbourne, we have responsibilty to be the information centre of Taiwanese students.
						</h4>
					</div>
					<br /><br />
					<div class="text-center">
						<h2>OUR FEATURES</h2>
					</div>
					<br />
					<div class="d-flex flex-wrap justify-content-center">
						<div class="col-lg-4 col-10 feature-card">
							<div class="card-body">
								<div class="img">
									<img src="https://i.imgur.com/GzfnktV.png" alt="trophy" width="100%" />
								</div>
								<div class="text-center">
									<h4>Team Of Experts</h4>
									<h5>
										We are a team of passionate and responsible students who are <br />
										capable of dealing with general affairs regarding Taiwanese students.
									</h5>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-10 feature-card">
							<div class="card-body">
								<div class="img">
									<img src="https://i.imgur.com/UelOOkP.png" alt="tube" width="100%" />
								</div>
								<div class="text-center">
									<h4>Best of Advisory</h4>
									<h5>
										We have much resources to support our members' future career,<br />
										and hold several job events to help them understand the latest industry informations.<br />
										We also provides members subjects reviews, let them be prepared in any courses. 
									</h5>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-10 feature-card">
							<div class="card-body">
								<div class="img">
									<img src="https://i.imgur.com/jkvgm9S.png" alt="setting" width="100%" />
								</div>
								<div class="text-center">
									<h4>Life Saver</h4>
									<h5>
										In our community, we offer a big platform for our members to
										trade secondhand under high security<br/>
										also gives informations about restaurants, transportation, accommodation..., etc.
									</h5>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-10 feature-card">
							<div class="card-body">
								<div class="img">
									<img src="https://i.imgur.com/KJcsX0B.png" alt="lookup" width="100%" />
								</div>
								<div class="text-center">
									<h4>Fully Transparent</h4>
									<h5>
										We will make all the expenses public to all the members <br/>
										also have great communication channels from members to committees and among all members.
									</h5>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-10 feature-card">
							<div class="card-body">
								<div class="img">
									<img src="https://i.imgur.com/Xsxp0T0.png" alt="palm" width="100%" />
								</div>
								<div class="text-center">
									<h4>Reasonable</h4>
									<h5>
										We make reasonable charging on membership and all the costs in each events<br/>
										our members can join everytime and you can join anytime. 
									</h5>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-10 feature-card">
							<div class="card-body">
								<div class="img">
									<img src="https://i.imgur.com/Q0O2azO.png" alt="satisfaction" width="100%" />
								</div>
								<div class="text-center">
									<h4>Alumni Supports</h4>
									<h5>
										All our members will be bridged to hundreds of Alumni by our community <br/>
										we will invite Alumni to join events and provides secured contacts between members and Alumni.
									</h5>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>


			<Footer />
		</body>

	)
}
