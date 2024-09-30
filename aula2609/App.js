import { StyleSheet, View } from 'react-native';
import FraseScreen from './src/screens/FraseScreen';
import { FrasesProvider } from './src/context/FrasesContext';
import { TimeProvider } from './src/context/TimerContext';

export default function App() {
  return (
    <View style={styles.container}>
      <FrasesProvider>
        <TimeProvider>
          <FraseScreen/>
        </TimeProvider>
      </FrasesProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
