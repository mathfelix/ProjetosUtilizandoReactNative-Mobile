//Import
import React from 'react';
import { /*Button,*/Text, TouchableOpacity, AppRegistry, View, Image, Alert } from 'react-native';

//Formatações
const Estilos = {
  /*
  estiloTexto: {
    fontSize: 30,
    backgroundColor: '#08509B',
    //paddinTop: 15,
    //color: '#fff',
    //margin:30
    //shadowColor: '#000',
    //shadowOffset: { width: 0, height: 2 }, //POsso usar numero negativos tbm, no caso a sombra iria ficar pra cima.
    //shadowOpacity: 0.4, //varia de 0 - 1
    //shadowRadius: 2, 
    //fontStyle: 'normal',
    //fontWeight: 'bold', // entre 100 e 900 ou bold
    //textAlign: 'left',
    //textDecorationLine: 'underline line-through'
    //height: 60,
    //width: 60 //padrao se n definir tamanho nem altura será: tamanho ira pegar todo o espaçamento e altura do tamanho do elmento
  },
  estiloTexto2: {
    fontSize: 30,
    height: 60,
    width: 60,
    backgroundColor: '#2A48FA'
  }, 
  estiloView: {
    backgroundColor: 'skyblue',
    height: 300,
    justifyContent: 'space-around', //flex-start, center, flex-end alinha na horizontal, space-around, space-between
    alignItems: 'center', // alinha na vertical, stretch (preenche todo o conteudo do dispositivo)
    flexDirection: 'column' //row ou column
  }
  
  principal: {
    flex: 1, // Preenche todo o conteudo da tela (1:1) vai ocupar o espaco de 1 de um total de 1 espaco
    backgroundColor: 'cornflowerblue'
  },
  topo: {
    flex: 1, // de um total de 3 dentro do View ele ira ocupar 1:3, a medida que aumenta o numero aumenta o numero de espaço preenchidos na tela referente aos demais
    backgroundColor: 'brown'
  },
  conteudo: {
    flex: 1, // 1:3
    backgroundColor: 'yellowgreen'
  },
  rodape: {
    flex: 1, // 1:3
    backgroundColor: 'orangered'
  }
  
  principal: {
    paddingTop: 40
  },
  botao: {
    backgroundColor: '#48BBEC',
    padding: 10,
    borderColor: '#1D8EB8',
    borderWidth: 1,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center' //define alinhamento para o proprio componente
  }
  
  principal: {
    paddingTop: 40
  },
  imagem: {
    justifyContent: 'flex-end',
    paddingBottom: 5
  },
  texto: {
    color: '#FFF'
  }
  */

  principal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
};


const botaoPressionado = () => {
  var numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio * 5); //Math.floor pega os inteiros ou transforma os numAleatorios em inteiros

  //Frases
  var frases = Array();
  frases[0] = 'aa';
  frases[1] = 'bb';
  frases[2] = 'cc';
  frases[3] = 'dd';
  frases[4] = 'ee';

  var fraseEscolhida = frases[numeroAleatorio];

  Alert.alert(fraseEscolhida);
};


//Criar o componente
//View é utilizado como componente
const App = () => {
  const { /*estiloTexto, estiloView, estiloTexto2 principal, topo, conteudo, rodape, botao, textoBotao, imagem, texto*/ principal, botao, textoBotao } = Estilos;
  
  return(
    /*
    <View style={principal}> 
      <Text style={topo}>Topo</Text>
      <Text style={conteudo}>Conteudo</Text>
      <Text style={rodape}>Rodape</Text>
    </View>
    
    <View style={principal}>
      <Button 
      title="Clique aqui" 
      color="#841584" 
      accessibilityLabel="Clique para abrir as notícias!" 
      onPress={botaoPressionado} 
      />
    </View>
    

    <View style={principal}>
      <TouchableOpacity style={}>
        <Text style={}>Clique Aqui</Text>
      </TouchableOpacity>
      
    </View>
    

    <View style={principal}>
      <Image source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }} style={{ width: 200, height: 200 }} />
    </View>
    

    <View >
      <Image source={require('./imgs/uvas.png')} >
        <Text>Legenda para foto</Text>
      </Image>
    </View>
    */

    <View style={principal}>
      <Image source={require('./imgs/logo.png')} />
      <TouchableOpacity style={botao} onPress={botaoPressionado}>
        <Text style={textoBotao}>Nova Frase!</Text>
      </TouchableOpacity>
    </View>
  );

};

//Renderizar para o dispositivo
AppRegistry.registerComponent('FrasesDoDia', () => App);