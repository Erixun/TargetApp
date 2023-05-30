import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import Color from './constant/Color';

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
    <LinearGradient style={styles.rootScreen} colors={[Color.primary700, Color.accent500]} start={{x: 0.5, y: 0}} end={{x: 0.5, y: 1}}>
      <ImageBackground
        style={styles.rootScreen}
        source={require('./assets/dice.jpg')}
        resizeMode="cover"
        imageStyle={{ opacity: 0.5 }}
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
