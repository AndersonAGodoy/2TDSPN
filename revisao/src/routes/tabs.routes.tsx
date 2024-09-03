import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Feed from '../screens/Feed'
import NewFeed from '../screens/NewFeed'
import Profile from '../screens/Profile'
import { Feather } from '@expo/vector-icons'

const TabNavigator = createBottomTabNavigator()

export default function TabNavigation() {
  return (
    <TabNavigator.Navigator>
      <TabNavigator.Screen name='Home' component={Feed} options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => <Feather color={color} size={size} name='home' />
      }} />
      <TabNavigator.Screen name='New' component={NewFeed} initialParams={{ postId: 'new post' }} options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => <Feather color={color} size={size} name='plus-circle' />
      }} />
    </TabNavigator.Navigator>
  )
}