import { useContext } from "react"
import { Button, Text, View } from "react-native"
import { AuthContext } from "../context/AuthContext"

const DashboardScreen2 = () => {
  const { user, logout } = useContext(AuthContext)

  return (
    <View>
      <Text>Bem vindo, {user?.email ? user.email : "Visitante"}</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  )
}

export default DashboardScreen2