import AsyncStorage from "@react-native-async-storage/async-storage";
import React,{ useState, useEffect} from 'react';
import { jsx } from "react/jsx-runtime";


const verificacao = () =>{
    const [verify, setVerify] = useState(false);

    const saveVerify = async (value) => {
        try{
            await AsyncStorage.setItem('verify', JSON.stringify(value));
        }catch(err){
            console.log('Ocorreu um erro :', err);
        }   
    }

    const loadVerify = async () =>{
        try{
            const savedVerify = await AsyncStorage.getItem('verify')
            if(savedVerify !== null){
                setVerify(JSON.parse(savedVerify));
            }
        }catch (err){
            console.log('Erro ao carregar as tarefas: ', err);
        }
    }
    useEffect(()=>{
        loadVerify();
    }, [])
}
