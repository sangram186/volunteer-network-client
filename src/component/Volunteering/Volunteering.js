import React, {  useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Header from '../Header/Header';
import './Volunteering.css';

const Volunteering = () => {

    const sessionData = sessionStorage.getItem('userData');
    const userData = JSON.parse(sessionData)

    const [registeredData, setRegisteredData] = useState([]);
    useEffect(() => {
        loadAllData();
    }, [])

    const loadAllData = () => {
        fetch('https://blooming-chamber-56833.herokuapp.com/allData')
            .then(res => res.json())
            .then(data => setRegisteredData(data))
    }
    loadAllData();

    const filterWithEmail = registeredData.filter(data => data.email === userData.email);

    const handleCancel = (id) => {
        fetch(`https://blooming-chamber-56833.herokuapp.com/delete/${id}`, {
            method: 'DELETE',
            headers: { 'Accept': 'application/json' },
            'Content-Type': 'application/json',
        })
        loadAllData();
    }


    return (
        <div className="container">
            <Header></Header>
            <div className="single-registered-item row">
                {
                    filterWithEmail.map((data) => {
                        const { title, img, date, _id } = data;
                        return (

                            <div className="col-md-6 col-xs-12 d-flex mt-3 options">
                                <div className="img"><img src={img} alt="" /></div>
                                <div className="content ml-3">
                                    <h2>{title}</h2>
                                    <h3>{date}</h3>
                                    <Button className='d-block mt-3' variant="light" onClick={() => handleCancel(_id)}>Cancel</Button>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </div>
    );
};

export default Volunteering;