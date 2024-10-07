import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { useFinance } from '../contexts/FinanceContext';

const FinanceForm = () => {
  const { addTransaction } = useFinance();
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('income');

  const handleSubmit = () => {
    if (!description || !amount || isNaN(amount)) {
      Alert.alert('Erro', 'Por favor, insira valores válidos.');
      return;
    }
    addTransaction(description, amount, type);
    setDescription('')
    setAmount('');
    Alert.alert('Sucesso', 'Transação adicionada!');
  };

  return (
    <View>
      <TextInput
        placeholder="Descrição"
        value={description}
        onChangeText={setDescription}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Valor"
        value={amount}
        keyboardType="numeric"
        onChangeText={setAmount}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <Button title="Adicionar Receita" onPress={() => { setType('income'); handleSubmit(); }} />
      <Button title="Adicionar Despesa" onPress={() => { setType('expense'); handleSubmit(); }} />
    </View>
  );
};

export default FinanceForm;
