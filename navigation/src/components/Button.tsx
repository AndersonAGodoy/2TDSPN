import { Text, TouchableOpacity } from "react-native";

interface ButtonProps {
  onPress: () => void
}

export default function Button({ onPress }: ButtonProps) {
  return <TouchableOpacity onPress={onPress} style={{ width: '98%', justifyContent: 'center', alignItems: 'center', height: 60, backgroundColor: '#FBDF4B', marginHorizontal: 4, marginTop: 90, borderRadius: 8 }}><Text>Salvar</Text></TouchableOpacity>
}