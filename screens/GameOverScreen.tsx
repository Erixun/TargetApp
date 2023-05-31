import { Button, Platform, StyleSheet, Text, View } from 'react-native';
import Title from '../components/Title';
import { Image } from 'react-native';
import Color from '../constant/Color';
import { Dimensions } from 'react-native';
import { useEffect, useState } from 'react';

const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('window');

const GameOverScreen = (props: any) => {
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
    setDynamicStyles({
      height: safeWidth,
      width: safeWidth,
      borderRadius: safeWidth / 2,
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
        <Text style={styles.highlight}>{props.roundsNumber || 33}</Text> rounds
        to guess the correct number <Text style={styles.highlight}>66</Text>
      </Text>
      {/* <Text>Number was: {props.userNumber}</Text> */}
      {/* <Button title="NEW GAME" onPress={props.onRestart}/> */}
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
    // height: windowDimensions.width - 40,
    // width: windowDimensions.width - 40,
    // borderRadius: (windowDimensions.width - 40) / 2, //should be half of width/height
    overflow: 'hidden',
    // borderWidth: 3,
    // borderColor: Color.primary800
  },
  image: {
    height: '100%',
    width: '100%',
  },
  infoText: {
    color: "white",
    fontSize: 18,
    textAlign: 'center'
  },

  highlight: {
    color: Color.accent500,
  },
});
