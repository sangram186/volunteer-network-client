import React from 'react';
import { Link } from 'react-router-dom';
import './VolunreeringOption.css';

const VolunteeringOption = (props) => {
    const {img, title, id} = props.data;

    const sessionData = sessionStorage.getItem('userData');
    const userData = JSON.parse(sessionData)

    !userData.email && sessionStorage.setItem('userData', JSON.stringify({email: "", name: ""}));
    return (
        <div className='col-md-3 singleItem'> 
            <div className="img">
                <img src={img} alt=""/>
            </div>
            <div className="link">
                <Link to={`/volunteering/${id}`}>{title}</Link>
            </div>
        </div>
    );
};

export default VolunteeringOption;