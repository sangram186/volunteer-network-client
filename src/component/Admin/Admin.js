import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Header from '../Header/Header';
import AddEvent from './AddEvent';
import RegisterList from './RegisterList';

const Admin = () => {
    // const [registerList, setRegisterList] = useState([]);

    
    // useEffect(() => {
    //     loadAllData();
    // }, [])
    // const loadAllData = () => {
    //     fetch('https://blooming-chamber-56833.herokuapp.com/allData')
    //     .then(res => res.json())
    //     .then(data => setRegisterList(data))
    // }

    const [displayItem, setDisplayItem] = useState(true);
    return (
        <div className="container">
            <Header></Header>
            <Container>
                <Row>
                    <Col md={3}>
                        <Button className="mt-4" variant='link' onClick={() => setDisplayItem(true)}><span>🧑‍🤝‍🧑</span> Volunteer Register list</Button>
                        <Button variant='link' onClick={() => setDisplayItem(false)}><span>➕</span> Add Event</Button>
                    </Col>
                    <Col md={9}>
                        {
                            displayItem ? <RegisterList ></RegisterList> : 
                            <AddEvent></AddEvent>
                        }
                        
                        
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Admin;