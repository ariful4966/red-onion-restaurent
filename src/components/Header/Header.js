import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import logo from '../../images/logo2.png';
import './Header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useAuth } from '../Login/useAuth';




const Header = () => {
    const auth = useAuth();
    console.log(auth);
    return (
        <div className="header_area bg-light">
            <Container>
                {/* Menu area start */}
                <Navbar bg="light" expand="lg" sticky="top">
                    <Navbar.Brand href="#home" className="logoSize">
                        <img src={logo} alt=""/>
                        
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <span></span>
                            <div className="foodItemCount">
                                <FontAwesomeIcon style={{fontSize:'28px'}} icon={faShoppingCart} />
                                <input type="submit" value="0" style={{backgroundColor:'none', border:'none', fontSize:'20px'}}/>
                            </div>
                            <div className="login_are">
                                <Link to="/login" className="btnOnion">Login</Link> 
                                <Link to="/login" className="btnOnion">Sign In</Link> 
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    );
};

export default Header;