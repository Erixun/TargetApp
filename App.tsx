import { ImageBackground, StyleSheet } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient style={styles.rootScreen} colors={['orange', 'red']}>
      <ImageBackground
        style={styles.rootScreen}
        source={require('./assets/dice.jpg')}
        resizeMode="cover"
        imageStyle={{ opacity: 0.6 }}
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
