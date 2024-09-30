import { Button, Text, View } from "react-native";

export default function RegisterScreen({ navigation }) {
  return (
    <View>
      <Text>Registro aqui</Text>
      <Button title="Go back to login" onPress={() => navigation.navigate("Login")} />
    </View>
  )
}