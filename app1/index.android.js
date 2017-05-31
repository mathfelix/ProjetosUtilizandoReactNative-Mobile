/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';

// AULA ! PRATICANDO
/*
class MeuComponente extends Component{
  render(){
    return (
        <View>
          <Text>{this.props.propriedade1}</Text>
          <Text>{this.props.xyz}</Text>
          <Text>{this.props.y}</Text>
        </View>
      );
  }
}

class app1 extends Component{

  render() {
    return (
        <MeuComponente propriedade1='Banana' xyz='Abacaxi' p='Uva'></MeuComponente>
      );
  }
}
*/


// AULA 2 PRATICANDO
/*
class MeuComponente extends Component{
  render(){
    return (
        <View>
          <Text>{this.props.teste}</Text>
        </View>
      );
  }
}

class app1 extends Component{

  constructor(props) {
    super(props);
    
    this.state = { texto : 'Texto teste 2' };
  }

  alteraTexto(){
    this.setState({ texto : 'Outra coisa' });
  }

  render() {
    return (
        <View>
          <MeuComponente teste={this.state.texto} ></MeuComponente>
          <Button 
            title='Botão' 
            onPress={() => { this.alteraTexto() }}
          />
        </View>
      );
  }
}
*/

// AULA DE INICIO DO PROJETO JOKENPO
/*
class app1 extends Component{

  constructor(props) {
    super(props);
    
    this.state = { escolhaUsuario : '' };
  }

  jokenpo(escolhaUsuario){
    //alert(escolhaUsuario);
    this.setState({ escolhaUsuario : escolhaUsuario });
  }

  render() {
    return (
        <View>
          <Text>Escolha do computador</Text>
          <Text>Escolha do usuario: {this.state.escolhaUsuario}</Text>
          <Text>Resultado</Text>
          <Button title='Pedra' onPress={() => {this.jokenpo('Pedra')}} />
          <Button title='Papel' onPress={() => {this.jokenpo('Papel')}} />
          <Button title='Tesoura' onPress={() => {this.jokenpo('Tesoura')}} />
        </View>
      );
  }
}
*/

//AULA 2 JOKENPO
/*
class app1 extends Component{

  constructor(props) {
    super(props);
    
    this.state = { escolhaUsuario : '', escolhaComputador : '', resultado : '' };
  }

  jokenpo(escolhaUsuario){
    //alert(escolhaUsuario);

    //gera numero aleatório
    var numAleatorio = Math.floor(Math.random() * 3);
    var escolhaComputador = '';

    switch(numAleatorio){
      case 0: escolhaComputador = 'Pedra'; break;
      case 1: escolhaComputador = 'Papel'; break;
      case 2: escolhaComputador = 'Tesoura'; break;
    }

    var resultado = '';
    if (escolhaComputador == 'Pedra') {
      if (escolhaUsuario == 'Pedra') {
        resultado = 'Empate';
      }

      if (escolhaUsuario == 'Papel') {
        resultado = 'Usuario ganhou';
      }

      if (escolhaUsuario == 'Tesoura') {
        resultado = 'Computador Ganhou';
      }
    }

    if (escolhaComputador == 'Papel') {
      if (escolhaUsuario == 'Pedra') {
        resultado = 'Computador Ganhou';
      }

      if (escolhaUsuario == 'Papel') {
        resultado = 'Empate';
      }

      if (escolhaUsuario == 'Tesoura') {
        resultado = 'Usuario Ganhou';
      }
    }

    if (escolhaComputador == 'Tesoura') {
      if (escolhaUsuario == 'Pedra') {
        resultado = 'Usuario Ganhou';
      }

      if (escolhaUsuario == 'Papel') {
        resultado = 'Computador ganhou';
      }

      if (escolhaUsuario == 'Tesoura') {
        resultado = 'Empate';
      }

    }

    this.setState({ escolhaUsuario : escolhaUsuario, escolhaComputador : escolhaComputador, resultado : resultado });
  }

  render() {
    return (
        <View>
          <Text>Escolha do computador: {this.state.escolhaComputador}</Text>
          <Text>Escolha do usuario: {this.state.escolhaUsuario}</Text>
          <Text>Resultado: {this.state.resultado}</Text>
          <Button title='Pedra' onPress={() => {this.jokenpo('Pedra')}} />
          <Button title='Papel' onPress={() => {this.jokenpo('Papel')}} />
          <Button title='Tesoura' onPress={() => {this.jokenpo('Tesoura')}} />
        </View>
      );
  }
}
*/

