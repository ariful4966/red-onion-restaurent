import React from 'react';
import { useState } from 'react';
import dinnerData from '../../FoodData/dinnerData';
import FoodList from '../FoodList/FoodList';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Dinner = () => {
    const dinner6 = dinnerData.slice(0, 6);
    const [dinner, setDinner] = useState(dinner6);
    return (
        <div>
            <Row className="foodItem">
                {
                    dinner.map(fd => <FoodList food={fd}></FoodList>)
                }
            </Row>
            <div className="footCheckBtn">
                <Link to="/delivery"><button>Checkout Your Food</button></Link>
            </div>
            
        </div>

    );
};

export default Dinner;