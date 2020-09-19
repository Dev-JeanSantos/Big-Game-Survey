import React from 'react';

import { FontAwesome5 as Icon } from '@expo/vector-icons';
import { Text, StyleSheet, View, Image, Alert } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  /*Função que permite a navegação*/
  const navigation = useNavigation();


  const handleOnPress = () => {

    navigation.navigate('CreateRecord');

  }


  return (


    /*Fragment (Encaixar dois objetos iguais dentro de um retorno)*/
    <>
      <Header />
      {/* Elemento View(Responsável pela renderizar o componente na tela) */}
      {/*View 1 */}
      <View style={styles.container}>
        <Image
          source={require('../../assets/gamer.png')}
          style={styles.gamerImage} />

        <Text style={styles.title}> Vote Agora</Text>
        <Text style={styles.subTitle}> Nos diga qual é seu jogo favorito!</Text>
      </View>
      {/*View 2 */}
      <View style={styles.footer}>
        {/* Componente responsavel pela criação de buttons | onPress (cria uma ação no botao)*/}
        <RectButton style={styles.button} onPress={handleOnPress}>
          <Text style={styles.buttonText}>
            Coletar Dados
                </Text>
          {/*Inserir imagem apos o button */}
          <View style={styles.buttonIcon}>
            <Text>
              <Icon name="chevron-right" color="#FFF" size={25} />
            </Text>
          </View>
        </RectButton>

      </View>
    </>
  )
};

const styles = StyleSheet.create(
  {
    container: {
      marginTop: 15,
      backgroundColor: '#0B1F34',
      alignItems: 'center',
    },
    gamerImage: {
      width: 309,
      height: 288
    },
    title: {
      color: '#00D4FF',
      fontSize: 36,
      fontWeight: 'bold',
      marginTop: 31,
      fontFamily: "Play_700Bold",
    },
    subTitle: {
      color: '#ED7947',
      fontSize: 21,
      marginTop: 15,
      fontFamily: "Play_400Regular",
    },
    footer: {
      marginTop: '15%',
      alignItems: 'center'
    },
    button: {
      backgroundColor: '#00D4FF',
      flexDirection: 'row',
      borderRadius: 10
    },
    buttonIcon: {
      backgroundColor: '#ED7947',
      justifyContent: 'center',
      alignItems: 'center',
      width: 50,
      borderBottomRightRadius: 10,
      borderTopRightRadius: 10
    },
    buttonText: {
      paddingTop: 15,
      paddingBottom: 15,
      paddingLeft: 50,
      paddingRight: 50,
      fontFamily: "Play_700Bold",
      fontWeight: 'bold',
      fontSize: 18,
      color: '#0B1F34',
    }
  }
);


export default Home;