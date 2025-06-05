import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DatailsScreen'
import ProfileScreen from './src/screens/ProfileScreen';
import AsyncStorage from "@react-native-async-storage/async-storage";


const Stack = createStackNavigator();

export default function App() {
  const State = () =>{
    if(AsyncStorage.getItem('login') != 'logado'){
      let RotaInicial = 'Home'
    }else{
      let RotaInicial = 'Login'
    }
  }
  return (

    <NavigationContainer>
    <Stack.Navigator initialRouteName={State()}>
       <Stack.Screen name="Login" component={LoginScreen}   />
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}