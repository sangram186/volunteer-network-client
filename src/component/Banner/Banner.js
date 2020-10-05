import React from 'react';
import { Button, FormControl, InputGroup, Jumbotron } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className="container">
            <Jumbotron className='banner'>
                <h1>I grow by helping people in need.</h1>
                <InputGroup  className='banner-search-bar m-auto mt-3'>
                    <FormControl
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary">Button</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Jumbotron>
        </div>
    );
};

export default Banner;