import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export const TimerContext = createContext();

export const TimeProvider = ({children}) => {
    const[timer, setTimer] = useState(0);

    useEffect(()=>{
        const loadTimer = async () => {
            try {
                const timersArmazenados = await AsyncStorage.getItem("@frases_timer")
                if(timersArmazenados){
                    setTimer(parseInt(timersArmazenados,10))
                }
            } catch (error) {
                console.log("Erro ao carregar o tempo")
            }
        }
        loadTimer();
    },[])
    const salvarTimer = async(novoTimer) => {
        try {
            await AsyncStorage.setItem("@frases_timer", novoTimer.toString())
        } catch (error) {
            console.log("Erro ao adicionar um tempo")
        }
    }

    return(
        <TimerContext.Provider value={{timer, salvarTimer}}>
            {children}
        </TimerContext.Provider>
    )
}