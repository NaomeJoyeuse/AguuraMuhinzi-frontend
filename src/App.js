
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import Router, Route, Routes, Link
import Flex from './Styles/styledComponent/Flex.ts';
import globalStyle from './Styles/globalCss.ts';
import Land from './land.js';
import Service from './components/service.js';
import About from './components/about.js';
import Footer from './components/footer.tsx';

function App() {
  globalStyle(); // Apply global styles

  return (
    <Router>
      <Flex
        id="wrapper"
        data-testid="app"
        css={{
          position: 'relative',
          padding: '$2 $10',
          '@bp1': {
            padding: '$2 $3',
          },
          '@bp2': {
            padding: '$2 $5',
          },
          '@bp5': {
            padding: '$2 $3',
          },
        }}
      >
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link> {/* Link to Home */}
            </li>
            <li>
              <Link to="/about">About</Link> {/* Link to About */}
            </li>
            <li>
              <Link to="#services">Services</Link> {/* Link to Services */}
            </li>
          </ul>
        </nav>

        <Flex css={{ imgBg: '' }} />
        <Flex css={{ meshBg: '' }} />

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Land />} /> {/* Render Land component for Home */}
          
          <Route path="/about" element={<About />} /> {/* Render About component */}
        </Routes>
        {/* <Footer /> */}
      </Flex>
    </Router>
  );
}

export default App;
