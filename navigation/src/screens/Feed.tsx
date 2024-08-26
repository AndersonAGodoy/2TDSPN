import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamsList } from "../types/navigation";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamsList>
type Props = {
  navigation: HomeScreenNavigationProp
}

export default function Feed({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Feed</Text>
        <Button title="Ir para Perfil" onPress={() => navigation.navigate("Profile", { userId: '1234' })} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})