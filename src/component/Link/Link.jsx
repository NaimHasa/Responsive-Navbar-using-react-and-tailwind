import React, { useState } from 'react';

const Link = ({ route }) => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <li className='mr-12 text-2xl'>
                <a href={route.path}>{route.name}</a>
            </li>
        </div>
    );
};

export default Link;