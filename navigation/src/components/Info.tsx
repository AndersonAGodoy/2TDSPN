import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Info() {
  return (
    <View style={styles.info}>
      <Text style={styles.infoText}>Faculdade</Text>
      <TextInput placeholderTextColor={'#7E7070'} style={styles.infoTextInput} placeholder='Fiap' />
    </View>
  )
}

const styles = StyleSheet.create({
  info: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#484646',
    paddingHorizontal: 8
  },
  infoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#484646',
    paddingHorizontal: 4,
    paddingVertical: 12
  },
  infoTextInput: {
    height: 60,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 8,
    paddingHorizontal: 8
  }
})