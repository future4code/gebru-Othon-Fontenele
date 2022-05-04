import React, { useState } from "react";
import { Axios } from "axios";
import StyledComponents from "styled-components";
import CharacterListPage from "./CharacterListPage/CharacterListPage";
import CharacterDetailPage from "./CharacterDetailPage/CharacterDetailPage";


function App() {
  const [currentPage, setCurrentPage] = useState("list")
  const [detailsUrl, setDetailsUrl] = useState("")


  const goToDetailsPage = (url) => {
      setCurrentPage("details")
      setDetailsUrl(url)
  }

  const goToListPage = () => {
      setCurrentPage("list")
  }

  const selecionaPagina = () => {
    if (currentPage === "list") {
      return <CharacterListPage goToDetailsPage={goToDetailsPage}/>
    } 
    else{
      return <CharacterDetailPage goToListPage={goToListPage} url={detailsUrl} />
    }
  }
  return (
    <div className="App">
        {selecionaPagina()}
    </div>
  );
}

export default App;
