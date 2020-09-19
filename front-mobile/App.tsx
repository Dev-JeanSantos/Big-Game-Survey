import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import {
  useFonts,
  Play_400Regular,
  Play_700Bold
} from '@expo-google-fonts/play';

import Header from './src/components/Header';
import Routes from './src/routes';

export default function App() {

  const [fontsLoaded] = useFonts({
    Play_400Regular,
    Play_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }else{
    return (
      /* esse view é responsavel por rendederizar as telas */
      <View style={styles.container}>
  
        {/*chama a função que criar stilo no texto*/}
        <Routes/>
        {/*barra de status do celular*/}
        <StatusBar style="light" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }

});
