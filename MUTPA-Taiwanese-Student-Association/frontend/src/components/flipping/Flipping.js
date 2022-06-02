import React from "react";
import "../../pages/home/App.css"
import "../../index.css";
import "../../global.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";

export default function Flipping() {
    return (
        <main>
            <section
                style={{
                    "background": "rgb(2, 76, 135)",
                    "border-top-right-radius": "20px",
                    "border-top-left-radius": "20px",
                }}
                id="carousel-large"
            >
                <div
                    id="carouselExampleIndicators"
                    class="carousel slide"
                    data-ride="carousel"
                    style={{"position": "relative"}}
                >
                    <ol
                        class="carousel-indicators"
                        style={{ "position": "absolute", "bottom": "-20px" }}
                    >
                        <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to="0"
                            class="active"
                        ></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="d-flex justify-content-around py-4">
                                <div class="col-3">
                                    <div
                                        class="card"
                                        style={{ "border-radius": "20px", "height": "70vh" }}
                                    >
                                        <div
                                            class="card-img"
                                            style={{ "width": "70%", "margin": "0 auto" }}
                                        >
                                            <img
                                                src="https://ik.imagekit.io/64grotxkwkd/oseon/mobile.png"
                                                alt="mobile development"
                                                width="100%"
                                            />
                                        </div>
                                        <div class="card-body text-center">
                                            <h5 style={{ "color": "#024C87" }}>
                                                Mobile App Development
                                            </h5>
                                            <p>
                                                Oeson is proficient in providing the best and unique
                                                mobile applications that fulfill almost every business’s
                                                demand in the present era. We have developed some
                                                applications so far in various verticals including hotel
                                                booking, real estate, e-Learning, image processing, home
                                                automation, food delivery, e-commerce and online ticket
                                                booking, etc.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div
                                        class="card px-2"
                                        style={{ "border-radius": "20px", "height": "70vh" }}
                                    >
                                        <div
                                            class="card-img"
                                            style={{ "width": "70%", "margin": "0 auto" }}
                                        >
                                            <img
                                                src="https://ik.imagekit.io/64grotxkwkd/oseon/web.png"
                                                alt="mobile development"
                                                width="100%"
                                            />
                                        </div>
                                        <div class="card-body text-center">
                                            <h5 style={{ "color": "#024C87" }}>Web Development</h5>
                                            <p>
                                                Oeson, a team of experienced IT professionals capable of
                                                delivering high quality, cost-effective web development
                                                solution to our customers worldwide. If you are looking
                                                for excellent outsourced web development services, Oeson
                                                is the best choice for you. Our main goal is to help our
                                                customers maximize their business potential.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div
                                        class="card"
                                        style={{ "border-radius": "20px", "height": "70vh" }}
                                    >
                                        <div
                                            class="card-img"
                                            style={{ "width": "70%", "margin": "0 auto" }}
                                        >
                                            <img
                                                src="https://ik.imagekit.io/64grotxkwkd/oseon/digital.png"
                                                alt="mobile development"
                                                width="100%"
                                            />
                                        </div>
                                        <div class="card-body text-center">
                                            <h5 style={{ "color": "#024C87" }}>
                                                Digital Marketing Services
                                            </h5>
                                            <p>
                                                Oeson’s expertise in Digital Marketing has helped many
                                                companies to achieve approximately 120% growth and 7 of
                                                our clients have generated around 40% profit from
                                                campaigns launched by us. Our marketing team is a group
                                                of certified and experienced professionals. We provide
                                                SEO, advertising, content development, social media and
                                                related services.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="d-flex justify-content-around py-4">
                                <div class="col-3">
                                    <div
                                        class="card"
                                        style={{ "border-radius": "20px", "height": "70vh" }}
                                    >
                                        <div
                                            class="card-img"
                                            style={{ "width": "70%", "margin": "0 auto" }}
                                        >
                                            <img
                                                src="https://ik.imagekit.io/64grotxkwkd/oseon/mobile.png"
                                                alt="mobile development"
                                                width="100%"
                                            />
                                        </div>
                                        <div class="card-body text-center">
                                            <h5 style={{ "color": "#024C87" }}>
                                                Mobile App Development
                                            </h5>
                                            <p>
                                                Oeson is proficient in providing the best and unique
                                                mobile applications that fulfill almost every business’s
                                                demand in the present era. We have developed some
                                                applications so far in various verticals including hotel
                                                booking, real estate, e-Learning, image processing, home
                                                automation, food delivery, e-commerce and online ticket
                                                booking, etc.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div
                                        class="card px-2"
                                        style={{ "border-radius": "20px", "height": "70vh" }}
                                    >
                                        <div
                                            class="card-img"
                                            style={{ "width": "70%", "margin": "0 auto" }}
                                        >
                                            <img
                                                src="https://ik.imagekit.io/64grotxkwkd/oseon/web.png"
                                                alt="mobile development"
                                                width="100%"
                                            />
                                        </div>
                                        <div class="card-body text-center">
                                            <h5 style={{ "color": "#024C87" }}>UI/UX Designing</h5>
                                            <p>
                                                Excellent User Interface has a tendency to leave a
                                                lasting impression. People are drawn to creative
                                                material because it not only attracts them but also
                                                persuades them to take action. Oeson provides
                                                high-quality, strategic UI/UX design services. In our
                                                team, we have some of the most creative and skilled
                                                people in the industry.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div
                                        class="card"
                                        style={{ "border-radius": "20px", "height": "70vh" }}
                                    >
                                        <div
                                            class="card-img"
                                            style={{ "width": "70%", "margin": "0 auto" }}
                                        >
                                            <img
                                                src="https://ik.imagekit.io/64grotxkwkd/oseon/digital.png"
                                                alt="mobile development"
                                                width="100%"
                                            />
                                        </div>
                                        <div class="card-body text-center">
                                            <h5 style={{ "color": "#024C87" }}>
                                                Digital Marketing Services
                                            </h5>
                                            <p>
                                                Oeson’s expertise in Digital Marketing has helped many
                                                companies to achieve approximately 120% growth and 7 of
                                                our clients have generated around 40% profit from
                                                campaigns launched by us. Our marketing team is a group
                                                of certified and experienced professionals. We provide
                                                SEO, advertising, content development, social media and
                                                related services.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a
                        class="carousel-control-prev"
                        href="#carouselExampleIndicators"
                        role="button"
                        data-slide="prev"
                    >
                        <span class="carousel-control-prev-icon" aria-hidden="false"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a
                        class="carousel-control-next"
                        href="#carouselExampleIndicators"
                        role="button"
                        data-slide="next"
                    >
                        <span class="carousel-control-next-icon" aria-hidden="false"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </section>

            <section class="pt-3" id="carousel-hold">
                <div class="d-flex justify-content-around align-items-center mb-3 py-4">
                    <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                        <div
                            id="carousel-1"
                            class="carousel slide border"
                            data-ride="carousel"
                            data-pause="false"
                        >
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="card" style={{ "border-radius": "20px"}}>
                                        <div class="card-img" style={{ "width": "75%", "margin": "0 auto" }}>
                                            <img
                                                src="https://ik.imagekit.io/64grotxkwkd/oseon/mobile.png"
                                                alt="mobile development"
                                                width="100%"
                                            />
                                        </div>
                                        <div class="card-body text-center">
                                            <h5 style={{ "color": "#024C87" }}>Mobile App Development</h5>
                                            <p>
                                                Oeson is proficient in providing the best and unique
                                                mobile applications that fulfill almost every business’s
                                                demand in the present era. We have developed some
                                                applications so far in various verticals including hotel
                                                booking, real estate, e-Learning, image processing, home
                                                automation, food delivery, e-commerce and online ticket
                                                booking, etc.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="card" style={{ "border-radius": "20px"}}>
                                        <div class="card-img" style={{ "width": "80%", "margin": "0 auto" }}>
                                            <img
                                                src="https://ik.imagekit.io/64grotxkwkd/oseon/web.png"
                                                alt="mobile development"
                                                width="100%"
                                            />
                                        </div>
                                        <div class="card-body text-center">
                                            <h5 style={{ "color": "#024C87" }}>Web Development</h5>
                                            <p>
                                                Oeson, a team of experienced IT professionals capable of
                                                delivering high quality, cost-effective web development
                                                solution to our customers worldwide. If you are looking
                                                for excellent outsourced web development services, Oeson
                                                is the best choice for you. Our main goal is to help our
                                                customers maximize their business potential.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="card" style={{ "border-radius": "20px"}}>
                                        <div class="card-img" style={{ "width": "70%", "margin": "0 auto" }}>
                                            <img
                                                src="https://ik.imagekit.io/64grotxkwkd/oseon/digital.png"
                                                alt="mobile development"
                                                width="100%"
                                            />
                                        </div>
                                        <div class="card-body text-center">
                                            <h5 style={{ "color": "#024C87" }}>
                                                Digital Marketing Services
                                            </h5>
                                            <p>
                                                Oeson’s expertise in Digital Marketing has helped many
                                                companies to achieve approximately 120% growth and 7 of
                                                our clients have generated around 40% profit from
                                                campaigns launched by us. Our marketing team is a group
                                                of certified and experienced professionals. We provide
                                                SEO, advertising, content development, social media and
                                                related services.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="card" style={{ "border-radius": "20px"}}>
                                        <div class="card-img" style={{ "width": "80%", "margin": "0 auto" }}>
                                            <img
                                                src="https://ik.imagekit.io/64grotxkwkd/oseon/web.png"
                                                alt="mobile development"
                                                width="100%"
                                            />
                                        </div>
                                        <div class="card-body text-center">
                                            <h5 style={{ "color": "#024C87" }}>UI/UX Designing</h5>
                                            <p>
                                                Excellent User Interface has a tendency to leave a
                                                lasting impression. People are drawn to creative
                                                material because it not only attracts them but also
                                                persuades them to take action. Oeson provides
                                                high-quality, strategic UI/UX design services. In our
                                                team, we have some of the most creative and skilled
                                                people in the industry.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                        <div
                            id="carousel-2"
                            class="carousel slide"
                            data-ride="carousel"
                            data-pause="false"
                            style={{"position" : "relative"}}
                        >
                            <ol
                                class="carousel-indicators"
                                style={{"position": "absolute", "bottom": "-10px"}}
                            >
                                <li data-target="#carousel2" data-slide-to="0"></li>
                                <li
                                    data-target="#carousel2"
                                    data-slide-to="1"
                                    class="active"
                                ></li>
                                <li data-target="#carousel2" data-slide-to="2"></li>
                                <li data-target="#carousel2" data-slide-to="3"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div class="carousel-item">
                                    <div class="card" style={{ "border-radius": "20px"}}>
                                        <div class="card-img" style={{ "width": "75%", "margin": "0 auto" }}>
                                            <img
                                                src="https://ik.imagekit.io/64grotxkwkd/oseon/mobile.png"
                                                alt="mobile development"
                                                width="100%"
                                            />
                                        </div>
                                        <div class="card-body text-center">
                                            <h5 style={{ "color": "#024C87" }}>Mobile App Development</h5>
                                            <p>
                                                Oeson is proficient in providing the best and unique
                                                mobile applications that fulfill almost every business’s
                                                demand in the present era. We have developed some
                                                applications so far in various verticals including hotel
                                                booking, real estate, e-Learning, image processing, home
                                                automation, food delivery, e-commerce and online ticket
                                                booking, etc.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item active">
                                    <div class="card" style={{ "border-radius": "20px"}}>
                                        <div class="card-img" style={{ "width": "80%", "margin": "0 auto" }}>
                                            <img
                                                src="https://ik.imagekit.io/64grotxkwkd/oseon/web.png"
                                                alt="mobile development"
                                                width="100%"
                                            />
                                        </div>
                                        <div class="card-body text-center">
                                            <h5 style={{ "color": "#024C87" }}>Web Development</h5>
                                            <p>
                                                Oeson, a team of experienced IT professionals capable of
                                                delivering high quality, cost-effective web development
                                                solution to our customers worldwide. If you are looking
                                                for excellent outsourced web development services, Oeson
                                                is the best choice for you. Our main goal is to help our
                                                customers maximize their business potential.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="card" style={{ "border-radius": "20px"}}>
                                        <div class="card-img" style={{ "width": "70%", "margin": "0 auto" }}>
                                            <img
                                                src="https://ik.imagekit.io/64grotxkwkd/oseon/digital.png"
                                                alt="mobile development"
                                                width="100%"
                                            />
                                        </div>
                                        <div class="card-body text-center">
                                            <h5 style={{ "color": "#024C87" }}>
                                                Digital Marketing Services
                                            </h5>
                                            <p>
                                                Oeson’s expertise in Digital Marketing has helped many
                                                companies to achieve approximately 120% growth and 7 of
                                                our clients have generated around 40% profit from
                                                campaigns launched by us. Our marketing team is a group
                                                of certified and experienced professionals. We provide
                                                SEO, advertising, content development, social media and
                                                related services.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="carousel-item">
                                    <div class="card" style={{ "border-radius": "20px"}}>
                                        <div class="card-img" style={{ "width": "80%", "margin": "0 auto" }}>
                                            <img
                                                src="https://ik.imagekit.io/64grotxkwkd/oseon/web.png"
                                                alt="mobile development"
                                                width="100%"
                                            />
                                        </div>
                                        <div class="card-body text-center">
                                            <h5 style={{ "color": "#024C87" }}>UI/UX Designing</h5>
                                            <p>
                                                Excellent User Interface has a tendency to leave a
                                                lasting impression. People are drawn to creative
                                                material because it not only attracts them but also
                                                persuades them to take action. Oeson provides
                                                high-quality, strategic UI/UX design services. In our
                                                team, we have some of the most creative and skilled
                                                people in the industry.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a
                                class="carousel-control-prev"
                                href="#carousel2"
                                role="button"
                                data-slide="prev"
                            >
                                <span
                                    class="carousel-control-prev-icon"
                                    aria-hidden="true"
                                ></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a
                                class="carousel-control-next"
                                href="#carousel2"
                                role="button"
                                data-slide="next"
                            >
                                <span
                                    class="carousel-control-next-icon"
                                    aria-hidden="true"
                                ></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>

                    <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                        <div
                            id="carousel-3"
                            class="carousel slide"
                            data-ride="carousel"
                            data-pause="false"
                        >
                            <div class="carousel-inner">
                                <div class="carousel-item">
                                    <div class="card" style={{ "border-radius": "20px"}}>
                                        <div class="card-img" style={{ "width": "75%", "margin": "0 auto" }}>
                                            <img
                                                src="https://ik.imagekit.io/64grotxkwkd/oseon/mobile.png"
                                                alt="mobile development"
                                                width="100%"
                                            />
                                        </div>
                                        <div class="card-body text-center">
                                            <h5 style={{ "color": "#024C87" }}>Mobile App Development</h5>
                                            <p>
                                                Oeson is proficient in providing the best and unique
                                                mobile applications that fulfill almost every business’s
                                                demand in the present era. We have developed some
                                                applications so far in various verticals including hotel
                                                booking, real estate, e-Learning, image processing, home
                                                automation, food delivery, e-commerce and online ticket
                                                booking, etc.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="card" style={{ "border-radius": "20px"}}>
                                        <div class="card-img" style={{ "width": "80%", "margin": "0 auto" }}>
                                            <img
                                                src="https://ik.imagekit.io/64grotxkwkd/oseon/web.png"
                                                alt="mobile development"
                                                width="100%"
                                            />
                                        </div>
                                        <div class="card-body text-center">
                                            <h5 style={{ "color": "#024C87" }}>Web Development</h5>
                                            <p>
                                                Oeson, a team of experienced IT professionals capable of
                                                delivering high quality, cost-effective web development
                                                solution to our customers worldwide. If you are looking
                                                for excellent outsourced web development services, Oeson
                                                is the best choice for you. Our main goal is to help our
                                                customers maximize their business potential.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item active">
                                    <div class="card" style={{ "border-radius": "20px"}}>
                                        <div class="card-img" style={{ "width": "70%", "margin": "0 auto" }}>
                                            <img
                                                src="https://ik.imagekit.io/64grotxkwkd/oseon/digital.png"
                                                alt="mobile development"
                                                width="100%"
                                            />
                                        </div>
                                        <div class="card-body text-center">
                                            <h5 style={{ "color": "#024C87" }}>
                                                Digital Marketing Services
                                            </h5>
                                            <p>
                                                Oeson’s expertise in Digital Marketing has helped many
                                                companies to achieve approximately 120% growth and 7 of
                                                our clients have generated around 40% profit from
                                                campaigns launched by us. Our marketing team is a group
                                                of certified and experienced professionals. We provide
                                                SEO, advertising, content development, social media and
                                                related services.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="card" style={{ "border-radius": "20px"}}>
                                        <div class="card-img" style={{ "width": "80%", "margin": "0 auto" }}>
                                            <img
                                                src="https://ik.imagekit.io/64grotxkwkd/oseon/web.png"
                                                alt="mobile development"
                                                width="100%"
                                            />
                                        </div>
                                        <div class="card-body text-center">
                                            <h5 style={{ "color": "#024C87" }}>UI/UX Designing</h5>
                                            <p>
                                                Excellent User Interface has a tendency to leave a
                                                lasting impression. People are drawn to creative
                                                material because it not only attracts them but also
                                                persuades them to take action. Oeson provides
                                                high-quality, strategic UI/UX design services. In our
                                                team, we have some of the most creative and skilled
                                                people in the industry.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
