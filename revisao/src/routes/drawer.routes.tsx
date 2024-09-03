import { createDrawerNavigator } from '@react-navigation/drawer'
import Feed from '../screens/Feed'
import NewFeed from '../screens/NewFeed'
import Profile from '../screens/Profile'
import { Feather } from '@expo/vector-icons'
import TabNavigation from './tabs.routes'

const DrawerNavigator = createDrawerNavigator()

export default function DrawerNavigation() {
  return (
    <DrawerNavigator.Navigator >
      <DrawerNavigator.Screen name='Feed' component={TabNavigation} options={{
        drawerIcon: ({ color, size }) => <Feather color={color} size={size} name='home' />
      }} />
      <DrawerNavigator.Screen name='Profile' component={Profile} options={{
        drawerIcon: ({ color, size }) => <Feather color={color} size={size} name='user' />
      }} />
    </DrawerNavigator.Navigator>
  )
}