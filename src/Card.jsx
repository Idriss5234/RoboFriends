import React, {Component} from 'react';

function Card({id,username,email}){
    return(
        <div className='tc bg-light-green br3 bw2 dib ma2 shadow-5 pa2 grow'>
            <img alt="robot" src={`https://robohash.org/${id}?size=200x200`}></img>
            <div>
                <h1>{username}</h1>
                <h3>{email}</h3>
            </div>
        </div>

    );
}

export default Card;