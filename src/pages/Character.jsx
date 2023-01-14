import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
export default function CharacterPage({ characters }) {
    let { id } = useParams()
    const [episodes, setEpisodes] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
            const { episode } = await data.json()
            setEpisodes(episode)
        }
        fetchData()
    }, [])
    return (
        <div className='w-[90vw] sm:w-[80vw] p-5 sm:p-[2rem] mx-auto bg-white'>
            <div className='flex gap-[1rem] mb-10 flex-col sm:flex-row items-center'>
                <img src={characters[id - 1].image} alt={characters.name}
                    className="rounded-lg my-5"
                />
                <div>
                    <h1 className='text-[1.5rem]'>Name: <span className='font-semibold'>{characters[id - 1].name}</span></h1>
                    <h1 className='text-[1.5rem]'>Status: <span className='font-semibold'>{characters[id - 1].status}</span></h1>
                    <h1 className='text-[1.5rem]'>Species: <span className='font-semibold'>{characters[id - 1].species}</span></h1>
                    <h1 className='text-[1.5rem]'>Type: <span className='font-semibold'>{characters[id - 1].type ? characters[id - 1].type : "unknown"}</span></h1>
                    <h1 className='text-[1.5rem]'>Gender: <span className='font-semibold'>{characters[id - 1].gender}</span></h1>
                    <h1 className='text-[1.5rem]'>Origin: <span className='font-semibold'>{characters[id - 1].origin.name}</span></h1>
                    <h1 className='text-[1.5rem]'>Location: <span className='font-semibold'>{characters[id - 1].location.name}</span></h1>
                </div>
            </div>
            <div>
                <h3 className='text-xl font-semibold'>Episode:</h3>
                <ul className='grid grid-cols-1 sm:grid-cols-2'>
                    {
                        episodes.map((ep, idx) => (
                            <li key={idx}
                            className="py-2"
                            >Episode {idx}: {ep}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
