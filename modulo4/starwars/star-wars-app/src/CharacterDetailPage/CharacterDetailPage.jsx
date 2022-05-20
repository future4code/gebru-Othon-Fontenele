import React, { useEffect, useState } from "react";
import { getCharacterDetails, getPlanetDetails } from '../services/request';

const CharacterDetailPage = (props) => {
    const [details, setDatails] = useState({})
    const [planet, setPlanet] = useState({})

    useEffect(() => {
        getCharacterDetails(props.url, setDatails)
    }, [props.url])

    useEffect(() => {
        getPlanetDetails(details.homeworld, setPlanet)
    }, [details.homeworld])

 
    return (
        <div>
            <h1>Detalhes dos Personagens</h1>
            {details.name && planet.name ? 
                <div>
                    <p>Nome: {details.name}</p>
                    <p>Planeta de Origem: {planet.name}</p>
                </div> :
                <p>Carregando...</p>
        }
        <button onClick={props.goToListPage}>Voltar</button>
        </div>
    )
}

export default CharacterDetailPage;