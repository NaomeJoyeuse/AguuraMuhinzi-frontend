// src/components/Footer.js
import React from 'react';
import Flex from '../Styles/styledComponent/Flex.ts'; // Adjust the import if needed

function Footer() {
    return (
        <Flex
            css={{
                // backgroundColor: '$primary600',
                color: '$onPrimary',
                padding: '1rem',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                top: '280px',
                width: '100%',
                textAlign: 'center',
            }}
        >
            <p>&copy; {new Date().getFullYear()} AguuraMuhinzi. All rights reserved.</p>
            <p>Follow us on:
                <a href="https://facebook.com" style={{ marginLeft: '5px' }}>Facebook</a> |
                <a href="https://twitter.com" style={{ marginLeft: '5px' }}>Twitter</a> |
                <a href="https://instagram.com" style={{ marginLeft: '5px' }}>Instagram</a>
            </p>
        </Flex>
    );
}

export default Footer;
