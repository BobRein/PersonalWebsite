import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Line from './Line';
import Spacer from './Spacer'
class Experience extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <h3>{this.props.title}</h3>
                            <Line />
                        </Col>
                        <Col xs={12} lg={4}>
                            <img src="https://i.imgur.com/06ixj1q.png" width="100%" />
                            Chicago <span className="float-right">2020</span><br></br>
                            Software Engineer
                            <Line />
                            <ul>
                                <li>Developed routing template with React to help enterprise customers quickly automate their contract management workflows</li>
                                <li>Built .NET API endpoints with C# for scalable process scheduling within contract management</li>
                                <li>Completely redesigned a deadline chooser component with JavaScript and jQuery</li>
                                <li>Continued to work on the team with a fall internship while in school</li>
                            </ul>
                            <Spacer/>
                        </Col>
                        <Col xs={12} lg={4}>
                            <img src="https://i.imgur.com/ehI8QDe.png?1" width="100%" />
                            Oklahoma City <span className="float-right">2019</span><br></br>
                            Software Engineer
                            <Line />
                            <ul>
                                <li>Used Swift to develop a Siri compatible shortcuts system giving users quick access to their frequent actions</li>
                                <li>Won the intern coding competition with a review response mobile app</li>
                                <li>Added more extensive logging to the Paycom iOS app</li>
                            </ul>
                            <Spacer/>
                        </Col>
                        
                        <Col xs={12} lg={4}>
                            <img src="https://i.imgur.com/sUgsFXn.png?1" width="100%" />
                            Dallas <span className="float-right">2018</span><br></br>
                            IT
                            <Line />
                            <ul>
                                <li>Used Splunk search and reporting to securely on-board servers</li>
                                <li>Built multiple Salesforce community pages using Apex components</li>
                                <li>Worked with management to form best practices that allowed international teams to share code easily</li>
                            </ul>
                            <Spacer/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Experience;