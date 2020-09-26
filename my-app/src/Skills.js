import React from 'react';
import { Container, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Line from './Line';
class Skills extends React.Component {

    render() {
        const links = [
            { link: "https://i.imgur.com/IUXGyoS.png", name: "Data Sructures" },
            { link: "https://i.imgur.com/v2qUmrt.png", name: "JavaScript" },
            { link: "https://i.imgur.com/tQx6flx.png", name: "Linux" },
            { link: "https://i.imgur.com/hAid8jA.png", name: "Mobile App Development" },
            { link: "https://i.imgur.com/h6BwKbh.png", name: "Computer Networking" },
            { link: "https://i.imgur.com/j91LlH1.png", name: "React" },
            { link: "https://i.imgur.com/7mKmvWE.png", name: "Splunk" },
            { link: "https://i.imgur.com/OzJQsiA.png", name: "MySQL" },
            { link: "https://i.imgur.com/IFEkLrh.png", name: "Swift" },
            { link: "https://i.imgur.com/jB7AcTo.png", name: "UML Diagraming" },
            { link: "https://i.imgur.com/KWLen2r.png", name: "Angular" },
            { link: "https://i.imgur.com/ClsjzrR.png", name: "C#" },
            { link: "https://i.imgur.com/Zp7vqfd.png", name: "REST API" },
            { link: "https://i.imgur.com/W0chTHA.png", name: "Cyber Security" },
            { link: "https://i.imgur.com/yu4VxNe.png", name: "Assembly" },
            { link: "https://i.imgur.com/YwXekOt.png", name: "Bash" },
            { link: "https://i.imgur.com/ifXDVm1.png", name: "Twitter Bootstrap" },
            { link: "https://i.imgur.com/Y5jg5oS.png", name: "C programming" },
            { link: "https://i.imgur.com/oO6C5p8.png", name: "C++" },
            { link: "https://i.imgur.com/zn0iYTS.png", name: "Debugging" },
            { link: "https://i.imgur.com/pTK6LJT.png", name: "git" },
            { link: "https://i.imgur.com/dsm5wKZ.png", name: "HTML5" },
            { link: "https://i.imgur.com/TkjWCbw.png", name: "Java" },
            { link: "https://i.imgur.com/CQ6Ij4P.png", name: "JUnit testing" }
        ]
        const listOfSkills = links.map((skill) =>
            <OverlayTrigger
                key="top"
                placement="top"
                overlay={
                    <Tooltip id={`tooltip-top`}>
                        <h5>{skill.name}</h5>
                    </Tooltip>
                }
            >
                <Col xs={6} sm={4} md={3} lg={2}><img src={skill.link} className="p-4 w-100" /> </Col>
            </OverlayTrigger>);
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