import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DatailsScreen'
import ProfileScreen from './src/screens/ProfileScreen';
import AsyncStorage from "@react-native-async-storage/async-storage";


const Stack = createStackNavigator();

export default function App() {
  
  const [RotaInicial, setRotaInicial] = useState(null);

  useEffect(()=>{
    const getRotaInicial = async() =>{
        try {
          const stateLogin =  await AsyncStorage.getItem('login');
          setRotaInicial(stateLogin === 'logado' ? 'Home' : 'Login');
          console.log('Val Async:', stateLogin);
        } catch (err) {
          console.log('Erro ao acessar o Storage', err);
          setRotaInicial('Login')
        }
    }
     getRotaInicial();
  }, []);
  if (RotaInicial == null){
      return null
  }
  return (

    <NavigationContainer>
    <Stack.Navigator initialRouteName={RotaInicial}>
       <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}