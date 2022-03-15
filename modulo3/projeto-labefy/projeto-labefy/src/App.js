import React from 'react';
import './App.css';
import axios from "axios"
import styled from 'styled-components';

export default class App extends React.Component {
    state = {
      listaAtual: ""
    }

    componentDidMount() {
      this.listaAtual();
    }

    pegaMusica = () => {
      const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
      const body = 
        {
          "result": {
              "quantity": "number",
              "list": [
                  {
                      "id": "string",
                      "name": "string"
                  }
              ]
          }
      }
      
      
      axios.get(url, body, {
        Authorization: "othon-fontenele-gebru"
      })
      .then((res) => this.setState({listaAtual: res.data.activity}))
      .catch((err) => console.log(err.response));
    }


  render() {
    return 
    <div className='Labefy'>
      {this.state.listaAtual}
    </div>
  }

}


