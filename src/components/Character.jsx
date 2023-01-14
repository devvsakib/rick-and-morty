import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Character = (character) => {

    return (
        <Link to={`/character/${character.id}`}>
            <div className='p-4 bg-white rounded-md'>
                <img src={character.image}
                    className="rounded-lg w-full"
                />
                <h3 className='text-[#234bac] font-semibold text-[2rem]'>{character.name}</h3>
                <p>Origin: {<span className='text-[#2ba] font-semibold'>{character.origin.name}</span>}</p>
                {/* <p>{console.log(character.episode[0])}</p> */}
            </div>
        </Link>
    )
}

export default Character