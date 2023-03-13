import { StyleSheet, View } from 'react-native';
import HomePage from './Ekrani/homePage';

export default function App() {
  return (
    <View style={styles.ekran}>
      <HomePage />
    </View>
  );
}

const styles = StyleSheet.create({
  ekran: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
