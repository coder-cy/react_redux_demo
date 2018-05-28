import React from 'react';
import './Tab.css';

export default ({titles, currIndex, handleClick}) => {
    return (
        <ul className="tab">
        {
            titles.map((title, index) => {
                return (
                    <li onClick={() => { handleClick(index) }} key={index} style={{background: currIndex === index ? 'red' : 'gray'}}>{title}</li>
                )
            })
        }
        </ul>
    )
}