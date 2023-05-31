import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useCallback, useEffect, useState } from 'react';
import GameScreen from './screens/GameScreen';
import Color from './constant/Color';
import * as Font from 'expo-font';
// import AppLoading from 'expo-app-loading';
import * as SplashScreen from 'expo-splash-screen';
import GameOverScreen from './screens/GameOverScreen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [userNumber, setUserNumber] = useState<number | undefined>(undefined);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [isReady, setIsReady] = useState(false);
  
  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(
          'open-sans',
          require('./assets/fonts/OpenSans-Regular.ttf')
        );
        await Font.loadAsync(
          'open-sans-bold',
          require('./assets/fonts/OpenSans-Bold.ttf')
        );
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        // await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setIsReady(true);
      }
    }

    prepare();
  }, []);
  const handleGuess = (guess: number) => {
    console.log('Guessing', guess, '...');
    setUserNumber(guess);
  };

  const handleGameOver = () => {
    setUserNumber(undefined);
    setIsGameOver(true);
  };

  // const [loaded] = useFonts({
  //   'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
  //   'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  // });

  const onLayoutRootView = useCallback(async () => {
    if (isReady) await SplashScreen.hideAsync();
  }, [isReady]);

  if (!isReady) return null;

  // if (!fontsLoaded) return <AppLoading />;

  const screen = isGameOver ? (
    <GameOverScreen />
  ) : userNumber ? (
    <GameScreen userNumber={userNumber} handleGameOver={handleGameOver} />
  ) : (
    <StartGameScreen handleGuess={handleGuess} />
  );

  return (
    <LinearGradient
      style={styles.rootScreen}
      colors={[Color.primary700, Color.accent500]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      onLayout={onLayoutRootView}
    >
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
