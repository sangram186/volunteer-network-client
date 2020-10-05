import React from 'react';
import { Button, FormControl, InputGroup, Jumbotron } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className="container text-center">
            <Jumbotron className='banner'>
                <h1 className='mb-4'>I grow by helping people in need.</h1>
                <InputGroup  className='banner-search-bar m-auto mt-5'>
                    <FormControl
                        placeholder="Search"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button variant="primary">Search</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Jumbotron>
        </div>
    );
};

export default Banner;