import React, { Component } from 'react';
import Botao from './components/botao'
import './estilo.css'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textoAleatorio : ''
    };
    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = ['Siga os bons e aprenda com eles.', 'O bom-senso vale mais do que muito conhecimento.',
      'O riso é a menor distância entre duas pessoas.',
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso.'];
  }

  quebraBiscoito() {
    let state = this.state;
    let randomNumber = Math.floor(Math.random() * this.frases.length)
    state.textoAleatorio = '" ' + this.frases[randomNumber]+ ' "';
    this.setState(state);
  }

  render() {
    return (
      //ClassName substitui a class.No react é usado ClassName
      <div className="container">
        <img className="img" src={require('./assets/biscoito.png')} />
        <Botao nome="Abrir biscoito" acaoBtn={this.quebraBiscoito} />
        <h3 className="textoAleatorio">{this.state.textoAleatorio}</h3>
      </div>
    );
  }
}

export default App;
