import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View } from 'react-native';
import "./global.css"
import { GluestackUIProvider } from './components/gluestack-ui-provider';
import {Text} from "./components/ui/text"
export default function App() {
  return (
    <GluestackUIProvider>
    <View style={styles.container}>
      <Text size='xl'>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
    </GluestackUIProvider>
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
