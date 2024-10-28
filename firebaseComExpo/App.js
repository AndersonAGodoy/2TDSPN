import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, signOut } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

export default function App() {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);
  const [user, setUser] = useState(null)
  const [users, setUsers] = useState([])
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleNewAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user)
      })
      .catch(error => {
        console.log(error);
      })
  }

  useEffect(() => {
    const getUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      let users = []
      querySnapshot.forEach((doc) => {
        users.push(doc.data().first)
      });
      setUsers(users)
    }
    getUsers()

  }, [])



  const handleCreateUserAda = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  const handleCreateUserTuring = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Alan",
        middle: "Mathison",
        last: "Turing",
        born: 1912
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null)
      })
      .catch(error => {
        console.log(error);
      })
  }

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user)
      })
      .catch(error => {
        console.log(error);
      })
  }


  return (
    <View style={styles.container}>
      <TextInput placeholder='Email' onChangeText={setEmail} />
      <TextInput placeholder='Senha' onChangeText={setPassword} />
      <Button title='Cadastrar' onPress={handleNewAccount} />
      <Button title='Login' onPress={handleLogin} />

      {!user ? (
        <>

          <Text>Nenhum usuário logado</Text>
          {users.map((user, index) => (
            <Text key={index}>{user}</Text>
          ))}
        </>
      ) : (
        <View>

          <Text>{`usuário: ${user.email}`}</Text>
          <Button title='Criar usuário Ada' onPress={handleCreateUserAda} />
          <Button title='Criar usuário Turing' onPress={handleCreateUserTuring} />

          <Button title='Sair' onPress={handleSignOut} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
  },
});
