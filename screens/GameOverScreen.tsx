import { Button, Platform, StyleSheet, Text, View } from 'react-native';
import Title from '../components/Title';
import { Image } from 'react-native';
import Color from '../constant/Color';
import { Dimensions } from 'react-native';
import { useEffect, useState } from 'react';

const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('window');

const GameOverScreen = ({
  guessRound,
  userNumber,
  onRestart,
}: {
  guessRound: number;
  userNumber?: number;
  onRestart: () => void;
}) => {
  const [dimensions, setDimensions] = useState({
    window: windowDimensions,
    screen: screenDimensions,
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      'change',
      ({ window, screen }) => {
        console.log('change!');
        setDimensions({ window, screen });
      }
    );
    return () => subscription?.remove();
  });

  const [dynamicStyles, setDynamicStyles] = useState({});

  useEffect(() => {
    const safeWidth = dimensions.window.width * 0.8;
    const maxImageWidth = 300;
    const imgWidth = Math.min(safeWidth, maxImageWidth);
    setDynamicStyles({
      height: imgWidth,//maxImageWidth < safeWidth ? maxImageWidth : safeWidth,
      width: imgWidth,//safeWidth,
      borderRadius: imgWidth / 2,
    });
  }, [window]);

  return (
    <View style={styles.screen}>
      <Title>The Game is Over!</Title>
      <View style={[styles.imageContainer, dynamicStyles]}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={require('../assets/images/success.png')}
        />
      </View>
      <Text style={styles.infoText}>
        Your phone required{' '}
        <Text style={styles.highlight}>{guessRound || 33}</Text> rounds to guess
        the correct number <Text style={styles.highlight}>{userNumber}</Text>
      </Text>
      {/* <Text>Number was: {props.userNumber}</Text> */}

      <Button title="NEW GAME" onPress={onRestart} />
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    margin: 40,
    overflow: 'hidden',
    // Solved with dynamicStyles:
    // height: windowDimensions.width - 40,
    // width: windowDimensions.width - 40,
    // borderRadius: (windowDimensions.width - 40) / 2, //should be half of width/height
  },
  image: {
    height: '100%',
    width: '100%',
  },
  infoText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  highlight: {
    color: Color.accent500,
  },
  button: {
    backgroundColor: Color.primary500,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
});
