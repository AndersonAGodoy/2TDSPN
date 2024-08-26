import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Profile from '../screens/Profile'
import Feed from '../screens/Feed'
import { RootStackParamsList } from '../types/navigation'

const StackNavigator = createNativeStackNavigator<RootStackParamsList>()

export default function StackNavigation() {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen name='Profile' component={Profile} options={{ headerShown: false }} />
    </StackNavigator.Navigator>
  )
}