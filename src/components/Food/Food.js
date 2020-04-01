import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link

} from "react-router-dom";
import Breakfast from '../FoodComponent/Breakfast';
import Lunch from '../FoodComponent/Lunch';
import Dinner from '../FoodComponent/Dinner';
import './Food.css';
import Delivery from '../Delivery/Delivery';


const Food = () => {
    return (

        <div className="food_area">
            <Container className="section_padding">
                <div className="food">
                    <div className="food_nav">
                        <Router>

                            <Nav className="justify-content-center foodMenu" activeKey="/lunch" >
                                <Nav.Item>
                                    <Nav.Link to="/breakfast" href="/breakfast">Breakfast</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link to="/lunch" href="/lunch">Lunch</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link to="/dinner" href="/dinner">Dinner</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Switch>
                                <Route path="/breakfast">
                                    <Breakfast></Breakfast>
                                </Route>
                                <Route path="/lunch">
                                    <Lunch></Lunch>
                                </Route>
                                <Route path="/dinner">
                                    <Dinner></Dinner>
                                </Route>
                                <Route path="/delivery">
                                    <Delivery></Delivery>
                                </Route>
                                <Route exact path="/">
                                    <Lunch></Lunch>
                                </Route>


                            </Switch>
                           
                        </Router>
                    </div>

                </div>

            </Container>
        </div>
    );
};

export default Food;