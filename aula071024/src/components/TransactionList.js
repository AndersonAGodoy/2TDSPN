import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useFinance } from '../contexts/FinanceContext';
import { useTheme } from '../contexts/ThemeContext';

const TransactionList = () => {
  const { transactions } = useFinance();
  const {isDarkTheme} = useTheme()

  return (
    <FlatList
      data={transactions}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={{ padding: 10 }}>
          <Text style={{color: isDarkTheme ? '#fff' : '#000',}}>{item.description} : {item.type === 'income' ? '+' : '-'} R$ {item.amount.toFixed(2)}</Text>
        </View>
      )}
    />
  );
};

export default TransactionList;
