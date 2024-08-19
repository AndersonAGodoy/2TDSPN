import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Header from './src/components/Header';
import User from './src/components/User';
import Bio from './src/components/Bio';
import Preferences from './src/components/Preferences';
import Info from './src/components/Info';
import Button from './src/components/Button';

const headerProps = {
  source: 'https://images.unsplash.com/photo-1555786750-7c3c2b9a6b0e?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
}

const userProps = {
  source: 'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  username: 'Anderson Godoy',
  userSlug: '@AndersonGodoy'
}

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header source={headerProps.source} />
        <User username='Anderson Godoy' source={userProps.source} userSlug={userProps.userSlug} />
        <Bio bioText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt in libero quis vulputate. Donec et malesuada nisi, vitae condimentum mi. Nullam tincidunt fermentum nisl id congue. Pellentesque at erat id ipsum commodo tincidunt. Quisque ut nunc vel libero ultrices ornare.' bioTitle='Bio' />
        <Preferences />
        <Info />
        <Button />
      </ScrollView>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({



});
