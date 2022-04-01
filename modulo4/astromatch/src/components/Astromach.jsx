import React from "react";
import axios from "axios";
import styledComponents from "styled-components";


function Astromatch() {

  const url = axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person')

  const body = {
    "profile": {
      "id": "xUrxMGvODWZa4ZASbfwx",
      "age": 26,
      "name": "Carol Danvers",
      "photo": "https://s1.r29static.com/bin/entry/7e8/340x408,85/2138124/image.webp",
      "bio": "Gosto de voar e de gatos. Procuro relações que respeitem minha independência."
    }
  }

  
  return (
    <div className="Astromatch">
        <h1>Astromatch</h1>
        <button>Botão 1</button>
    </div>
  );
}

export default Astromatch;