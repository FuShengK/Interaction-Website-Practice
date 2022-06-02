import React from 'react'
import CharacterItme from './CharacterItme'
import Spinner from '../UI/Spinner'

const CharacterGrid = ({ chars, isLoading }) => {
    return isLoading ? (<Spinner />) :
        (<section className='cards'>
            {chars.map((char) => (
                <CharacterItme key={char.char_id} char={char}></CharacterItme>
            ))}
        </section>)
}

export default CharacterGrid
