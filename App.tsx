import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Image, Button, TouchableOpacity, TouchableHighlight, Switch } from 'react-native';


function App(): React.JSX.Element {

  const [isEnabled, setIsEnabled] = useState(false)

  const handleToggleIsEnabled = () => {
    setIsEnabled(!isEnabled)
  }

  console.log(isEnabled)

  return (

    <View style={styles.container}>
      <Text style={styles.welcome}>
        Hello World
      </Text>
      <Image resizeMode='repeat' source={require('./assets/images/Fundo_de_tela.png')} style={{ width: 200, height: 200, alignSelf: 'center' }} />
      <TextInput editable={true} style={styles.textInput} multiline textAlignVertical='top'
        placeholder='telefone' placeholderTextColor={'#EEE'} />
      <TextInput editable={true} style={styles.textInput} multiline textAlignVertical='top' placeholder='senha' placeholderTextColor={'#ccc'} />
      <Button title='Click Me' onPress={() => alert('clicou')} />
      <TouchableOpacity style={styles.button}>
        <Text>Clica aqui Opacity</Text>
      </TouchableOpacity>
      <TouchableHighlight style={styles.button} onPress={() => alert('clicou')} activeOpacity={0.2} underlayColor='black' >
        <Text>Clica Aqui HighLight</Text>
      </TouchableHighlight>

      <Switch value={isEnabled} onValueChange={handleToggleIsEnabled} trackColor={{
        false: '#f00', true: 'blue'
      }} thumbColor={'black'} />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    color: '#ffffff',
    backgroundColor: 'purple',
    fontSize: 28,
    padding: 8,
    paddingHorizontal: 10,
    marginVertical: 20,
    borderRadius: 5
  },
  textInput: {
    borderWidth: 1,
    width: 230,
    borderColor: 'blue',
    borderRadius: 5,
    padding: 8
  },
  button: {
    marginTop: 20,
    width: 230,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: 'pink',
    borderRadius: 5,
  }
})

export default App;
