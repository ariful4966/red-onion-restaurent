import React from 'react';
import { Container, Row, Col, FormGroup, FormControl  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Delivery.css';


const Delivery = () => {
    return (
        <Container>
            <Row>
                <Col md={4}>
                    <div className="deliverDetails">
                        <h2>Edit Delivery Details</h2>
                        <form action="" className="deliveryForm">
                            <FormGroup>
                                <FormControl type="text" placeholder="Deliver to door" required></FormControl>
                                <FormControl type="text" placeholder="107 Rd 8" required></FormControl>
                                <FormControl type="text" placeholder="Flat , suite or floor" required></FormControl>
                                <FormControl type="text" placeholder="Business Name" required></FormControl>
                                <FormControl type="text" placeholder="Add Delivery Inductor" required></FormControl>
                                <FormControl type="submit" className=" btn-danger" Value="Save & Continue"></FormControl>
                            </FormGroup>
                        </form>
                    </div>
                </Col>
                <Col md={{ span: 3, offset: 5 }}>
                    <div className="cartArea">
                        <h1>Order Place Cart</h1>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Delivery;