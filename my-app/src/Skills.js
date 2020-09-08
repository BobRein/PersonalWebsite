import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Line from './Line';
class Skills extends React.Component {

    render() {
        const links = [
        "https://i.imgur.com/IUXGyoS.png",
        "https://i.imgur.com/v2qUmrt.png",
        "https://i.imgur.com/tQx6flx.png",
        "https://i.imgur.com/hAid8jA.png",
        "https://i.imgur.com/h6BwKbh.png",
        "https://i.imgur.com/j91LlH1.png",
        "https://i.imgur.com/7mKmvWE.png",
        "https://i.imgur.com/OzJQsiA.png",
        "https://i.imgur.com/IFEkLrh.png",
        "https://i.imgur.com/jB7AcTo.png",
        "https://i.imgur.com/KWLen2r.png",
        "https://i.imgur.com/ClsjzrR.png",
        "https://i.imgur.com/Zp7vqfd.png",
        "https://i.imgur.com/W0chTHA.png",
        "https://i.imgur.com/yu4VxNe.png",
        "https://i.imgur.com/YwXekOt.png",
        "https://i.imgur.com/ifXDVm1.png",
        "https://i.imgur.com/Y5jg5oS.png",
        "https://i.imgur.com/oO6C5p8.png",
        "https://i.imgur.com/zn0iYTS.png",
        "https://i.imgur.com/pTK6LJT.png",
        "https://i.imgur.com/dsm5wKZ.png",
        "https://i.imgur.com/TkjWCbw.png",
        "https://i.imgur.com/CQ6Ij4P.png"
        ]
        const listOfSkills = links.map((link) => <Col xs={6} sm={4} md={3} lg={2}><img src={link} className="p-4 w-100" /> </Col>);
        return (
            <div>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <h3>{this.props.title}</h3>
                            <Line />
                        </Col>
                        {listOfSkills}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Skills;