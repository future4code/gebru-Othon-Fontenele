import axios from 'axios';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../constants/url';
import { CharacterCard } from './styled'

const CharacterListPage = () => {
    const [characterList, setCharacterList] = useState([])

    const getCharacterList = () => {
        axios.get(`${BASE_URL}/people/`)
        .then((response) => setCharacterList(response.data.results))
        .catch((error) => console.log("Erro:", error.message))
    }
     useEffect(() =>{
         getCharacterList()
     }, [])

    const showCharacters = () => {
        return characterList.map((character, index) => {
            return <CharacterCard key={index}>{character.name}</CharacterCard>
        })
    }

    return (
        <div>
            <h1>Lista de Personagens</h1>
            {showCharacters()}
        </div>)
}

export default CharacterListPage