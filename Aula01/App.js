import { StyleSheet, Text, View } from 'react-native';
import Ex01 from './src/components/Ex01'
import Ex02 from './src/components/Ex02'
import Ex02 from './src/components/Ex03'
import Ex04 from './src/components/Ex04';

export default function App() {
  return (
    <View style={styles.container}>
      <Ex01 nome={"Gabriel"}/>
      <Ex02 />
      <Ex03 />
      <Ex04 />
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