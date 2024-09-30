import AsyncStorage from '@react-native-async-storage/async-storage';
import {createContext, useState, useEffect} from 'react';

export const TransactionContext =  createContext();

export const TransactionProvider = ({children}) => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const loadTransaction = async() => {
            try { 
                const storedTransaction = await AsyncStorage.getItem('transaction')
                if (storedTransaction) setTransactions(JSON.parse(storedTransaction))
             } catch(error){
                console.log(error)
             }
        }
        loadTransaction();
    }, [])

    useEffect(()=> {
        const saveTransaction = async() => {
            try {
                await AsyncStorage.setItem('transaction', JSON.stringify(transactions))
            } catch(error){
                console.log(error)
            }
        }
        saveTransaction();
    },[transactions])

    const addTransaction = (transaction) => {
        setTransactions([...transactions, transaction])
    }
    const removeTransaction = (id) => {
        setTransactions(transactions.filter(transaction => transaction.id !== id))
    }

    return (
        <TransactionContext.Provider value={{transactions, addTransaction, removeTransaction}}>
            {children}
        </TransactionContext.Provider>
    )
}