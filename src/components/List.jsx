import React, { useEffect, useState } from 'react'
import Character from './Character'

const List = ({characters, loading}) => {

    return (
        <div className='w-[90vw] mx-auto'>
            <h2 className='text-[3rem] py-5  font-bold text-white text-center uppercase'>Rick and Morty</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 align-middle justify-center'>

                {
                    loading ? (
                        <h3 className="text-center">Loading...</h3>
                    ) : (
                        characters.map((character) => (
                            <Character key={character.id} {...character} />
                        ))
                    )
                }
                {/* {
                    characters.map((ep, idx) => (
                        ep.id === 1 ? ep["episode"].map((e) => { console.log(e) }) : null
                    )
                    )
                } */}
            </div>
        </div>
    )
}

export default List