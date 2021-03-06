import React from 'react';

const Card = ({name, id, email}) => {
    // const {name, id, email} = props;
    return (
        <div className='bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5 tc'>
            <img alt='monsterphoto' src={`https://robohash.org/${id}?set=set2`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;