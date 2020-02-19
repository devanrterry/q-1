import React from 'react';
import './CardContainer.css';
import './Card'

export default function CardContainer(props){
    return (
        <div className='container'>
            <h1>Card Container</h1>
            <Card/>
        </div>
    )
}