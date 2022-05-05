import React, { useEffect, useState } from "react";
import axios from "axios";
import styledComponents from "styled-components";

const CharacterDetailPage = (props) => {
    const [details, setDatails] = useState({})
    const [planet, setPlanet] =useState({})

    useEffect(() => {
        getCharacterDetails()
    }, [props.url])

    useEffect(() => {
        getPlanetDetails()
    }, [details.homeworld])

    const getCharacterDetails = () => {
        axios.get(props.url)
        .then((response) => {
            setDatails(response.data)
        })
        .catch((error) => console.log(error.message))
    }

    const getPlanetDetails = () => {
        axios.get(details.homeworld)
        .then((response) => {
            setPlanet(response.data)
        })
        .catch((error) => console.log(error.message))
    }
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