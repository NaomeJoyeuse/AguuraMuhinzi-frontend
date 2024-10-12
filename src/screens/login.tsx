import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import IcoPlant from '../asesst/Icons/Ico_plant.tsx'; // Adjust the path as necessary

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login data submitted:', { email, password });
  };

  const handleSignUp = () => {
    navigate('/signup'); 
  };

  const handleLogoClick = () => {
    navigate('/'); // Navigate to the landing page
  };

  return (
    <section className="p-3 p-md-5" style={{ minHeight: '100vh' }}>
      <div className="container">
        <div className="card border-light shadow-sm" style={{ height: '70vh', width: '100vh', margin: 'auto' }}>
          <div className="row g-0">
            <div className="col-12 col-md-6">
              <div className="card-body p-3 p-md-4" style={{ marginTop: '30px' }}>
                <div className="d-flex align-items-center mb-4" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
                  <IcoPlant width="35" height="35" />
                  <span className="navbar-brand ms-2" style={{ fontWeight: '600', fontSize: '1.5rem' }}>AguuraMuhinzi</span>
                </div>
                <h2 className="h3 mb-4">Login</h2>
                <h3 className="fs-6 fw-normal text-secondary mb-4">Enter your credentials to access your account</h3>
                <form style={{ marginTop: '40px' }} onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="name@example.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="password" className="form-label">Password <span className="text-danger">*</span></label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="d-grid">
                    <button className="btn btn-primary" style={{ backgroundColor: '#395B28' }} type="submit">Login</button>
                  </div>
                </form>
                <div className="mt-3">
                  <p className="m-0 text-secondary text-center">
                    Don't have an account? 
                    <button onClick={handleSignUp} className="link-primary text-decoration-none" style={{ background: 'none', border: 'none', padding: 0 }}>
                      Sign up
                    </button>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6" style={{ backgroundImage: 'url(woman.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '70vh', width: '50%' }}>
              {/* Background Image */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
