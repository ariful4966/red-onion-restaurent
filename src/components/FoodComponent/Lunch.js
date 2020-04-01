import React from 'react';
import lunchData from '../../FoodData/lunchData'
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import FoodList from '../FoodList/FoodList';
import { Link } from 'react-router-dom';

const Lunch = () => {
    const lunch6 = lunchData.slice(0, 6);
    const [lunch, setLunch] = useState(lunch6);

    return (
        <div>
            <Row className="foodItem">
                {
                    lunch.map(fd => <FoodList food={fd}></FoodList>)
                }
            </Row>
            <div className="footCheckBtn">
                <Link to="/delivery"><button>Checkout Your Food</button></Link>
            </div>
            
        </div>
    );
};

export default Lunch;