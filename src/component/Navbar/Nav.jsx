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
        { id: 4, name: 'About', path: '/about' },
    ]
    return (
        <nav >
            {
                open ?
                    <XMarkIcon onClick={() => setOpen(!open)} className="h-6 w-6 text-blue-500" />
                    :
                    <Bars3Icon onClick={() => setOpen(!open)} className="h-6 w-6 text-blue-500" />
            }

            {/* <span>{!open ? 'open' : 'close'}</span> */}
            <ul className='md:flex justify-center text-center items-center text-red-500'>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Nav;