import { Image, StyleSheet, View } from "react-native";

interface HeaderProps {
  source: string
}

export default function Header({ source }: HeaderProps) {
  return (
    <View>
      <Image style={styles.imageHeader} source={{ uri: source }} />
    </View>
  )
}

const styles = StyleSheet.create({
  imageHeader: {
    width: '100%',
    height: 200
  },
})