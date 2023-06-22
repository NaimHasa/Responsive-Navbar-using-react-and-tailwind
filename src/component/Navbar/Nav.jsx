import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Nav = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: 'Home', path: '/home' },
        { id: 2, name: 'Product', path: '/product' },
        { id: 3, name: 'Orders', path: '/orders' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'About', path: '/about' },
    ]
    return (
        <nav className='w-full bg-purple-600'>
            <div onClick={() => setOpen(!open)} className="h-8 w-6 md:hidden ">
                {
                    open ? <XMarkIcon /> : <Bars3Icon />
                }
            </div>

            {/* <span>{!open ? 'open' : 'close'}</span> */}
            <ul className={`md:flex justify-center text-center w-full bg-purple-600 text-white absolute md:static duration-500 ease-in  ${!open ? 'top-6' : 'top-[-120px]'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Nav;