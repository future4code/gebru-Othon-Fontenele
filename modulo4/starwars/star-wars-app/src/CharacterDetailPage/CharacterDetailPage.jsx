import React from "react";

const CharacterDetailPage = (props) => {
    return (
        <div>
            <h1>Detalhes dos Personagens</h1>
            <p>{props.url}</p>
            <button onClick={props.goToListPage}>Voltar</button>
        </div>
    )
}

export default CharacterDetailPage;