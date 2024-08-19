import { StyleSheet, Text, View } from "react-native";

interface BioProps {
  bioTitle: string,
  bioText: string
}

export default function Bio({ bioText, bioTitle }: BioProps) {
  return (
    <View style={styles.bioContainer}>
      <Text style={styles.bioTitle}>{bioTitle}</Text>
      <Text style={styles.bioText}>{bioText} </Text>
    </View>
  )
}


const styles = StyleSheet.create({
  bioContainer: {
    marginTop: 12,
    paddingHorizontal: 8,
  },
  bioTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#484646',
    paddingHorizontal: 4

  },
  bioText: {
    fontSize: 12,
    fontWeight: 'regular',
    color: '#484646',
    paddingVertical: 12,
    paddingHorizontal: 4
  },
})