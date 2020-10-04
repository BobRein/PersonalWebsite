import './Contact.css';
import React from 'react';
class Contact extends React.Component {
    render() {
        return (
            <div>
                <div class="wrapper">
                    <a href="https://github.com/BobRein"><img src="https://image.flaticon.com/icons/png/512/25/25657.png" className="imageIcon" alt="Github" /></a>
                    <a href="https://www.linkedin.com/in/bob-rein/"><img src="https://image.flaticon.com/icons/png/512/61/61109.png" className="imageIcon" alt="LinkedIn" /></a>
                    <a href="mailto:bob_rein4@outlook.com"><img src="https://image.flaticon.com/icons/png/512/95/95612.png" className="imageIcon" alt="Email Me" /></a>
                </div>
            </div>
        );
    }
}

export default Contact;