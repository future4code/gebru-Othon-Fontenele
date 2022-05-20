import React, { useState, useEffect } from 'react';
import { CharacterCard } from './styled'
import { getCharacterList } from '../services/request';

const CharacterListPage = (props) => {
    const [characterList, setCharacterList] = useState([])

    useEffect(() => {
         getCharacterList(setCharacterList)
     }, [])

    const showCharacters = () => {
        return characterList.map((character, index) => {
            return <CharacterCard onClick={() => props.goToDetailsPage(character.url)} key={index}>{character.name}</CharacterCard>
        })
    }

    return (
        <div>
            <h1>Lista de Personagens</h1>
            {showCharacters()}
        </div>)
}

export default CharacterListPage