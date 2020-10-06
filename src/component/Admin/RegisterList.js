import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';

const RegisterList = () => {
    const [registerList, setRegisterList] = useState([]);

    
    useEffect(() => {
        loadAllData();
    }, [])
    const loadAllData = () => {
        fetch('https://blooming-chamber-56833.herokuapp.com/allData')
        .then(res => res.json())
        .then(data => setRegisterList(data))
    }



    const handleRemoveItem = (id) => {
        fetch(`https://blooming-chamber-56833.herokuapp.com/deleteFromAdmin/${id}`, {
            method: 'DELETE',
        })

        .then(res => res.json())
        .then(result => {
            console.log('deleted successfully')
        })
        loadAllData();
    }

    const [displayItem, setDisplayItem] = useState(true);
    return (
        <div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email Id</th>
                        <th>Registered Date</th>
                        <th>Volunteer List</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        registerList.map((data) => {
                            const {fullName, email, title, date, _id} = data
                            return (
                                
                                    displayItem && <tr>
                                    <td>{fullName}</td>
                                    <td>{email}</td>
                                    <td>{date}</td>
                                    <td>{title}</td>
                                    <td><Button variant="danger" onClick={() => handleRemoveItem(_id)}><span>❌</span></Button></td>
                                </tr>
                                
                            )
                        })
                    }

                </tbody>
            </Table>
        </div>
    );
};

export default RegisterList;