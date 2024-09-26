import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export const FrasesContext = createContext();

export const FrasesProvider = ({children}) => {
    const [frases, setFrases] = useState([]);
    const [currentFrasesIndex, setCurrentFrasesIndex] = useState(0);

    useEffect(() => {
        const loadFrases =  async() => {
            try {
                const frasesArmazenadas = await AsyncStorage.getItem("@frases_motivacionais");
                if (frasesArmazenadas){
                    setFrases(JSON.parse(frasesArmazenadas));
                }
            } catch (error) {
                console.log("Erro ao carregar as frases");
            }
        }
       loadFrases();  
    }, [])

    const salvarFrase = async(novaFrase) => {
        const frasesAtualizadas = [...frases, novaFrase];
        try {
            await AsyncStorage.setItem("@frases_motivacionais", JSON.stringify(frasesAtualizadas));
        } catch (error) {
            console.log("Erro ao salvar uma frase", error);
        }
    }

    return(
        <FrasesContext.Provider value={{frases, salvarFrase, currentFrasesIndex, setCurrentFrasesIndex}}>
            {children}
        </FrasesContext.Provider>
    )
}