import React from 'react';
import brackfastData from '../../FoodData/brackfastData'
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import FoodList from '../FoodList/FoodList';
import { Link } from 'react-router-dom';

const Breakfast = () => {
    const breakfast6 = brackfastData.slice(0, 6);
    const [breakfast, setBreakfast] = useState(breakfast6);
    return (
        <div>
            <Row className="foodItem">
                {
                    breakfast.map(fd => <FoodList food={fd}></FoodList>)
                }
            </Row>
            <div className="footCheckBtn">
                <Link to="/delivery"><button>Checkout Your Food</button></Link>
            </div>
            
        </div>
    );
};

export default Breakfast;