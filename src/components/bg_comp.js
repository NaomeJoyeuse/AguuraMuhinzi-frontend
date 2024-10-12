// import React from 'react';
// import Flex from "../Styles/styledComponent/Flex.ts";
// import globalStyle from './Styles/globalCss.ts'; // Adjust the import path if necessary

// function BackgroundComponent() {
//     return (
//         <div className={css({ container: true })}>
//             <div className= Flex={css({ imgBg: true })}></div>
//             <div className={css({ meshBg: true })}></div>
//         </div>
//     );
// }

// export default BackgroundComponent;

import React from 'react';
import Flex from '../Styles/styledComponent/Flex.ts'; // Adjust the import path if necessary

function BackgroundComponent() {
    return (
        <Flex css={{ position: 'relative' }}>
            <Flex className="imgBg" css={{ 
                width: "100%",
                height: "200vh",
                backgroundImage: "url('bg.jpg')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                opacity: "100%",
                position: "absolute",
                left: 0,
                top: 0,
                zIndex: 1,
            }} />
            <Flex className="meshBg" css={{ 
                width: "100%",
                height: "200vh",
                backgroundImage: "url('tomato.jpg')", // Specify mesh image if needed
                backgroundPosition: "center",
                backgroundSize: "cover",
                opacity: "25%",
                position: "absolute",
                left: 0,
                top: 0,
                zIndex: 0,
            }} />
        </Flex>
    );
}

export default BackgroundComponent;
