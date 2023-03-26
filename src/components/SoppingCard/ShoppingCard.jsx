import React from 'react';

const ShoppingCard = (props) => {
    console.log(props)
    const {id,name, features,image,    } = props.card;
    return (
        <>
            <div className="card bg-accent text-whate shadow-xl">
                <figure><img className='w-full' src={image}/> </figure>
                <div className="card-body">
                <h2 className="card-title">Feature:</h2>
                <div className=''>
                {
                    features.map((feature,index) =>
                        // console.log(feature,index)
                        <p> {index +1} : {feature} </p>
                    )
                }
                </div>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                </div>
                </div>
            </div>
        </>
    );
};

export default ShoppingCard;