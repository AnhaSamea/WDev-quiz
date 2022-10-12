import React from 'react';
import { Link } from "react-router-dom";
import './Header.css'
const Header = () => {
    return (
        <nav className='nav flex bg-lime-900 p-4 justify-between text-lime-50'>
            <h2 className='font-bold text-3xl'>WDev Quiz</h2>

            <div>
                <Link className='p-3' to='/'>Home</Link>
                <Link className='p-3' to='/statistics'>Statistics</Link>
                <Link className='p-3' to='/blogs'>Blogs</Link>
            </div>
            

        </nav>
    );
};

export default Header;