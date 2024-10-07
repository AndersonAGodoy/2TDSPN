import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FinanceContext = createContext();

export const useFinance = () => useContext(FinanceContext);

export const FinanceProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const loadTransactions = async () => {
      const savedTransactions = await AsyncStorage.getItem('@transactions');
      const savedBalance = await AsyncStorage.getItem('@balance');
      if (savedTransactions) setTransactions(JSON.parse(savedTransactions));
      if (savedBalance) setBalance(JSON.parse(savedBalance));
    };
    loadTransactions();
  }, []);


  const addTransaction = async (description, amount, type) => {
    const newTransaction = { description, amount: parseFloat(amount), type };
    const newTransactions = [...transactions, newTransaction];
    setTransactions(newTransactions);
    await AsyncStorage.setItem('@transactions', JSON.stringify(newTransactions));

    const newBalance = type === 'income' ? balance + parseFloat(amount) : balance - parseFloat(amount);
    setBalance(newBalance);
    await AsyncStorage.setItem('@balance', JSON.stringify(newBalance));
  };

  return (
    <FinanceContext.Provider value={{ transactions, balance, addTransaction }}>
      {children}
    </FinanceContext.Provider>
  );
};
