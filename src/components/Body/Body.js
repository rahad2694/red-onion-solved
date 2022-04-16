import React from 'react';
import Options from '../Options/Options';
import './Body.css';

const Body = () => {
    return (
        <div>
            <div className="p-40 mt-1 mb-10" id='backgroud-image'>
                <h1 className='text-xl my-2'>Best foor waiting for your belly</h1>
                <input className='p-2 rounded-xl' type="text" placeholder='Search food items' name="" id="" />
                <button className='bg-red-600 text-white rounded-xl p-2'>Search</button>
            </div>
            <div id='options'>
                <Options></Options>
            </div>
        </div>
    );
};

export default Body;