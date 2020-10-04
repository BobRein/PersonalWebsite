import React from 'react';
import './Header.css';
import Spacer from'./Spacer';

class Header extends React.Component {
    render() {
        return (
            <div className="myheader" >
                <br></br>
                <img src="https://i.imgur.com/0PHCnxu.png" width="75" height="75" alt="" />
                <Spacer/> 
                <p>Hi, my name is </p>
                <p className = "name">Bob Rein</p>
                <p>I am a software engineer and a senior at Baylor University. </p>
            </div>
        );
    }
  }

export default Header;