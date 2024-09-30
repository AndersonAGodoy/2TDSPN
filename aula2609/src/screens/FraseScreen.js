import { useContext, useEffect, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { FrasesContext } from "../context/FrasesContext";
import { TimerContext } from "../context/TimerContext";

export default function FraseScreen(){
    const {frases, salvarFrase, setCurrentFrasesIndex} = useContext(FrasesContext)
    const {timer, salvarTimer} = useContext(TimerContext)
    const [frase, setFrase] = useState('');
    const [newTimer, setNewTimer] = useState('');

    useEffect(()=> {
        if (timer > 0 && frases.length > 0){
            const intervalID = setInterval(()=>{
                setCurrentFrasesIndex((prevIndex) =>(prevIndex + 1)% frases.length)
            },newTimer * 1000)
            return () => clearInterval(intervalID);
        }
    },[timer, frases, setCurrentFrasesIndex])

    const handlerSave= ()=>{
        salvarFrase(frase)
        salvarTimer(parseInt(newTimer, 10))
        setFrase("")
        setNewTimer("")
    }
    return(
        <View>
            <Text>Essa é a nossa tela de frases</Text>
            <TextInput placeholder="Digite uma frase" value={frase} onChangeText={setFrase}/>
            <TextInput placeholder="Digite um tempo" value={newTimer} onChangeText={setNewTimer}/>
            <Button title="Adicionar" onPress={handlerSave}/>
            <Text>{frases}</Text>
            <Text>Tempo da frase: {newTimer} em segundos</Text>
        </View>

    )
}