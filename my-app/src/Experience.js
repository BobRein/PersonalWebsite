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
                                <li>The first thing I did</li>
                                <li>The second thing I did</li>
                                <li>The third thing I did</li>
                            </ul>
                        </Col>
                        <Col xs={12} lg={4}>
                            <img src="https://i.imgur.com/ehI8QDe.png?1" width="100%" />
                            Oklahoma City <span className="float-right">2019</span><br></br>
                            Software Engineer
                            <Line />
                            <ul>
                                <li>The first thing I did</li>
                                <li>The second thing I did</li>
                                <li>The third thing I did</li>
                            </ul>
                        </Col>
                        <Col xs={12} lg={4}>
                            <img src="https://i.imgur.com/sUgsFXn.png?1" width="100%" />
                            Dallas <span className="float-right">2018</span><br></br>
                            IT
                            <Line />
                            <ul>
                                <li>The first thing I did</li>
                                <li>The second thing I did</li>
                                <li>The third thing I did</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Experience;