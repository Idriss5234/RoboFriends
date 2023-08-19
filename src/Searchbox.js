import React from 'react';

function Searchbox({search}){
    return(
        <div className='pa2'>
           <input
            className='tc pa3 ba b--green bg-lightest-blue'
            type='search'
            placeholder='Search Robots here...'
            onChange={search}
        />
        </div>
    )
};

export default Searchbox;