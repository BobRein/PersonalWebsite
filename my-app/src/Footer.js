import React from 'react';
import './Footer.css';
import Spacer from'./Spacer';
import Contact from './Contact';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer" >
                <Spacer/>
               
                <Contact/>
            </div>
        );
    }
  }

export default Footer;