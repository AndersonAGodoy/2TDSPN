import { Image, StyleSheet, Text, View } from "react-native";

interface UserProps {
  source: string,
  username: string,
  userSlug: string,
  userId: string
}

export default function User({ source, userSlug, username, userId }: UserProps) {
  return (
    <View style={styles.userContainer}>
      <Image source={{ uri: source }} style={styles.userImage} />
      <Text style={styles.username}>{username}</Text>
      <Text style={styles.userSlug}>{userSlug}</Text>
      <Text>Id: {JSON.stringify(userId)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  userImage: {
    width: 120,
    height: 120,
    marginTop: -60,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: '#fff'
  },
  userContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#484646'
  },
  userSlug: {
    fontSize: 14,
    fontWeight: 'medium',
    color: '#484646'
  },
})