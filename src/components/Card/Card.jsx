import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import ShoppingCard from '../SoppingCard/ShoppingCard';

const Card = () => {
    const [Cards , setCards] = useState([]);
    useEffect(() => {
        fetch(' https://openapi.programming-hero.com/api/ai/tools')
        .then(res => res.json())
        .then(data => setCards(data.data.tools))
    },[]);

    const [show, setShow] = useState(false)
    const showAll = () =>{
        console.log('ami ace')

        setShow(true)
    }

    
    return (
        <>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
            {
                Cards.slice(0, show ? 12 :6).map(card => <ShoppingCard card={card}></ShoppingCard>)
            }
        </div>
        { !show &&
            <span onClick={showAll}>
                <Button>See more</Button>
            </span>
        }
        </>
    );
};

export default Card;