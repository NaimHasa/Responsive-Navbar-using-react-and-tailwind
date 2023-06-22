import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Feature = ({ feature }) => {
    return (
        <div className='flex items-center mt-4'>
            <CheckCircleIcon className="h-6 w-6  text-black bg-teal-200 rounded-full" />
            <p className='ml-4'>{feature}</p>

        </div>
    );
};

export default Feature;