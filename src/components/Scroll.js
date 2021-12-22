import React from 'react';

const Scroll = (props) =>{
    return (
        <div className='br4' style={{
            overflowY: 'scroll',
            border: '8px groove #706E7E',
            height: '780px',
            }}>
            {props.children};
        </div>

    );
};


export default Scroll;