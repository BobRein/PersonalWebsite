import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Spacer from './Spacer';
import Line from './Line';
class InfoBlock extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col xs={12} lg={4}>
                            <img src={this.props.image} width="100%" />
                        </Col>
                        <Col xs={12} lg={3}>
                            <Spacer/>
                        </Col>
                        <Col xs={12} lg={5}>
                            <h3>{this.props.title}</h3>
                            <Line/>
                            {this.props.description}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default InfoBlock;