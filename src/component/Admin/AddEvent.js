import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import fakeData from '../../fakeData';

const AddEvent = () => {

    const [addItem, setAddItem] = useState({
        title: '',
        date: '',
        
    });

    const handleInput = e => {
        if(e.target.name === 'title') {
            const newData = {...fakeData}
            newData[e.target.title] = e.target.value;
            setAddItem(newData);
        }
        if(e.target.name === 'date') {
            const newData = {...fakeData}
            newData[e.target.title] = e.target.value;
            setAddItem(newData);
        }
        if(e.target.name === 'description') {
            const newData = {...fakeData}
            newData[e.target.title] = e.target.value;
            setAddItem(newData);
        }
    }
    return (
        <div style={{backgroundColor: '#e5e5e5', padding: '18px', borderRadius: '10px'}}>
            <Form>
                <Row>
                    <Col>
                        <Form.Label>Event Title</Form.Label>
                        <Form.Control onBlur={handleInput} name="title" placeholder="Event Title" />
                    </Col>
                    <Col>
                        <Form.Label>Event Date</Form.Label>
                        {/* <Form.Control onBlur={handleInput} name="date" placeholder="Event Date" /> */}
                        
                        <Form.Control onBlur={handleInput} name="date" type="date" placeholder="Date" />
                    
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Label>Description</Form.Label>
                        <Form.Control onBlur={handleInput} name="description" as="textarea" rows={3} />
                    </Col>
                    <Col>
                        <Form.Label>Banner</Form.Label><br></br>
                        <input type="file" name="" id=""/>
                    </Col>
                </Row>
            </Form>
            <Button>Submit</Button>
        </div>
    );
};

export default AddEvent;