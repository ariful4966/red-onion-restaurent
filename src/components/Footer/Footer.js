import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../../images/logo.png';
import brackfast from '../../FoodData/brackfastData';
import { useState } from 'react';
import './Footer.css';

const Footer = () => {
    const food = brackfast.slice(0, 6)
    const [foood, setfoood] = useState(food);
    const footerStyle={
        backgroundColor:'#262626',
        color:'#fff'
    }
    return (
        <div className="footer_area" style={footerStyle}>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="footer_widget">
                            <h2><img src={logo} alt="" /></h2>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="footer_widget">
                            <h2></h2>
                            <ul>
                                {
                                    foood.map(fd => <li>{fd.name}</li>)
                                }
                            </ul>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="footer_widget">
                            <h2></h2>
                            <ul>
                            {
                                foood.map(fd => <li>{fd.key}</li>)
                            }
                        </ul>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={8}>
                        <p>Copyrith &copy; 2020 online food</p>
                    </Col>
                    <Col md={4}>
                        
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Footer;