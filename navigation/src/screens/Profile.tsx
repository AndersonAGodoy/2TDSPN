import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import Header from '../components/Header'
import User from '../components/User';
import Bio from '../components/Bio';
import Preferences from '../components/Preferences';
import Info from '../components/Info';
import Button from '../components/Button';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamsList } from '../types/navigation';
import { RouteProp } from '@react-navigation/native'


type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamsList>
type ProfileScreenRouteProp = RouteProp<RootStackParamsList>

type Props = {
  navigation: ProfileScreenNavigationProp,
  route: ProfileScreenRouteProp
}


const headerProps = {
  source: 'https://images.unsplash.com/photo-1555786750-7c3c2b9a6b0e?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
}

const userProps = {
  source: 'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  username: 'Anderson Godoy',
  userSlug: '@AndersonGodoy'
}



export default function Profile({ navigation, route }: Props) {
  const { userId } = route.params

  return (
    <SafeAreaView>
      <ScrollView>
        <Header source={headerProps.source} />
        <User userId={userId} username='Anderson Godoy' source={userProps.source} userSlug={userProps.userSlug} />
        <Bio bioText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt in libero quis vulputate. Donec et malesuada nisi, vitae condimentum mi. Nullam tincidunt fermentum nisl id congue. Pellentesque at erat id ipsum commodo tincidunt. Quisque ut nunc vel libero ultrices ornare.' bioTitle='Bio' />
        <Preferences />
        <Info />
        <Button onPress={() => navigation.goBack()} />
      </ScrollView>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}