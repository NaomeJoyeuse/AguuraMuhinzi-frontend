import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
import Flex from './Styles/styledComponent/Flex.ts';
import globalStyle from './Styles/globalCss.ts';
import Land from './land.js';
import About from './components/about.js';
import Signup from './screens/signup.tsx';
import Login from './screens/login.tsx';

function App() {
  globalStyle(); // Apply global styles

  return (
    <Router>
      <Flex
        id="wrapper"
        data-testid="app"
        css={{
          position: 'relative',
          padding: '$2 $0',
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
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="#services">Services</Link>
            </li>
          </ul>
        </nav> */}

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Land />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/signup" element={<Signup />} /> 
          <Route path='/login' element={<Login />} />
        </Routes>
        {/* <Footer /> */}
      </Flex>
    </Router>
  );
}

export default App;
