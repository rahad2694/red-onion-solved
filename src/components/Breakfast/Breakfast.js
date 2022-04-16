import React, { useEffect, useState } from 'react';
import Body from '../Body/Body';
import BreakfastSingle from './BreakfastSingle';

const Breakfast = () => {
    const [data, setdata] = useState([]);
    useEffect(() => {
        fetch('breakfastData.json')
            .then(res => res.json())
            .then(data => setdata(data))
    }, []);
    console.log(data);
    return (
        <div>
            <Body></Body>
            <div className='grid grid-cols-3 gap-10 mx-10 my-5'>
                {
                    data.map(ietm => <BreakfastSingle key={ietm.id} ietm={ietm} ></BreakfastSingle>)
                }
            </div>
        </div>
    );
};

export default Breakfast;
