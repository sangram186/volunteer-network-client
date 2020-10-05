import React, { useState } from 'react';
import { Table } from 'react-bootstrap';

const RegisterList = (props) => {
    console.log(props.registerList)



    const handleRemoveItem = (id) => {
        fetch(`http://localhost:4000/deleteFromAdmin/${id}`, {
            method: 'DELETE',
        })

        .then(res => res.json())
        .then(result => {
            console.log('delete successfully')
        })
        window.location.reload()
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
                        props.registerList.map(data => {
                            const {fullName, email, title, date, _id} = data
                            return (
                                
                                    displayItem && <tr>
                                    <td>{fullName}</td>
                                    <td>{email}</td>
                                    <td>{date}</td>
                                    <td>{title}</td>
                                    <td><button onClick={() => handleRemoveItem(_id)}><span>❌</span></button></td>
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