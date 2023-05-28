import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState<number | undefined>(undefined);

  const handleGuess = (guess: number) => {
    console.log('Guessing', guess, '...');
    setUserNumber(guess);
  };

  const screen = userNumber ? (
    <GameScreen userNumber={userNumber} />
  ) : (
    <StartGameScreen handleGuess={handleGuess} />
  );

  return (
    <LinearGradient style={styles.rootScreen} colors={['orange', 'red']}>
      <ImageBackground
        style={styles.rootScreen}
        source={require('./assets/dice.jpg')}
        resizeMode="cover"
        imageStyle={{ opacity: 0.6 }}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});
