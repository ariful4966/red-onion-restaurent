import React from 'react';
import { useParams } from 'react-router-dom';
import FoodData from '../../FoodData/index';
import { Row, Col, Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


// import FoodList from '../../FoodList/FoodList';


const FoodDetail = (props) => {

    const { foodKey } = useParams();
    const food = FoodData.find(fd => fd.key === foodKey);
    // console.log(food);
    
    const [count, setCount] = useState(0);
    const handleUp = () =>setCount(count+ 1);
    const handleDown = () => setCount(count-1); 
    
 
    
   
  
    return (

        <Container className="section_padding">
            <Row>
            <Col md={6}>
                <div className="contentArea">
                    <Row>
                    
                        <Col md={12}>
                            <h2>{food.name}</h2>
                            <p>{food.description}</p>
                            <div><strong id='price' style={{fontSize:'40px'}}>${food.price} </strong> <span><Button variant="light" onClick={handleDown}>-</Button><input type="submit" value={count}/><Button variant="light" onClick={handleUp}>+</Button></span></div>
                            <br />
                            <button className="btn-primary"><FontAwesomeIcon  icon={faShoppingCart} /> Add</button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <a href><img src={food.img} alt="" /></a>
                            <a href><img src={food.img} alt="" /></a>
                        </Col>

                    </Row>
                </div>
            </Col>
            <Col md={6}>
                <div className="picArea">
                    <img src={food.img} alt="" className="w-100" />
                </div>
            </Col>
        </Row>
        </Container>
    );
};

export default FoodDetail;