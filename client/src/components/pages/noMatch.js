import React from 'react';
import { Link } from 'react-router-dom';

export default function() {
    return(
        <div className='no-match'>
            <h2>Couldnt find that page</h2>
            <Link className='return-home' to="/">Return Home</Link>
        </div>
    )
}