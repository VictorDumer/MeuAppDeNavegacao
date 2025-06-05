import AsyncStorage from "@react-native-async-storage/async-storage";
import React,{ useState, useEffect} from 'react';
import { jsx } from "react/jsx-runtime";
import LoginScreen from "./LoginScreen";

export default function Verify() {

    const Lendo = () =>{
        const loadVerify = async () =>{
            try{
                const savedVerify = await AsyncStorage.getItem('verify')
                if(savedVerify !== null){
                }
            }catch (err){
                console.log('Erro ao carregar as tarefas: ', err);
            }
        }
        useEffect(()=>{
            loadVerify();
        }, [])
    }
}
    