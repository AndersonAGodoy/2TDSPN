import { StyleSheet, Switch, Text, View, TextProps } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'
import { ReactNode } from "react";

// interface IconProps {
//   icon: keyof typeof MaterialIcons.glyphMap
// }

// interface OptionsProps {
//   children: ReactNode
// }

// function Preferences({ children }: OptionsProps) {
//   <View style={styles.preferencesContainer}>
//     {children}
//   </View>
// }

// function Icon({ icon }: IconProps) {
//   return <MaterialIcons style={{ marginRight: 8 }} name={icon} size={22} color={'#484646'} />
// }

// function Title({ ...rest }: TextProps) {
//   return <Text style={styles.options}  {...rest} />
// }

// Preferences.Title = Title
// Preferences.Icon = Icon

// export { Preferences }



export default function Preferences() {
  return (
    <View style={styles.preferencesContainer}>
      <Text style={styles.preferencesText}>Preferências</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomColor: '#484646', borderBottomWidth: 1 }}>
        <MaterialIcons name='dark-mode' size={22} color={'#484646'} style={{ marginRight: 8 }} />
        <Text style={styles.options}>Darkmode</Text>
        <Switch />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomColor: '#484646', borderBottomWidth: 1 }}>
        <MaterialIcons name='mail' size={22} color={'#484646'} style={{ marginRight: 8 }} />
        <Text style={styles.options}>Email Publico</Text>
        <Switch />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  preferencesContainer: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#484646',
    paddingHorizontal: 8
  },
  preferencesText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#484646',
    paddingHorizontal: 4,
    paddingVertical: 12
  },
  options: {
    fontSize: 14,
    fontWeight: 'medium',
    color: '#484646',
    flex: 1
  },
})