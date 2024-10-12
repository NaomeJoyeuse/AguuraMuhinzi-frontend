import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Seller: React.FC = () => {

    const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isDateOpen, setIsDateOpen] = useState(false);
  const [isRatingsOpen, setIsRatingsOpen] = useState(false);

  const togglePrice = () => setIsPriceOpen(!isPriceOpen);
  const toggleDate = () => setIsDateOpen(!isDateOpen);
  const toggleRatings = () => setIsRatingsOpen(!isRatingsOpen);
  return (
    <section style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      {/* Header */}
      <header
  className="text-white text-center py-3"
  style={{
    backgroundColor: '#395B28',
    borderBottom: '5px solid #2e4a1b',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  }}
>
  <h1 className="display-5 font-weight-bold">AguuraMuhinzi</h1>
  <p className="lead">Your platform for cooperatives and buyers to sell their harvest.</p>
  <a href="/login" className="btn btn-light" style={{ marginTop: '10px' }}>
    Explore More
  </a>
</header>


      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <div className="col-lg-3 col-md-4" style={{ backgroundColor: 'white', color: '#fff', padding: '20px', borderRadius: '10px' }}>
            <button
              className="btn btn-outline-light mb-3 w-100 d-lg-none"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span>Show filter</span>
            </button>

            <div className="collapse card d-lg-block mb-5" id="navbarSupportedContent">
              <div className="accordion" id="accordionPanelsStayOpenExample">
                {/* Related items */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button text-light bg-success"
                      type="button"
                      data-mdb-toggle="collapse"
                      data-mdb-target="#panelsStayOpen-collapseOne"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseOne"
                    >
                      Related items
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                  >
                    <div className="accordion-body">
                      <ul className="list-unstyled">
                        {['Vegetables', 'Grains', 'Fruits', 'Nuts', 'Herbs and Spices', 'Root Crops', 'Tubers'].map((item, index) => (
                          <li key={index} style={{ margin: '5px 0' }}>
                            <button
                              className="btn btn-light text-dark"
                              style={{
                                width: '100%',
                                padding: '10px',
                                textAlign: 'left',
                                borderRadius: '5px',
                              }}
                            >
                              {item}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

         
            {/* Price */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button text-light bg-success"
                  type="button"
                  onClick={togglePrice}
                >
                  Price
                </button>
              </h2>
              <div className={`accordion-collapse collapse ${isPriceOpen ? 'show' : ''}`}>
                <div className="accordion-body">
                  <input type="range" className="form-range mb-2" id="customRange1" />
                  <div className="row mb-3">
                    <div className="col-6">
                      <input type="number" className="form-control" placeholder="Min" />
                    </div>
                    <div className="col-6">
                      <input type="number" className="form-control" placeholder="Max" />
                    </div>
                  </div>
                  <button type="button" className="btn btn-light w-100">Apply</button>
                </div>
              </div>
            </div>
          

                {/* Date */}
                <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button text-light bg-success"
                  type="button"
                  onClick={toggleDate}
                >
                  Date
                </button>
              </h2>
              <div className={`accordion-collapse collapse ${isDateOpen ? 'show' : ''}`}>
                <div className="accordion-body">
                  <input type="date" className="form-control mb-2" />
                  <button type="button" className="btn btn-light w-100">Filter</button>
                </div>
              </div>
            </div>

                  {/* Ratings */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button text-light bg-success"
                  type="button"
                  onClick={toggleRatings}
                >
                  Ratings
                </button>
              </h2>
              <div className={`accordion-collapse collapse ${isRatingsOpen ? 'show' : ''}`}>
                <div className="accordion-body">
                  {[5, 4, 3, 2].map((rating, index) => (
                    <div className="form-check" key={index}>
                      <input className="form-check-input" type="checkbox" id={`rating${rating}`} />
                      <label className="form-check-label" htmlFor={`rating${rating}`}>
                        {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="col-lg-8 col-md-8">
            <header className="d-sm-flex align-items-center border-bottom mb-4 pb-2">
              <strong className="d-block py-2">32 Items found</strong>
              <div className="ms-auto">
                <select className="form-select d-inline-block w-auto border pt-1">
                  <option value="0">Best match</option>
                  <option value="1">Recommended</option>
                  <option value="2">High rated</option>
                  <option value="3">Randomly</option>
                </select>
                <div className="btn-group shadow-0 border">
                  <button className="btn btn-light" title="List view">
                    <i className="fa fa-bars fa-lg"></i>
                  </button>
                  <button className="btn btn-light active" title="Grid view">
                    <i className="fa fa-th fa-lg"></i>
                  </button>
                </div>
              </div>
            </header>

            <div className="row justify-content-center mb-4">
              {[...Array(12)].map((_, index) => (
                <div className="col-lg-4 col-md-6 d-flex mb-4" key={index}>
                  <div className="card w-100 shadow" style={{ borderRadius: '15px' }}>
                    <img src={`tomatoes.jpg`} className="card-img-top" alt={`Item ${index + 1}`} style={{ height: '250px', objectFit: 'cover', borderRadius: '15px 15px 0 0' }} />
                    <div className="card-body">
                      <h5 className="card-title">Item {index + 1}</h5>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="text-danger h6">$499</span>
                        <span className="text-muted"><s>$699</s></span>
                      </div>
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        <button type="button" className="btn btn-outline-danger" style={{ minWidth: '120px' }}>Add to cart</button>
                        <div className="rating">
                          {[...Array(5)].map((_, starIndex) => (
                            <span key={starIndex} className="fa fa-star" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center my-4">
                <li className="page-item disabled"><button className="page-link" tabIndex={-1}>Previous</button></li>
                <li className="page-item"><button className="page-link">1</button></li>
                <li className="page-item active"><button className="page-link">2</button></li>
                <li className="page-item"><button className="page-link">3</button></li>
                <li className="page-item"><button className="page-link">Next</button></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Seller;
