import React, { Component } from 'react';
import {
  Image,
  View
} from 'react-native';

const imagem = require('../../imgs/jokenpo.png');

// COmo é umaexportação tem q muda ro caminho da imagem (../ cada vez q coloca volta um diretorio)
class Topo extends Component {
  render() {
    return (
      <View>
            <Image source={imagem} /> 
      </View>
    );
  }
}

//export default Topo - pelo menos uma exp default
//export {midificarTopo, const x} exemplos de export
export default Topo;
