import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function NewPost() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>New Post</Text>
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