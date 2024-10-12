// src/components/Service.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/service.css'; // Import the CSS file
import Flex from '../Styles/styledComponent/Flex.ts';

function Service() {
    return (
        <div className="container mt-5 service-background" style={{ paddingTop: '40px' }}>
            <h2 className="text-center mb-2 display-5">Our Services</h2>
            <div className="row">
                <div className="col-md-4 mb-4">
                    <div className="card h-100">
                        <img src="tomato.jpg" className="card-img-top service-image" alt="Buy Fresh Products" />
                        <div className="card-body">
                            <h5 className="card-title">Buy Fresh Products</h5>
                            <p className="card-text">
                                We connect you with local farmers to provide fresh and organic fruits and vegetables directly to your table.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card h-100">
                        <img src="harvest.jpg" className="card-img-top service-image" alt="Sell Your Products" />
                        <div className="card-body">
                            <h5 className="card-title">Sell Your Products</h5>
                            <p className="card-text">
                                Farmers can easily list their products and connect with buyers, expanding their market reach.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card h-100">
                        <img src="african.jpg" className="card-img-top service-image" alt="Crop Yield Forecast" />
                        <div className="card-body">
                            <h5 className="card-title">Crop Yield Forecast</h5>
                            <p className="card-text">
                                Get insights into expected crop yields, helping you plan better and maximize productivity.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;
