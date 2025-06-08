import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions,TextInput, TouchableOpacity} from 'react-native';
const windowWidth = Dimensions.get('window').width;
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginScreen({ navigation }) {
    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');
    
    const verificacao = async ()=> {
        
        if(email =='VictorDumer' && senha == 'Admin123'){
            await AsyncStorage.setItem('login', 'logado');
            console.log('Verificação foi um sucesso')
            navigation.navigate('Home');
        }else{
            alert('Senha incorreta')
            console.log('\n Try: Username = VictorDumer & Password = Admin123')
                }
    }
    return (
        <View style={styles.container}>
            
            <Text style={styles.title} >Login</Text>
            <View>
                <TextInput
                style={styles.input} placeholder='Enter with your username'
                value={email}
                onChangeText={setEmail}
                keyboardType='email-address'
                />
                <TextInput
                style={styles.input}
                placeholder='Enter with your password'
                keyboardType='visible-password'
                value={senha}
                onChangeText={setSenha}

                />
                <TouchableOpacity style={styles.botao} onPress={verificacao} >
                    <Text style={styles.botaoTexto}>Fazer login</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#dce2e5',
    },
    title:{
        color: '#063970',
        fontSize: 24,
        marginBottom: 50,
    },
    input:{
        height: windowWidth * 0.2,
        width: windowWidth * 0.8,
        color:'#154c79',
        borderColor: 'gray',
        borderWidth: 2,
        marginBottom: '5%',
        marginTop:10,
        paddingHorizontal: '7%',
        borderRadius: 60,
    },
    botao:{
        alignItems:'center',
        justifyContent:'center',
        height: windowWidth*0.3, 
        width:windowWidth*0.7, 
        backgroundColor:'#063970',
        borderRadius:70,
        marginTop: windowWidth *0.1,
        marginLeft: windowWidth * 0.05,
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    botaoTexto:{
        fontSize:20, 
        color:'#fafafa',
        fontWeight: 'bold'
    }
})