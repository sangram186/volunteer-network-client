import React from 'react';
import Header from '../Header/Header';
import VolunteeringOption from '../VolunteeringOption/VolunteeringOption';
import fakeData from '../../fakeData';
import Banner from '../Banner/Banner';

const Home = () => {

    

    return (
        <>
            <Header></Header>
            <Banner></Banner>
            <div className="container helping-options">
                {
                    fakeData.map((data, id) => <VolunteeringOption data={data} key={id}></VolunteeringOption>)
                }
            </div>

        </>
    );
};

export default Home;