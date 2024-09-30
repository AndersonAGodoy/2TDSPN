import { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const loadUserData = async () => {
      const storedUser = await AsyncStorage.getItem('user')
      if (storedUser) setUser(JSON.parse(storedUser))
    }
    loadUserData()
  }, [])

  const login = async (email, password) => {
    if (email === "teste@teste.com" && password === "password#1234") {
      const userData = { id: 1, email }
      setUser(userData)
      await AsyncStorage.setItem('user', JSON.stringify(userData));
    } else {
      throw new Error("Email e ou Password Inválidos")
    }
  }

  const logout = async () => {
    setUser(null)
    await AsyncStorage.removeItem('user');
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}