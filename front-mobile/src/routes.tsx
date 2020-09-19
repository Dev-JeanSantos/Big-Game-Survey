import React from 'react';
/*NavigationContainer (Responsavel por agrupar as rotas e gerencia-las)*/
import { NavigationContainer } from '@react-navigation/native';
/*createStackNavigator (pilha de navegação)*/
import { createStackNavigator } from '@react-navigation/stack';

/*Variavel recebendo a função*/
const Stack = createStackNavigator();
import Home from './pages/Home';
import CreateRecord from './pages/createRecord';


const Routes = () => {

    return (

        /*Navegação*/
        <NavigationContainer>
            <Stack.Navigator
                headerMode="none"
                screenOptions={{
                    cardStyle: {
                        backgroundColor: '#0B1F34'
                    }
                }}
            >
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='CreateRecord' component={CreateRecord} />
            </Stack.Navigator>
        </NavigationContainer>


    );

}

export default Routes;