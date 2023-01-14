import React, { useState, useEffect } from 'react'
import List from './components/List';
import { Routes, Route } from 'react-router-dom';
import CharacterPage from './pages/Character';
function App() {
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
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={<List
          characters={characters}
          loading={loading}
        />} />
        <Route path='/character/:id' element={<CharacterPage
          characters={characters}
        />} />
      </Routes>
    </>
  )
}

export default App
