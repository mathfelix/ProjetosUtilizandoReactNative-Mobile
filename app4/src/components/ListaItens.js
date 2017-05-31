import React, { Component } from 'react';
import {
  ScrollView
} from 'react-native';

import Itens from './Itens';
import axios from 'axios';

export default class ListaItens extends Component {
  //Requisição http
  //faus.com.br/recursos/c/dmairr/api/itens.html é uma rede JSON - pode ´copiar o conteudo e acessar um formatador de json na net
  // exmeplo jsonformartter
  // tire o function e utilize =>
  //Em situações em que se possui apenas um parametro pode-se tirar os parenteses.
  //O conceito é que o response esta sendo passado como parametro para uma função
  //Then comando usado para se da certo, catch se da errado.

  constructor(props) {
  	super(props);
  	this.state = { ListaItens: [] };
  }

  //Exemplo de função assincrona
  componentWillMount() {
  	axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
  	.then(response => { this.setState({ ListaItens: response.data }); })
  	.catch(() => { console.log('Erro ao recuperar os dados.'); });
  }

  //Map e uma estrutura de repetição - importante definiar a propriedade KEY (em casos de repeticao)
  //Criado uma props item para passar ao componente Item
  render() {
    return (
      <ScrollView style={{ backgroundColor: '#DDD' }} >
        { this.state.ListaItens.map(item => (<Itens key={item.titulo} item={item} />)) }
      </ScrollView>
    );
  }
}
