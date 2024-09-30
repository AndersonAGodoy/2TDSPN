import { useContext } from "react"
import { Button, Text, View } from "react-native"
import { AuthContext } from "../context/AuthContext"

const DashboardScreen = () => {
  const { user, logout } = useContext(AuthContext)

  return (
    <View>
      <Text>Bem vindo, {user?.email}</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  )
}

export default DashboardScreen