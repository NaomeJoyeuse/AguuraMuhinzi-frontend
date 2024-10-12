// src/components/About.js
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import Text from "../Styles/styledComponent/Text.ts";
import '../Styles/about.css'; // Import your custom CSS

function About() {
    return (
        <div className="container mt-5" style={{ position: "relative", zIndex: 1 }}>
            <h2 className="text-center mb-4">About Us</h2>
            <div className="row align-items-center mb-5">
                <div className="col-md-6">
                    <div className="image-wrapper">
                        <img src="adult.jpg" className="img-fluid" alt="Cooperatives" />
                    </div>
                </div>
                <div className="col-md-6">
                    <Text css={{ subhead1: "500" }}>
                        We empower local cooperatives by providing them with a platform to showcase their products. 
                        Our goal is to connect these cooperatives with consumers who value quality and sustainability.
                    </Text>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-md-6 order-md-2">
                    <div className="image-wrapper">
                        <img src="farmers.jpg" className="img-fluid" alt="Farmers" />
                    </div>
                </div>
                <div className="col-md-6 order-md-1">
                    <Text css={{ subhead1: "500" }}>
                        We support farmers by offering fair prices for their products and providing resources for sustainable farming practices. 
                        Together, we build a resilient agricultural community that benefits everyone.
                    </Text>
                </div>
            </div>
        </div>
    );
}

export default About;
