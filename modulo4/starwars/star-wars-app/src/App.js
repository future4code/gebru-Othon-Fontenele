import React, { useState } from "react";
import { Axios } from "axios";
import StyledComponents from "styled-components";
import CharacterListPage from "./CharacterListPage/CharacterListPage";
import CharacterDetailPage from "./CharacterDetailPage/CharacterDetailPage";


function App() {
  const [currentPage, setCurrentPage] = useState("list")

  const selecionaPagina = () => {
    if (currentPage === "list") {
      return <CharacterListPage />
    } 
    else{
      return <CharacterDetailPage/>
    }
  }
  return (
    <div className="App">
        {selecionaPagina()}
    </div>
  );
}

export default App;
