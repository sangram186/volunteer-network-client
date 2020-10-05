import React, { useContext, useEffect, useState } from 'react';
import { loginInfo } from '../../App';
import Header from '../Header/Header';
import './Volunteering.css';

const Volunteering = () => {
    const { info } = useContext(loginInfo);
    const { login,  } = info;
    const { email,  } = login;
    const [registeredData, setRegisteredData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/allData')
            .then(res => res.json())
            .then(data => setRegisteredData(data))
    }, [])

    const filterWithEmail = registeredData.filter(data => data.email === email);

    const handleCancel = (id) => {
        fetch(`http://localhost:4000/delete/${id}`, {
            method: 'DELETE',
        })

        .then(res => res.json())
        .then(result => {
            console.log('delete successfully')
        })
        window.location.reload()
    }
    
    
    return (
        <div className="container">
            <Header></Header>
            <div className="single-registered-item">
            {
                email && filterWithEmail.map((data) => {
                    const { title, img, date, _id } = data;
                    return (
                        
                            <div className="col-md-6 col-xs-12" style={{ width: '50%', display: 'flex'}}>
                                <div className="img"><img src={img} alt=""/></div>
                                <div className="content">
                                    <h2>{title}</h2>
                                    <h3>{date}</h3>
                                    <button onClick={() => handleCancel(_id)}>Cancel</button>
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