//AULA 3 JOKENPO
/*
class app1 extends Component{

  constructor(props) {
    super(props);
    
    this.state = { escolhaUsuario : '', escolhaComputador : '', resultado : '' };
  }

  jokenpo(escolhaUsuario){
    //alert(escolhaUsuario);

    //gera numero aleatório
    var numAleatorio = Math.floor(Math.random() * 3);
    var escolhaComputador = '';

    switch(numAleatorio){
      case 0: escolhaComputador = 'Pedra'; break;
      case 1: escolhaComputador = 'Papel'; break;
      case 2: escolhaComputador = 'Tesoura'; break;
    }

    var resultado = '';
    if (escolhaComputador == 'Pedra') {
      if (escolhaUsuario == 'Pedra') {
        resultado = 'Empate';
      }

      if (escolhaUsuario == 'Papel') {
        resultado = 'Usuario ganhou';
      }

      if (escolhaUsuario == 'Tesoura') {
        resultado = 'Computador Ganhou';
      }
    }

    if (escolhaComputador == 'Papel') {
      if (escolhaUsuario == 'Pedra') {
        resultado = 'Computador Ganhou';
      }

      if (escolhaUsuario == 'Papel') {
        resultado = 'Empate';
      }

      if (escolhaUsuario == 'Tesoura') {
        resultado = 'Usuario Ganhou';
      }
    }

    if (escolhaComputador == 'Tesoura') {
      if (escolhaUsuario == 'Pedra') {
        resultado = 'Usuario Ganhou';
      }

      if (escolhaUsuario == 'Papel') {
        resultado = 'Computador ganhou';
      }

      if (escolhaUsuario == 'Tesoura') {
        resultado = 'Empate';
      }

    }
    
    this.setState({ escolhaUsuario : escolhaUsuario, escolhaComputador : escolhaComputador, resultado : resultado });
}

  render() {
    return (
        <View>

          <Topo></Topo>
          
          <View></View>
          <View></View>

          <Text>Escolha do computador: {this.state.escolhaComputador}</Text>
          <Text>Escolha do usuario: {this.state.escolhaUsuario}</Text>
          <Text>Resultado: {this.state.resultado}</Text>
          <Button title='Pedra' onPress={() => {this.jokenpo('Pedra')}} />
          <Button title='Papel' onPress={() => {this.jokenpo('Papel')}} />
          <Button title='Tesoura' onPress={() => {this.jokenpo('Tesoura')}} />
        </View>
      );
  }
}

class Topo extends Component{
  render() {
    return (
      <View>
            <Image source={ require('./imgs/jokenpo.png') } />
      </View>
    );
  }
}
*/

//AULA JOKENPO N SEI
/*
class app1 extends Component{

  constructor(props) {
    super(props);
    
    this.state = { escolhaUsuario : '', escolhaComputador : '', resultado : '' };
  }

  jokenpo(escolhaUsuario){
    //alert(escolhaUsuario);

    //gera numero aleatório
    var numAleatorio = Math.floor(Math.random() * 3);
    var escolhaComputador = '';

    switch(numAleatorio){
      case 0: escolhaComputador = 'Pedra'; break;
      case 1: escolhaComputador = 'Papel'; break;
      case 2: escolhaComputador = 'Tesoura'; break;
    }

    var resultado = '';
    if (escolhaComputador == 'Pedra') {
      if (escolhaUsuario == 'Pedra') {
        resultado = 'Empate';
      }

      if (escolhaUsuario == 'Papel') {
        resultado = 'Usuario ganhou';
      }

      if (escolhaUsuario == 'Tesoura') {
        resultado = 'Computador Ganhou';
      }
    }

    if (escolhaComputador == 'Papel') {
      if (escolhaUsuario == 'Pedra') {
        resultado = 'Computador Ganhou';
      }

      if (escolhaUsuario == 'Papel') {
        resultado = 'Empate';
      }

      if (escolhaUsuario == 'Tesoura') {
        resultado = 'Usuario Ganhou';
      }
    }

    if (escolhaComputador == 'Tesoura') {
      if (escolhaUsuario == 'Pedra') {
        resultado = 'Usuario Ganhou';
      }

      if (escolhaUsuario == 'Papel') {
        resultado = 'Computador ganhou';
      }

      if (escolhaUsuario == 'Tesoura') {
        resultado = 'Empate';
      }

    }
    
    this.setState({ escolhaUsuario : escolhaUsuario, escolhaComputador : escolhaComputador, resultado : resultado });
}

  render() {
    return (
        <View>

          <Topo></Topo>
          
          <View style={styles.painelAcoes}>

            <View style={styles.btnEscolha}>
              <Button title='Pedra' onPress={() => {this.jokenpo('Pedra')}} />
            </View>
            
            <View style={styles.btnEscolha}>
              <Button title='Papel' onPress={() => {this.jokenpo('Papel')}} />
            </View>
            
            <View style={styles.btnEscolha}>
              <Button title='Tesoura' onPress={() => {this.jokenpo('Tesoura')}} />
            </View>
            
          </View>
          
          <View></View>

          <Text>Escolha do computador: {this.state.escolhaComputador}</Text>
          <Text>Escolha do usuario: {this.state.escolhaUsuario}</Text>
          <Text>Resultado: {this.state.resultado}</Text>
          
        </View>
      );
  }
}

class Topo extends Component{
  render() {
    return (
      <View>
            <Image source={ require('./imgs/jokenpo.png') } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnEscolha: {
    width: 90
  }, painelAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  }
});
*/

