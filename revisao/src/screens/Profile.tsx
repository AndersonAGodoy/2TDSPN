import { StackNavigationProp } from "@react-navigation/stack";
import { Button, Text, View } from "react-native";
import { RootStackParamsList } from "../types/navigation";
import { RouteProp } from "@react-navigation/native";

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamsList, 'Profile'>
type ProfileScreenRouteProp = RouteProp<RootStackParamsList, 'Profile'>

type Props = {
  navigation: ProfileScreenNavigationProp,
  route: ProfileScreenRouteProp
}

export default function Profile({ navigation, route }: Props) {
  const { userId } = route.params
  return (
    <View>
      <Text>Profile</Text>
      <Text>{userId}</Text>
      <Button title="Voltar para Home" onPress={() => navigation.goBack()} />
    </View>
  )
}