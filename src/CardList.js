import React from 'react';
import Card from './Card';

function CardList({ robot }) {
    return (
        <div>
            {robot.map(user => ( // the key mouhimmaaaaaaaaaaaaa
                <Card key={user.id} id={user.id} username={user.username} email={user.email} />
            ))}
        </div>
    );
}

export default CardList;
