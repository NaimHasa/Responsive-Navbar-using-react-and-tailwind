import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {

    const pricingOption = [
        {
            id: 1, name: 'Free', price: 0, features: [
                'Everthing Feature Free',
                'Extra Feature',
                'Unnecessary Feature',
                'Will never use Feature',
                'Hudai Feature',
                'Ajaira Feature'
            ]
        },
        {
            id: 2, name: 'Medium', price: 9.99,
            features: [
                'Everthing Feature Medium',
                'Extra Feature',
                'Unnecessary Feature',
                'Will never use Feature',
                'Hudai Feature',
                'Ajaira Feature'
            ]
        },
        {
            id: 3, name: 'Premium', price: 19.99,
            features: [
                'Everthing Feature Premium',
                'Extra Feature',
                'Unnecessary Feature',
                'Will never use Feature',
                'Hudai Feature',
                'Ajaira Feature'
            ]
        }
    ]
    return (
        <div className=''>
            <h1 className='text-center font-extrabold text-4xl text-white bg-slate-400 p-8' >Best Deal of the Town</h1>
            <div className='grid md:grid-cols-3 gap-3 '>
                {
                    pricingOption.map(pricing => <PricingOption key={pricing.id} pricing={pricing}></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;