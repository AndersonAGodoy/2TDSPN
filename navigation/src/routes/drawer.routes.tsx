import { createDrawerNavigator } from '@react-navigation/drawer'
import Feed from '../screens/Feed'
import Profile from '../screens/Profile'
import { Feather } from '@expo/vector-icons'
import TabNavigation from './tabs.routes'
import StackNavigation from './stack.routes'
import { RootStackParamsList } from '../types/navigation'

const DrawerNavigator = createDrawerNavigator<RootStackParamsList>()

export default function DrawerNavigation() {
  return (
    <DrawerNavigator.Navigator>
      <DrawerNavigator.Screen name='Home' component={TabNavigation} options={{
        drawerIcon: ({ color, size }) => <Feather name='home' size={size} color={color} />
      }} />
      <DrawerNavigator.Screen name='Profile' initialParams={{ userId: '1234' }} component={Profile} options={{
        drawerIcon: ({ color, size }) => <Feather name='user' size={size} color={color} />
      }} />
    </DrawerNavigator.Navigator>
  )
}