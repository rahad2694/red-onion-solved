import React from 'react';
import { NavLink } from 'react-router-dom';
import Breakfast from '../Breakfast/Breakfast';
import Dinner from '../Dinner/Dinner';
import Lunch from '../Lunch/Lunch';

const Options = () => {
    return (
        <div>
            <div className='flex justify-evenly mx-56'>
                <NavLink className={({isActive})=>(isActive)?'text-red-500 border-2 px-2 rounded-xl':''} to='/breakfast'>Breakfast</NavLink>
                <NavLink className={({isActive})=>(isActive)?'text-red-500 border-2 px-2 rounded-xl':''} to='/lunch'>Lunch</NavLink>
                <NavLink className={({isActive})=>(isActive)?'text-red-500 border-2 px-2 rounded-xl':''} to='/dinner'>Dinner</NavLink>
            </div>
            {/* <Lunch></Lunch>
            <Breakfast></Breakfast>
            <Dinner></Dinner> */}
        </div>
    );
};

export default Options;