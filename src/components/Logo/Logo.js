import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css'
import brain from './brain.png';
const Logo = () => {
     
        return (
            <div className='ma4 mt0'>
                <Tilt className="Tilt br2 shadow" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
                  <div className="Tilt-inner">
                     <img style={{paddingTop: "15%"}} src={brain} alt="Brain"/>
                  </div>
                </Tilt>
            </div>
        )
}

export default Logo