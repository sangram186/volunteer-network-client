import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import { loginInfo } from '../App';
import fakeData from '../fakeData';
import logo from '../logos/Group 1329.png';



const Register = () => {

    const history = useHistory();
    const { id } = useParams();
    const selectedData = fakeData.find(data => data.id === parseInt(id));
    // const { info } = useContext(loginInfo);
    // const { login,  } = info;
    // const { email, name } = login;
    const sessionData = sessionStorage.getItem('userInfo');
    const userData = JSON.parse(sessionData)
    const {name, email} = userData;

    const [allData, setAllData] = useState({
        fullName: name,
        email: email,
        description: '',
        date: '',
        title: selectedData.title,
        img: selectedData.img,
    });

    const handleData = e => {
        if (e.target.name === 'description') {
            const newData = { ...allData };
            newData.description = e.target.value;
            setAllData(newData);
        }
        if (e.target.name === 'date') {
            const newData = { ...allData };
            newData.date = e.target.value;
            setAllData(newData);
        }
    }


    const handleRegistration = e => {

        if (allData.email && allData.fullName) {
            const volunteerData = { ...allData };
            fetch('http://localhost:4000/addedOptions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(volunteerData),
            })
            
            history.push('/volunteering');
        }
        e.preventDefault();
    }


    return (
        <div style={{ width: '30%', margin: '0 auto' }}>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="register-form">
                <Form onSubmit={handleRegistration}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control name="name" type="text" value={name} />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control name="email" type="email" value={email} />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Control onBlur={handleData} name="date" type="date" placeholder="Date" />
                    </Form.Group>
                    <Form.Group >
                        <Form.Control onBlur={handleData} name="description" type="text" placeholder="Description" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control name="selectedData" type="text" defaultValue="Title" value={selectedData.title} />
                    </Form.Group>
                    <Button style={{ width: '100%' }} variant="primary" type="submit">
                        Registration
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Register;