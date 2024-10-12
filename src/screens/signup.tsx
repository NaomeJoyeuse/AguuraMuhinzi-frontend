import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Registration: React.FC = () => {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    profilePicture: null,
    location: '',
    fullname: '',
    TIN: '',
    cooperativeName: '',
    registrationDocument: null,
    membershipSize: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    }
  };

  const handleUserTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserType(e.target.value);
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <section className="p-3 p-md-4 p-xl-5">
      <div className="container">
        <div className="card border-light shadow-sm">
          <div className="row g-0">
            <div className="col-12 col-md-6" style={{ backgroundColor: '#395B28' }}>
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
                  <div className="col-12 mb-4">
                    <h2 className="h3">SIGNUP</h2>
                    <h3 className="fs-6 fw-normal text-secondary m-0">Become a member of our Community</h3>
                  </div>
                </div>
                {step === 1 && (
                  <form onSubmit={handleSubmit}>
                    <div className="row gy-2 gy-md-3 overflow-hidden">
                      <div className="col-12">
                        <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                        <input type="email" className="form-control" name="email" id="email" placeholder="name@example.com" required onChange={handleChange} />
                      </div>
                      <div className="col-12">
                        <label htmlFor="username" className="form-label">Username <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" name="username" id="username" placeholder="Username" required onChange={handleChange} />
                      </div>
                      <div className="col-12">
                        <label htmlFor="phoneNumber" className="form-label">Phone Number <span className="text-danger">*</span></label>
                        <input type="tel" className="form-control" name="phoneNumber" id="phoneNumber" placeholder="Phone Number" required onChange={handleChange} />
                      </div>
                      <div className="col-12">
                        <label htmlFor="password" className="form-label">Password <span className="text-danger">*</span></label>
                        <input type="password" className="form-control" name="password" id="password" required onChange={handleChange} />
                      </div>
                      <div className="col-12">
                        <label htmlFor="confirmPassword" className="form-label">Confirm Password <span className="text-danger">*</span></label>
                        <input type="password" className="form-control" name="confirmPassword" id="confirmPassword" required onChange={handleChange} />
                      </div>
                      <div className="col-12">
                        <label className="form-label">User Type <span className="text-danger">*</span></label>
                        <div className="d-flex flex-row">
                          <div className="form-check me-3">
                            <input className="form-check-input" type="radio" name="userType" id="farmer" value="farmer" required onChange={handleUserTypeChange} />
                            <label className="form-check-label" htmlFor="farmer">Farmer</label>
                          </div>
                          <div className="form-check me-3">
                            <input className="form-check-input" type="radio" name="userType" id="cooperative" value="cooperative" required onChange={handleUserTypeChange} />
                            <label className="form-check-label" htmlFor="cooperative">Cooperative</label>
                          </div>
                          <div className="form-check">
                            <input className="form-check-input" type="radio" name="userType" id="buyer" value="buyer" required onChange={handleUserTypeChange} />
                            <label className="form-check-label" htmlFor="buyer">Buyer</label>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-grid">
                          <button className="btn btn-primary" style={{ backgroundColor: '#395B28' }} type="submit">Next</button>
                        </div>
                      </div>
                    </div>
                  </form>
                )}
                {step === 2 && (
                  <div>
                    <h3 className="h5">Additional Information for {userType.charAt(0).toUpperCase() + userType.slice(1)}</h3>
                    {userType === 'buyer' && (
                      <form onSubmit={handleSubmit}>
                        <div className="row gy-2 gy-md-3 overflow-hidden">
                          <div className="col-12">
                            <label htmlFor="fullname" className="form-label">Full Name <span className="text-danger">*</span></label>
                            <input type="text" className="form-control" name="fullname" id="fullname" required onChange={handleChange} />
                          </div>
                          <div className="col-12">
                            <label htmlFor="location" className="form-label">Location <span className="text-danger">*</span></label>
                            <input type="text" className="form-control" name="location" id="location" required onChange={handleChange} />
                          </div>
                          <div className="col-12">
                            <label htmlFor="profilePicture" className="form-label">Profile Picture <span className="text-danger">*</span></label>
                            <input type="file" className="form-control" name="profilePicture" id="profilePicture" accept="image/*" required onChange={handleFileChange} />
                          </div>
                        </div>
                        <div className="col-12 mt-3">
                          <div className="d-grid">
                            <button className="btn btn-primary" style={{ backgroundColor: '#395B28' }} type="submit">Submit</button>
                          </div>
                        </div>
                      </form>
                    )}
                    {userType === 'cooperative' && (
                      <form onSubmit={handleSubmit}>
                        <div className="row gy-2 gy-md-3 overflow-hidden">
                          <div className="col-12">
                            <label htmlFor="cooperativeName" className="form-label">Cooperative Name <span className="text-danger">*</span></label>
                            <input type="text" className="form-control" name="cooperativeName" id="cooperativeName" required onChange={handleChange} />
                          </div>
                          <div className="col-12">
                            <label htmlFor="TIN" className="form-label">TIN <span className="text-danger">*</span></label>
                            <input type="text" className="form-control" name="TIN" id="TIN" required onChange={handleChange} />
                          </div>
                          <div className="col-12">
                            <label htmlFor="membershipSize" className="form-label">Membership Size <span className="text-danger">*</span></label>
                            <input type="number" className="form-control" name="membershipSize" id="membershipSize" required onChange={handleChange} />
                          </div>
                          <div className="col-12">
                            <label htmlFor="location" className="form-label">Location <span className="text-danger">*</span></label>
                            <input type="text" className="form-control" name="location" id="location" required onChange={handleChange} />
                          </div>
                          <div className="col-12">
                            <label htmlFor="registrationDocument" className="form-label">Registration Document <span className="text-danger">*</span></label>
                            <input type="file" className="form-control" name="registrationDocument" id="registrationDocument" required onChange={handleFileChange} />
                          </div>
                        </div>
                        <div className="col-12 mt-3">
                          <div className="d-grid">
                            <button className="btn btn-primary" style={{ backgroundColor: '#395B28' }} type="submit">Submit</button>
                          </div>
                        </div>
                      </form>
                    )}
                    {userType === 'farmer' && (
                      <form onSubmit={handleSubmit}>
                        <div className="row gy-2 gy-md-3 overflow-hidden">
                          <div className="col-12">
                            <label htmlFor="fullname" className="form-label">Full Name <span className="text-danger">*</span></label>
                            <input type="text" className="form-control" name="fullname" id="fullname" required onChange={handleChange} />
                          </div>
                          <div className="col-12">
                            <label htmlFor="TIN" className="form-label">TIN <span className="text-danger">*</span></label>
                            <input type="text" className="form-control" name="TIN" id="TIN" required onChange={handleChange} />
                          </div>
                          <div className="col-12">
                            <label htmlFor="location" className="form-label">Location <span className="text-danger">*</span></label>
                            <input type="text" className="form-control" name="location" id="location" required onChange={handleChange} />
                          </div>
                        </div>
                        <div className="col-12 mt-3">
                          <div className="d-grid">
                            <button className="btn btn-primary" style={{ backgroundColor: '#395B28' }} type="submit">Submit</button>
                          </div>
                        </div>
                      </form>
                    )}
                    <div className="col-12 mt-3">
                      <div className="d-grid">
                        <button className="btn btn-secondary" type="button" onClick={handleBack}>Back</button>
                      </div>
                    </div>
                  </div>
                )}
                <div className="row mt-4">
                  <div className="col-12">
                    <hr className="mt-5 mb-4 border-secondary-subtle" />
                    <p className="m-0 text-secondary text-center">Already have an account? <a href="#!" className="link-primary text-decoration-none">Sign in</a></p>
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
