import React from 'react';
import {  Card, CardDeck } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './VolunreeringOption.css';

const VolunteeringOption = (props) => {
    const {img, title, id} = props.data;
    return (
        <div className='col-md-3 singleItem'> 
            <div className="img">
                <img src={img} alt=""/>
            </div>
            <div className="link">
                <Link to={`/volunteering/${id}`}>{title}</Link>
            </div>

            {/* <CardDeck>
                <Card className="card-image">
                    <Card.Img variant="top" src={img} />
                    <Link to={`/volunteering/${id}`} className="variant-option">{title}</Link>
                </Card>
            </CardDeck> */}
        </div>
    );
};

export default VolunteeringOption;