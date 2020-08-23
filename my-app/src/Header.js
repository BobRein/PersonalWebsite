import React from 'react';
import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <div class="myheader text-center" >
                <img src="https://i.imgur.com/0PHCnxu.png" width="75" height="75" alt="" />
                <div class="spacer col-12 container"></div><br></br>
                <h3>Hi, my name is </h3>
                <p class="name">Bob Rein</p>
                <h3>I am a software engineer and a senior at Baylor University. </h3>
            </div>
        );
    }
  }


export default Header;
