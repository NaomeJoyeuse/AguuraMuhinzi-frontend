// src/Land.tsx
import React from 'react';
import Flex from './Styles/styledComponent/Flex.ts'; // Adjust the import if needed
import globalStyle from './Styles/globalCss.ts'; // Adjust the import if needed
import Nav from './components/nav.tsx'; // Adjust the import if needed
import Main from './components/main.tsx'; // Adjust the import if needed
import Services  from './components/service.js';
import About from './components/about.js';
import Footer from './components/footer.tsx';
const Land = () => {
  globalStyle(); // Apply global styles

  return (
    <Flex
      id="wrapper"
      data-testid="land"
      css={{
        position: 'relative',
        padding: '$8 $10',
        width: '150vw', // Ensure this is formatted correctly for your CSS-in-JS solution
        '@bp1': {
          padding: '$9 $10',
        },
        '@bp2': {
          padding: '$2 $5',
        },
        '@bp5': {
          padding: '$2 $3',
        },
      }}
    >
  <Flex css={{ imgBg: '' }} />
  <Flex css={{ meshBg: '' }} />
      <Nav />
      <Main />
      <section id="services">
                <Services /> {/* Service component content */}
            </section>
       <About />
       <Footer />
    </Flex>
  );
};

export default Land;
