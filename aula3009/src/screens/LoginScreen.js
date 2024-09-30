import { Button, View } from "react-native"
import LoginForm from "../components/LoginForm"

const LoginScreen = ({ navigation }) => {
  return (
    <View>
      <LoginForm />
      <Button title="Register" onPress={() => navigation.navigate("Register")} />
      <Button title="Dashboard2" onPress={() => navigation.navigate("Dashboard2")} />
    </View>
  )
}

export default LoginScreen