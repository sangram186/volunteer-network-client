import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../Header/Header';
import AddEvent from './AddEvent';
import RegisterList from './RegisterList';

const Admin = () => {
    const [registerList, setRegisterList] = useState([]);

    const [displayItem, setDisplayItem] = useState(true);
    useEffect(() => {
        fetch('http://localhost:4000/allData')
        .then(res => res.json())
        .then(data => setRegisterList(data))
    }, [])

    
    return (
        <div className="container">
            <Header></Header>
            <Container>
                <Row>
                    <Col md={3}>
                        <button onClick={() => setDisplayItem(true)}>Volunteer Register list</button>
                        <button onClick={() => setDisplayItem(false)}>Add Event</button>
                    </Col>
                    <Col md={9}>
                        {
                            displayItem ? <RegisterList registerList={registerList}></RegisterList> : 
                            <AddEvent></AddEvent>
                        }
                        
                        
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Admin;