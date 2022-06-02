import React from 'react';
import "./Contact.css";
import "../../global.css"
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from '../../components/navbar/NavBar';
import Footer from '../../components/footer/Footer';

export default function Contact() {
	return (
		<body>
			<NavBar />

			<main class="d-flex" style={{"max-width": "100vw", "overflow-x": "hidden"}}>
				<div class="col-1" style={{"background": "#013966"}}/>
				<div class="col-11" style={{"background": "#024C87"}}>
					<div class="d-flex align-items-center" style={{"min-height": "100vh", "height": "fit-content"}}>
						<div class="d-flex align-items-center justify-content-around w-100">
							<div class="col-lg-3 no-small">
								<div class="d-flex justify-content-center" style={{"gap": "20px"}}>
									<div class="col" style={{"border-radius": "15px", "overflow": "hidden", "padding": "0"}}>
										<img src="https://i.imgur.com/Akrh6IP.png?4" alt="slice" width="100%"/>
									</div>
									<div class="col" style={{"border-radius": "15px", "overflow": "hidden", "padding": "0"}}>
										<img src="https://i.imgur.com/vRELccR.jpg?2" alt="slice" width="100%"/>
									</div>
								</div>
							</div>
							<div class="pt-3 w-100">
							<div class="w-100 d-flex flex-wrap justify-content-around align-items-center">
								<div class="col-lg-4 col-12 col-md-6 text-white">
									<h4>Contact Us Now</h4>
									<br/>
										<h6>Phone</h6>
										<div class="col">
											<p>
												Due to COVID-19 , our full team are working remotely,
												Please email us and requests a callback.
											</p>
										</div>
										<h6>Email</h6>
										<div class="col">
											<p href="mailto:melbunitpa@gmail.com">
												melbunitpa@gmail.com
											</p>
										</div>
										<h6>Association Location</h6>
										<div class="col">
											<p>
												The University of Melbourne
											</p>
										</div>
										<h6>Time</h6>
										<div class="col">
											<p>
												12:00 AM - 7:00 PM (AEST) <br/>&nbsp;
												 8:00 AM - 5:00 PM (NST)
											</p>
										</div>
								</div>
								<div class="col-lg-4 col-12 col-md-6">
										<div style={{"width": "400px", "height": "400px", "position": "relative"}}>
											<img src="https://i.imgur.com/uKhbw3Y.png" alt="contact" width="130%" style={{"position": "absolute"}}/>
										</div>
								</div>
							</div>
						</div>
							{/* <div class="col-lg-9 col-12 px-0">
								<form id="contact-form" class="text-white mx-auto" style={{"max-width": "700px"}} name="contact-form" method="post">
									<div class="col">
										<h1 style={{"font-weight": "bold"}}>Contact Us</h1>
									</div>
									<br/>
										<div class="d-flex">
											<div class="col">
												<label for="first-name">First Name</label>
												<input type="text" class="form-control" name="firstname" required/>
											</div>
											<div class="col">
												<label for="last-name">Last Name</label>
												<input type="text" class="form-control" name="lastname" required/>
											</div>
										</div>
										<div class="col py-1">
											<label for="email">Email</label>
											<input type="email" name="email" class="form-control" required/>
										</div>
										<div class="col py-1">
											<label for="mobile">Phone Number</label>
											<input type="tel" name="phone" class="form-control" required/>
										</div>
										<div class="col py-1">
											<label for="mobile">Comment or Message</label>
											<textarea rows="8" name="message" class="form-control"></textarea>
										</div>
										<div class="col pt-2">
											<button class="btn btn-light" type="submit">SEND MESSAGE</button>
										</div>
								</form>
							</div> */}
						</div>
					</div>
					<br/>
						
				</div>
				<div id="loader"/>
			</main>

			{/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.9617997481428!2d75.87983421439775!3d22.69246593428018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcdc9bc0b85d%3A0xe3a635799e9396f0!2s52%2C%207%2C%20Navlakha%20Rd%2C%20Shiv%20Moti%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh%20452001!5e0!3m2!1sen!2sin!4v1636442445668!5m2!1sen!2sin" width="100%" height="250" style="border:0;" allowfullscreen="" loading="lazy">
			</iframe> */}

			<Footer />
		</body>
	)
}
