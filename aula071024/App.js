import React from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';
import { ThemeProvider, useTheme } from './src/contexts/ThemeContext';
import { FinanceProvider, useFinance } from './src/contexts/FinanceContext';
import FinanceForm from './src/components/FinanceForm';
import TransactionList from './src/components/TransactionList';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppContent = () => {
  const { isDarkTheme, toggleTheme } = useTheme();
  const { balance } = useFinance();

  const transformCurrency = (amount) => {
    return Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(amount)
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: isDarkTheme ? '#333' : '#fff', padding: 20 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
        <Text style={{ color: isDarkTheme ? '#fff' : '#000', fontSize: 18 }}>Controle Financeiro</Text>
        <Button title={isDarkTheme ? 'Tema Claro' : 'Tema Escuro'} onPress={toggleTheme} />
      </View>

      <Text style={{ color: isDarkTheme ? '#fff' : '#000', fontSize: 24, marginBottom: 20 }}>Saldo: {transformCurrency(balance)} </Text>
      <Button title="apagar" onPress={() => AsyncStorage.clear()} />
      <FinanceForm />
      <TransactionList />
    </SafeAreaView>
  );
};

const App = () => (
  <ThemeProvider>
    <FinanceProvider>
      <AppContent />
    </FinanceProvider>
  </ThemeProvider>
);

export default App;
