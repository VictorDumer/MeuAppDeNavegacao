import AsyncStorage from "@react-native-async-storage/async-storage";
import React,{ useState, useEffect} from 'react-native';
import { jsx } from "react/jsx-runtime";


const verificacao = () =>{
    const [verify, setVerify] = useState(false);

    const saveVerify = async (setVerify) => {
        try{
            await AsyncStorage.setItem('verify');
        }catch(err){
            console.log('Ocorreu um erro :', err);
        }   
    }

    const loadVerify = async () =>{
        try{
            const savedVerify = await AsyncStorage.getItem('verify')
        }catch (err){
            console.log('Erro: ', err);
        }
    }

}
