import React, { useEffect, useState } from 'react'
import Character from './Character'

const List = () => {
    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch('https://rickandmortyapi.com/api/character')
            const { results } = await data.json()
            setCharacters(results)
            setLoading(false)
        }
        fetchData()
    }, [characters.length])

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
            </div>
        </div>
    )
}

export default List