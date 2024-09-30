import { useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import { Button, StyleSheet, Text, TextInput, View } from "react-native"

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useContext(AuthContext)
  const [error, setError] = useState(null)

  const handleLogin = async () => {
    try {
      setError(null)
      await login(email, password)
    } catch (error) {
      setError("Email ou Password inválidos")
    }
  }

  return (
    <View style={styles.container}>
      {error && <Text style={styles.errorText} >{error}</Text>}
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    marginVertical: 10, borderWidth: 1, padding: 8, borderRadius: 4
  },
  errorText: {
    color: 'red', marginBottom: 10
  }
})

export default LoginForm