import { StackNavigationProp } from "@react-navigation/stack";
import { Button, Text, View } from "react-native";
import { RootStackParamsList } from "../types/navigation";

type HomeScreenNavigationProps = StackNavigationProp<RootStackParamsList>

type Props = {
  navigation: HomeScreenNavigationProps
}


export default function Feed({ navigation }: Props) {
  return (
    <View>
      <Text>Feed</Text>
      <Button title="Meu Perfil" onPress={() => navigation.navigate('Profile', { userId: '1234' })} />
    </View>
  )
}