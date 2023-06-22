import React from 'react';
import Feature from '../Feature/Feature';


const PricingOption = ({ pricing }) => {
    const { features } = pricing;
    return (
        <div className=' bg-slate-500 p-8 m-3 rounded-md text-center  ' >
            <p className='text-white text-4xl'>${pricing.price}</p>
            <h1>
                <span className='text-2xl font-bold'>{pricing.name} </span>
                <span className='font-bold'>/Mon</span>

            </h1>

            {
                features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
            }

            <button className='bg-white w-full mt-16 p-3 rounded-md font-bold text-3xl hover:bg-green-400'>Buy Now</button>

        </div >
    );
};

export default PricingOption;