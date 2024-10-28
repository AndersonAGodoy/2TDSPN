import React, { useState, useEffect } from "react";

import { Button, Text, TextInput, View } from "react-native";

import auth from '@react-native-firebase/auth'

const App = (props: any) => {
  const [initializing, setInitializing] = useState<boolean>(true)
  const [user, setUser] = useState()
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')

  const onAuthStateChanged = (user: any) => {
    setUser(user)
    if (initializing) {
      setInitializing(false)
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber
  }, [])

  if (initializing) {
    return null
  }

  if (!user) {
    return (

      <View>
        <TextInput placeholder="Email" value={userEmail} onChangeText={setUserEmail} />
        <TextInput placeholder="Password" value={userPassword} onChangeText={setUserPassword} />
        <Button
          title="Cadastrar"
          onPress={() => auth().createUserWithEmailAndPassword(userEmail, userPassword).then(() => console.log('Criado com sucesso'))}
        />
        <Button
          title="Acessar"
          onPress={() => auth().signInWithEmailAndPassword(userEmail, userPassword).then(() => console.log('Logado com sucesso'))}
        />
      </View>
    )
  }

  return (
    <View>
      <Text>
        Olá usuário
      </Text>
      <Button
        onPress={() => auth().signOut()}
        title="Sair"
      />
    </View>
  )
}

export default App