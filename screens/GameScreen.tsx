import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Platform,
  Alert,
  FlatList,
} from 'react-native';
import Title from '../components/Title';
import Color from '../constant/Color';
import { useEffect, useState } from 'react';
import PrimaryButton from '../components/PrimaryButton';
import NumberContainer from '../components/game/NumberContainer';
import { Ionicons } from '@expo/vector-icons';
import Card from '../components/Card';
import InstructionText from '../components/InstructionText';
import { GuessRound } from '../App';

const GameScreen = ({
  userNumber,
  guessList,
  handleGuess,
  handleGameOver,
}: {
  userNumber: number;
  guessList: GuessRound[];
  handleGuess: (value: number) => void;
  handleGameOver: () => void;
}) => {
  const initialGuess = generateRandomNumber(1, 100, userNumber);

  const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);

  const [min, setMin] = useState<number>(1);
  const [max, setMax] = useState<number>(101);

  // useEffect(() => {
  //   if (currentGuess === userNumber) {
  //     console.log('You win!');
  //     Alert.alert('You win!');
  //   }
  // }, [currentGuess, userNumber]);

  const giveHint = (direction: 'lower' | 'higher') => () => {
    const [hasInputLower, hasInputHigher] =
      direction === 'lower' ? [true, false] : [false, true];

    const [isCorrectLower, isCorrectHigher] = [
      currentGuess > userNumber,
      currentGuess < userNumber,
    ];
    const hasLied =
      (hasInputLower && isCorrectHigher) || (hasInputHigher && isCorrectLower);
    if (hasLied)
      return Alert.alert("Don't lie!", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
    if (hasInputLower) setMax(currentGuess);
    else setMin(currentGuess);

    const nextGuess = generateRandomNumber(min, max, currentGuess);
    handleGuess(nextGuess);
    if (nextGuess === userNumber) {
      // Alert.alert('You win!');
      handleGameOver();
    }

    setCurrentGuess(nextGuess);
  };

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>

      <Card>
        <InstructionText
          style={{ textTransform: 'capitalize', color: 'white' }}
        >
          Higher or lower?
        </InstructionText>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={giveHint('lower')}>
            <Ionicons name="md-remove" size={24} color="white" />
          </PrimaryButton>
          <PrimaryButton onPress={giveHint('higher')}>
            <Ionicons name="md-add" size={24} color="white" />
          </PrimaryButton>
        </View>
      </Card>
      <View style={{flex: 1, paddingVertical: 10}}>
        {/* <Text style={{ color: 'white' }}>Round #</Text> */}
        <FlatList
          data={guessList}
          //If item has a key property it gets added automatically
          // keyExtractor={(item) => item.key.toString()}
          renderItem={({ item }) => (
            <View
              style={{ 
                
                backgroundColor: Color.accent500,
                borderRadius: 20,
                flexDirection: 'row', justifyContent: 'space-between',
                padding: 10,
                marginVertical: 10,
                elevation: 5,
              }}
            >
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'open-sans-bold',
                }}
              >
                {item.key+1}. Guess {item.value}
              </Text>
              {/* <Text style={{ color: 'white' }}>{item.key}</Text> */}
            </View>
          )}
        />
        {/* {guessList.map((guess, index) => (
          <Text key={index} style={{ color: 'white' }}>
            {guess}
          </Text>
        ))} */}
      </View>
    </View>
  );
};

export default GameScreen;

const generateRandomNumber = (
  min: number,
  max: number,
  exclude: number
): number => {
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num !== exclude ? num : generateRandomNumber(min, max, exclude);
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    marginHorizontal: 20,
    borderRadius: 10,
    // backgroundColor: Color.primary700,
    // color: 'white',
    // borderWidth: 2,
    // borderColor: Color.accent500,
  },
  instructionText: {
    color: Color.accent500,
    fontSize: 18,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: 24,
    marginVertical: 16,
    paddingHorizontal: 24,
  },
});
