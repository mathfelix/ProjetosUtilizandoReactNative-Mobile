import React, { Component } from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet
} from 'react-native';

const imgPedra = require('../../imgs/pedra.png');
const imgPapel = require('../../imgs/papel.png');
const imgTesoura = require('../../imgs/tesoura.png');

class Icone extends Component {
  render() {
    if (this.props.escolha === 'Pedra') {
      return (
        // Como esta retornando mais de um componente tem que ser colocado dentro de uma View, se fosse so uma nao teria problema.
        <View style={styles.icone}>
          <Text style={styles.txtJogador} >{this.props.jogador}</Text>
          <Image source={imgPedra} />
        </View>
      );
    } else if (this.props.escolha === 'Papel') {
      return (
        <View style={styles.icone}>
          <Text style={styles.txtJogador}>{this.props.jogador}</Text>
          <Image source={imgPapel} />
        </View>
      );
    } else if (this.props.escolha === 'Tesoura') {
      return (
        <View style={styles.icone}>
          <Text style={styles.txtJogador}>{this.props.jogador}</Text>
          <Image source={imgTesoura} />
        </View>
      );
    }

    return false;
  } 
}

const styles = StyleSheet.create({
  icone: {
    alignItems: 'center',
    marginBottom: 20,
  },
  txtJogador: {
    fontSize: 18
  }
});

export default Icone;
