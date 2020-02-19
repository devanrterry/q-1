import React from 'react';
import './ExampleComponent.css';
import CardContainer from './CardContainer';

export default function ExampleComponent(props){
    return (
        <div className='container'>
            <h1>Hello, exampleComponent</h1>
            <CardContainer/>
        </div>
    )
}