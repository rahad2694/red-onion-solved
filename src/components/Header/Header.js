import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../../images/logo2.png'

const Header = () => {
    return (
        <div className='grid grid-cols-2 py-3 sticky top-0 bg-white'>
            <div className='mx-10'>
                <Link to='/'>
                    <img className='w-32' src={logo2} alt="" />
                </Link>
            </div>
            <div className='grid grid-cols-2'>
                <div>
                </div>
                <div className='flex justify-evenly'>
                    <div>
                        <Link to='/cart'><FontAwesomeIcon icon={faCartArrowDown} /></Link>
                    </div>
                    <div>
                        <Link to='/login'>Login</Link>
                    </div>
                    <div>
                        <Link to='/signup'>Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;