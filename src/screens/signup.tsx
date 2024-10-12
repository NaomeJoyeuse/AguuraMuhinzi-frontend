// Registration.tsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Registration: React.FC = () => {
  return (
    <section className="p-3 p-md-4 p-xl-5">
      <div className="container">
        <div className="card border-light shadow-sm">
          <div className="row g-0">
            <div className="col-12 col-md-6 " style={{ backgroundColor: '#395B28' }}>
              <div className="d-flex align-items-center justify-content-center h-100">
                <div className="col-10 col-xl-8 py-3 text-center text-white">
                  <h2 className="h1 mb-4">Connect with Buyers, Grow Your Business</h2>
                  <p className="lead m-0">
                    AGRI-LINK helps you sell your crops directly to buyers, increasing your income and reducing reliance on middlemen.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="card-body p-3 p-md-4 p-xl-5">
                <div className="row">
                  <div className="col-12 mb-5">
                    <h2 className="h3">Registration</h2>
                    <h3 className="fs-6 fw-normal text-secondary m-0">Enter your details to register</h3>
                  </div>
                </div>
                <form action="#!">
                  <div className="row gy-3 gy-md-4 overflow-hidden">
                    <div className="col-12">
                      <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                      <input type="email" className="form-control" name="email" id="email" placeholder="name@example.com" required />
                    </div>
                    <div className="col-12">
                      <label htmlFor="username" className="form-label">Username <span className="text-danger">*</span></label>
                      <input type="text" className="form-control" name="username" id="username" placeholder="Username" required />
                    </div>
                    <div className="col-12">
                      <label htmlFor="password" className="form-label">Password <span className="text-danger">*</span></label>
                      <input type="password" className="form-control" name="password" id="password" required />
                    </div>
                    <div className="col-12">
                      <label htmlFor="confirmPassword" className="form-label">Confirm Password <span className="text-danger">*</span></label>
                      <input type="password" className="form-control" name="confirmPassword" id="confirmPassword" required />
                    </div>
                    <div className="col-12">
                      <label className="form-label">User Type <span className="text-danger">*</span></label>
                      <div className="d-flex flex-row">
                        <div className="form-check me-3">
                          <input className="form-check-input" type="radio" name="userType" id="farmer" value="farmer" required />
                          <label className="form-check-label" htmlFor="farmer">Farmer</label>
                        </div>
                        <div className="form-check me-3">
                          <input className="form-check-input" type="radio" name="userType" id="cooperative" value="cooperative" required />
                          <label className="form-check-label" htmlFor="cooperative">Cooperative</label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="userType" id="buyer" value="buyer" required />
                          <label className="form-check-label" htmlFor="buyer">Buyer</label>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-grid">
                        <button className="btn btn-primary" style={{ backgroundColor: '#395B28' }} type="submit">Sign up</button>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="row">
                  <div className="col-12">
                    <hr className="mt-5 mb-4 border-secondary-subtle" />
                    <p className="m-0 text-secondary text-center">Already have an account? <a href="#!" className="link-primary text-decoration-none">Sign in</a></p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <p className="mt-5 mb-4" >Or sign in with</p>
                    <div className="d-flex gap-3 flex-column flex-xl-row">
                      <a href="#!" className="btn btn-outline-primary">Google</a>
                      <a href="#!" className="btn btn-outline-primary">Facebook</a>
                      <a href="#!" className="btn btn-outline-primary">Twitter</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
