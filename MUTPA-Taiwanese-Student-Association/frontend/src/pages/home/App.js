import './App.css';
import '../../index.css';
import '../../global.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom"

import NavBar from '../../components/navbar/NavBar';
import Footer from '../../components/footer/Footer';

export default function App() {

    return (
        <div>
            <NavBar />

            <main>
                <section class="h100 index-hero">
                    <div class="d-flex h-100 align-items-center">
                        <div class="col text-white">
                            <h1 class="display-3" style={{ "font-weight": "600" }}>Melbourne University Taiwanese Student Association</h1>
                            <h1 class="display-3" style={{"font-weight": "600"}}>墨爾本大學臺灣學生會</h1>
                            <br />
                            <button class="btn btn-outline-light">
                                <Link class="text-white" to="/about">LEARN MORE</Link>
                            </button>
                        </div>
                    </div>
                </section>

                <section class="l100 porel">
                    <div class="d-flex flex-wrap">
                        <div class="col-lg-4 col-md-4 no-small">
                            <img src="https://i.imgur.com/WxuEg5L.jpg?1" alt="people" width="170%" />
                        </div>
                        <div class="col-lg-8 col-12 l100">
                            <div style={{ "margin-left": "auto", "height": "65%" }} class="py-4 col-12 col-md-10 col-lg-7">
                                <h3 style={{ "color": "rgb(47, 114, 194)", "margin-top": "15%" }}>MUTPA</h3>
                                <p style={{ "font-size": "x-large", "font-weight": "400" }}>
                                    We are Taiwanese Student Association and a big family for any Taiwanese student studying in the University of Melbourne
                                </p>
                                <p>
                                    We make strong connections among Taiwanese student studying in Melbourne
                                </p>
                            </div>
                            <div style={{ "height": "35%", "background": "#005" }} class="no-small"></div>
                        </div>
                    </div>
                    <div class="services py-2">
                        <div class="container p-1 bg-transparent">
                            <div class="d-flex flex-wrap justify-content-center bg-white">
                                <div class="col-11 col-md-6 col-lg-4 my-2">
                                    <div class="profile-img-circle" style={{ "background-image": "url('https://i.imgur.com/07TtjJD.png')" }} />
                                    <div class="card-body text-center">
                                        <h3 class="text-secondary">Consulting</h3>
                                        <h6>
                                            We are open to every Taiwanese student to come to ask questions.
                                        </h6>
                                        <p>
                                            Advisory services play a key role in MUTPA, and students will need assistance while just arrive in Australia without any friends or family.
                                        </p>
                                    </div>
                                </div>
                                <div class="col-11 col-md-6 col-lg-4 my-2 center">
                                    <div class="profile-img-circle" style={{ "background-image": "url('https://i.imgur.com/xBmh2ge.png')" }} />
                                    <div class="card-body text-center">
                                        <h3 class="text-secondary">Career</h3>
                                        <h6>
                                            We offer periodic job lecture delivered by Unimelb Alumni.
                                        </h6>
                                        <br />
                                        <p>
                                            We seek to offer quick and reliable solutions which are tailor-made according to your demands and expectation.
                                        </p>
                                    </div>
                                </div>
                                <div class="col-11 col-md-6 col-lg-4 my-2">
                                    <div class="profile-img-circle" style={{ "background-image": "url('https://i.imgur.com/swzAtX2.png')" }} />
                                    <div class="card-body text-center">
                                        <h3 class="text-secondary">Events</h3>
                                        <h6>
                                            We hold several gaming events and festival events.
                                        </h6>
                                        <br />
                                        <p>
                                            MUTPA ensure all the members or non-member Taiwanese students can make more friends and have fun in Unimelb.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 no-small">
                                <div class="d-flex justify-content-around pt-4 text-light">
                                    <img src="https://i.imgur.com/31ykxk1.png" alt="" />
                                    <span>
                                        Ask us any questions if you need help
                                    </span>
                                    <div>
                                        <span class="py-1 px-4" style={{ "border": "1.2px solid #0074FF", "border-radius": "20px" }}>
                                            <Link to="/contact" style={{ "color": "white", "margin": "0" }} >Send Inquiry <FaArrowCircleRight /></Link>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <br />

                <section style={{ "background": "rgba(240, 240, 240, 0.5)" }} class="py-4">
                    <div class="d-flex flex-wrap justify-content-around">
                        <div class="col-12 col-md-6 col-lg-4 d-flex flex-wrap my-2" id="services">
                            <div class="h-50 w-50 btn btn-outline-dark" style={{ "display": "grid", "place-items": "center" }}>
                                <h1>Clubs</h1>
                            </div>
                            <div class="h-50 w-50 btn btn-outline-dark" style={{ "display": "grid", "place-items": "center" }}>
                                <h1>Events</h1>
                            </div>
                            <div class="h-50 w-50 btn btn-outline-dark" style={{ "display": "grid", "place-items": "center" }}>
                                <h1>Friends</h1>
                            </div>
                            <div class="h-50 w-50 btn btn-outline-dark" style={{ "display": "grid", "place-items": "center" }}>
                                <h1>Future</h1>
                            </div>
                        </div>
                        <div class="col-10 col-md-5 col-lg-4 my-2">
                            <img src="https://i.imgur.com/i56DQL4.png" alt="customer support" width="100%" />
                            <div class="d-flex justify-content-center">
                                <Link class="py-2 px-3 btn btn-outline-dark" to="/contact">
                                    CONTACT US
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

