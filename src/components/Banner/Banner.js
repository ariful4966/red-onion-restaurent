import React from 'react';
import { Container, InputGroup, FormControl, Row, Button } from 'react-bootstrap';
import './Banner.css'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="banner_area">
            <Container>
                <Row className="justify-content-md-center align-items-center bannerHight">
                    <div className="bannerBox">
                        <div className="bannerDtails ">
                            <h1>Best Food Waiting for your bally </h1>
                            <form action="" className="from-control">

                                <InputGroup className="mb-3 subRedious searchArea">
                                    <FormControl type="text" placeholder="Search food Item"></FormControl>
                                    <Link className="text-white btnOnion" variant="outline-secondary">Search</Link>
                                </InputGroup>

                            </form>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;