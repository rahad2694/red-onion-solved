import React, { useEffect, useState } from 'react';
import Body from '../Body/Body';
import DinnerSingle from './DinnerSingle';

const Dinner = () => {
    const [data, setdata] = useState([]);
    useEffect(() => {
        fetch('dinnerData.json')
            .then(res => res.json())
            .then(data => setdata(data))
    }, []);
    console.log(data);
    return (
        <div>
            <Body></Body>
            <div className='grid grid-cols-3 gap-10 mx-10 my-5'>
                {
                    data.map(ietm => <DinnerSingle key={ietm.id} ietm={ietm} ></DinnerSingle>)
                }
            </div>
        </div>
    );
};

export default Dinner;