//OTRA AULA JOKENPO

/*
class app1 extends Component{

  constructor(props) {
    super(props);
    
    this.state = { escolhaUsuario : '', escolhaComputador : '', resultado : '' };
  }

  jokenpo(escolhaUsuario){
    //alert(escolhaUsuario);

    //gera numero aleatório
    var numAleatorio = Math.floor(Math.random() * 3);
    var escolhaComputador = '';

    switch(numAleatorio){
      case 0: escolhaComputador = 'Pedra'; break;
      case 1: escolhaComputador = 'Papel'; break;
      case 2: escolhaComputador = 'Tesoura'; break;
    }

    var resultado = '';
    if (escolhaComputador == 'Pedra') {
      if (escolhaUsuario == 'Pedra') {
        resultado = 'Empate';
      }

      if (escolhaUsuario == 'Papel') {
        resultado = 'Usuario ganhou';
      }

      if (escolhaUsuario == 'Tesoura') {
        resultado = 'Computador Ganhou';
      }
    }

    if (escolhaComputador == 'Papel') {
      if (escolhaUsuario == 'Pedra') {
        resultado = 'Computador Ganhou';
      }

      if (escolhaUsuario == 'Papel') {
        resultado = 'Empate';
      }

      if (escolhaUsuario == 'Tesoura') {
        resultado = 'Usuario Ganhou';
      }
    }

    if (escolhaComputador == 'Tesoura') {
      if (escolhaUsuario == 'Pedra') {
        resultado = 'Usuario Ganhou';
      }

      if (escolhaUsuario == 'Papel') {
        resultado = 'Computador ganhou';
      }

      if (escolhaUsuario == 'Tesoura') {
        resultado = 'Empate';
      }

    }
    
    this.setState({ escolhaUsuario : escolhaUsuario, escolhaComputador : escolhaComputador, resultado : resultado });
}

  render() {
    return (
        <View>

          <Topo></Topo>
          
          <View style={styles.painelAcoes}>

            <View style={styles.btnEscolha}>
              <Button title='Pedra' onPress={() => {this.jokenpo('Pedra')}} />
            </View>
            
            <View style={styles.btnEscolha}>
              <Button title='Papel' onPress={() => {this.jokenpo('Papel')}} />
            </View>
            
            <View style={styles.btnEscolha}>
              <Button title='Tesoura' onPress={() => {this.jokenpo('Tesoura')}} />
            </View>
            
          </View>
          
          <View style={styles.palco} >
            <Text style={styles.txtResultado}>{this.state.resultado}</Text>

            <Text>Escolha do computador: {this.state.escolhaComputador}</Text>
            <Image source={require('./imgs/tesoura.png')} />

            <Text>Escolha do usuario: {this.state.escolhaUsuario}</Text>
            <Image source={require('./imgs/tesoura.png')} />
            
          </View>

          
          
        </View>
      );
  }
}

class Topo extends Component{
  render() {
    return (
      <View>
            <Image source={ require('./imgs/jokenpo.png') } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnEscolha: {
    width: 90
  }, 
  painelAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  }, 
  palco: {
    alignItems: 'center',
    marginTop: 10
  },
  txtResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60
  }
});
*/

// VERSAO FINAL COM BOA PRATICA DE CODIGO SYNTAX Javascript
import Topo from './src/components/topo';
import Icone from './src/components/icone';

class app1 extends Component {

  constructor(props) {
    super(props);
    
    this.state = { escolhaUsuario: '', escolhaComputador: '', resultado: '' };
  }

