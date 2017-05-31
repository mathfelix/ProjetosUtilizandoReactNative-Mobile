/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';

import ListaItens from './src/components/ListaItens';

class app4 extends Component {
  //Fluxo de execução na ordem: constructor, componentWillMount, render, componentDidMount
  //Porem nas normas de boas praticas do eslint deve ser criado nessa ordem
  
  /*
  constructor(props) {
    super(props);
    console.log('Construindo a aplicação');
  }

  componentWillMount() {
    console.log('Fazendo alguma coisa antes de renderizar');
  }

  componentDidMount() {
    console.log('Fazendo alguma coisa depois de renderizar');
  }
  */
  render() {
    /* Imprimi no console do debugg
    const teste = 'Este é um valor'
    console.log(teste);
    */
    //console.log('Objeto é renderizado');
    return (
      <View>
        <ListaItens />
      </View>
    );
  }

}


AppRegistry.registerComponent('app4', () => app4);
