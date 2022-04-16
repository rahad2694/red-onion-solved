import React from 'react';

const LunchSingle = ({ ietm }) => {
    const { name, info, price, img } = ietm;
    return (
            <div className= 'p-9 hover:border hover:shadow-xl'>
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <h1 className='font-bold'>{name}</h1>
                    <p className='text-gray-400'>{info}</p>
                    <p className='text-2xl'>${price}</p>
                </div>
        </div>
    );
};

export default LunchSingle;