  jokenpo(escolhaUsuario) {
    //alert(escolhaUsuario);
    // let - so existe dentro do escopo da função (Utilizar var - cria uma variavel global, ou seja, todas as funções podem usar)
    //gera numero aleatório
    // Se dentro da função a variavel sofre alteração usar let se nao usar const
    const numAleatorio = Math.floor(Math.random() * 3);
    let escolhaComputador = '';

    switch (numAleatorio) {
      case 0: escolhaComputador = 'Pedra'; break;
      case 1: escolhaComputador = 'Papel'; break;
      case 2: escolhaComputador = 'Tesoura'; break;
      default: escolhaComputador = '';
    }

    // == usado para comprar === utilizado para checar se é identico
    let resultado = '';
    if (escolhaComputador === 'Pedra') {
      if (escolhaUsuario === 'Pedra') {
        resultado = 'Empate';
      }

      if (escolhaUsuario === 'Papel') {
        resultado = 'Você Ganhou';
      }

      if (escolhaUsuario === 'Tesoura') {
        resultado = 'Você Perdeu';
      }
    }

    if (escolhaComputador === 'Papel') {
      if (escolhaUsuario === 'Pedra') {
        resultado = 'Você Perdeu';
      }

      if (escolhaUsuario === 'Papel') {
        resultado = 'Empate';
      }

      if (escolhaUsuario === 'Tesoura') {
        resultado = 'Você Ganhou';
      }
    }

    if (escolhaComputador === 'Tesoura') {
      if (escolhaUsuario === 'Pedra') {
        resultado = 'Você Ganhou';
      }

      if (escolhaUsuario === 'Papel') {
        resultado = 'Você Perdeu';
      }

      if (escolhaUsuario === 'Tesoura') {
        resultado = 'Empate';
      }
    }

    // Não precisa fazer receber basta utilizar somente o nome da variavel, pois o js entende que será respectivo
    //this.setState({ escolhaUsuario: escolhaUsuario, escolhaComputador: escolhaComputador, resultado: resultado });
    this.setState({ escolhaUsuario, escolhaComputador, resultado });
}

  render() {
    return (
        <View>
          // COmo não possui nada dentro pode fechar na mesma tag
          <Topo />
          
          <View style={styles.painelAcoes}>

            <View style={styles.btnEscolha}>
              <Button title='Pedra' onPress={() => { this.jokenpo('Pedra'); }} />
            </View>
            
            <View style={styles.btnEscolha}>
              <Button title='Papel' onPress={() => { this.jokenpo('Papel'); }} />
            </View>
            
            <View style={styles.btnEscolha}>
              <Button title='Tesoura' onPress={() => { this.jokenpo('Tesoura'); }} />
            </View>
            
          </View>
          
          <View style={styles.palco} >
            <Text style={styles.txtResultado}>{this.state.resultado}</Text>

            <Icone escolha={this.state.escolhaComputador} jogador='Computador' />
            <Icone escolha={this.state.escolhaUsuario} jogador='Você' />
          </View>

        </View>
      );
  }
}

//Salvando e modularizando os componentes!
/*
class Topo extends Component{
  render() {
    return (
      <View>
            <Image source={ require('./imgs/jokenpo.png') } />
      </View>
    );
  }
}
*/

/*
class Icone extends Component{
  render() {
    
    if (this.props.escolha == 'Pedra') {
      
      return(
        // Como esta retornando mais de um componente tem que ser colocado dentro de uma View, se fosse so uma nao teria problema.
        <View style={styles.icone}>
          <Text style={styles.txtJogador} >{this.props.jogador}</Text>
          <Image source={require('./imgs/pedra.png')} />
        </View>
      );

    } else if (this.props.escolha == 'Papel') {

      return(
        <View style={styles.icone}>
          <Text style={styles.txtJogador}>{this.props.jogador}</Text>
          <Image source={require('./imgs/papel.png')} />
        </View>
      );

    } else if (this.props.escolha == 'Tesoura') {
      
      return(
        <View style={styles.icone}>
          <Text style={styles.txtJogador}>{this.props.jogador}</Text>
          <Image source={require('./imgs/tesoura.png')} />
        </View>
      );
    
    } else{
      return false;
    }
  }
}
*/

const styles = StyleSheet.create({
  btnEscolha: {
    width: 90
  }, 
  painelAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  }, 
  palco: {
    alignItems: 'center',
    marginTop: 10
  },
  txtResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60
  },
  icone: {
    alignItems: 'center',
    marginBottom: 20,
  },
  txtJogador: {
    fontSize: 18
  }
});

AppRegistry.registerComponent('app1', () => app1);
