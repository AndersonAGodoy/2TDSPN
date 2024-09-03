import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Feed from '../screens/Feed'
import NewFeed from '../screens/NewFeed'
import Profile from '../screens/Profile'
import { Feather } from '@expo/vector-icons'

const StackNavigator = createNativeStackNavigator()

export default function StackNavigation() {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen name='Profile' component={Profile} />
    </StackNavigator.Navigator>
  )
}