import React, { useEffect, useState } from 'react';
import Body from '../Body/Body';
import LunchSingle from './LunchSingle';

const Lunch = () => {
    const [data, setdata] = useState([]);
    useEffect(() => {
        fetch('lunchData.json')
            .then(res => res.json())
            .then(data => setdata(data))
    }, []);
    console.log(data);
    return (
        <div>
            <Body></Body>
            <div className='grid grid-cols-3 gap-10 mx-10 my-5'>
                {
                    data.map(ietm => <LunchSingle key={ietm.id} ietm={ietm} ></LunchSingle>)
                }
            </div>
        </div>
    );
};

export default Lunch;
