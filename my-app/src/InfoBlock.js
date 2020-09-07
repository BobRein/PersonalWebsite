import React from 'react';
import './InfoBlock.css'
import { Container, Row, Col } from 'react-bootstrap';
import Spacer from './Spacer';
class InfoBlock extends React.Component {
    render() {
        return (
            <div className="infoblock">
                <Container>
                    <Row>
                        
                        <Col xs={0} md={1}></Col>
                        <Col xs={12} md={4}>
                            <img src={this.props.image} width="100%" />
                        </Col>
                        <Col xs={12} md={2}>
                            <Spacer></Spacer>
                        </Col>
                        <Col xs={12} md={5}>
                            <h3>{this.props.title}</h3>
                            <hr className = "line" />
                            {this.props.description}
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default InfoBlock;