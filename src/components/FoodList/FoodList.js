import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import './FoodList.css';


const FoodList = (props) => {
    // console.log(props.food);
    const { name, about, price, img, category, key } = props.food;
    return (
        <Col md={4} className="itemBox text-center ">
            
            <div className="lunchImg itemPic">
                <Link to={"/food/" + key}><img src={img} alt="" /></Link>
            
            </div>
            <div className="lunchDtails itemDetails">
            <Link to={"/food/"+ key}><h3>{name}</h3></Link>
                <p>{about}</p>
                <p>{category}</p>
                <h2>${price}</h2>
                <Link to={"/food/"+ key}><button className="more_btn">See More >></button></Link>
            </div>
        </Col>
    );
};

export default FoodList;