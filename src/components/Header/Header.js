import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='flex bg-white justify-between items-center py-2 px-6'>
            <div><Link className='text-4xl text-violet-700' to={'/'}>Crypto Cafe</Link></div>
            <div className='flex text-xl'>
                <CustomLink className='mr-3 p-2' to='/'>Home</CustomLink>
                <CustomLink className='mr-3 p-2' to='/coins'>Coins</CustomLink>
                <CustomLink className='mr-3 p-2' to='/contact'>Contact</CustomLink>
                <CustomLink className='mr-3 p-2' to='/about'>About</CustomLink>
            </div>
        </div>
    );
};

export default Header;