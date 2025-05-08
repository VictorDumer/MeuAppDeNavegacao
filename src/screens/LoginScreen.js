import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions,TextInput, TouchableOpacity} from 'react-native';
const windowWidth = Dimensions.get('window').width;

export default function LoginScreen({ navigation }) {
    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');

    const verificacao = ()=> {
        if(email && senha != ''){
            navigation.navigate('Home')
        }else{
            alert('Preencha os campos')
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <View>
                <TextInput
                style={styles.input} placeholder='Enter with your email'
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
                <TouchableOpacity style={styles.botao} onPress={verificacao}>
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
        backgroundColor: '#e0eefa',
    },
    title:{
        fontSize: 24,
        marginBottom: 20,
    },
    input:{
        height: windowWidth * 0.2,
        width: windowWidth * 0.8,
        color:'#333',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: '5%',
        marginTop:10,
        paddingHorizontal: 8,
        borderRadius: 5,
    },
    botao:{
        alignItems:'center',
        justifyContent:'center',
        height: windowWidth*0.3, 
        width:windowWidth*0.8, 
        backgroundColor:'#8e48cf',
        borderRadius:15,
        marginTop: 20, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    botaoTexto:{
        fontSize:20, // Reduzi um pouco o tamanho da fonte
        color:'#fafafa',
        fontWeight: 'bold' // Deixei o texto em negrito
    }
})