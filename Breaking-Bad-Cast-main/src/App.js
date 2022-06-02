import React, { useState, useEffect } from 'react';

import Header from './components/UI/Header'
import CharacterGrid from './components/Char/CharacterGrid'
import Search from './components/UI/Search'
import AddChar from './components/CRUD/AddChar'
import axios from 'axios';
import './App.css';

const App = () => {
  const [chars, setChars] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchChars = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

      setChars(result.data)
      setIsLoading(false)
    }

    fetchChars()
  }, [query])

  return (
    <div className='container'>
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} chars={chars} />
      <AddChar />
    </div>
  )
}

export default App;
