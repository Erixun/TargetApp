import { View, Text, StyleSheet, TextInput, Alert } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import { useState } from 'react';
import Color from '../constant/Color';

const StartGameScreen = ({
  handleGuess,
}: {
  handleGuess: (guess: number) => void;
}) => {
  const [number, setNumber] = useState('');

  const handleInput = (value: string) => {
    if (isValidInput(value)) setNumber(value);
  };

  const isValidInput = (value: string) =>
    !isNaN(Number(value)) && Number(value) > 0;

  const makeGuess = () => {
    console.log('Guessing', number, '...');
    if (isValidInput(number)) {
      console.log('This is a valid guess');
      handleGuess(Number(number));
      return setNumber('');
    }

    Alert.alert('Invalid Input!', 'Please enter a number between 1 and 99', [
      { text: 'Okay', style: 'destructive', onPress: resetInput },
    ]);
  };

  const resetInput = () => {
    setNumber('');
  };
  return (
    <View style={styles.inputContainer}>
      <Text style={{ color: 'white', fontSize: 16 }}>
        Guess a number between 1 and 99
      </Text>
      <TextInput
        style={styles.numberInput}
        keyboardType="number-pad"
        maxLength={2}
        placeholder="##"
        autoCapitalize="none"
        autoCorrect={false}
        value={number}
        onChangeText={handleInput}
      />
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={resetInput}>Reset</PrimaryButton>
        <PrimaryButton onPress={makeGuess}>Confirm</PrimaryButton>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 20,
    padding: 20,
    alignItems: 'center',
    backgroundColor: Color.primary700,
    borderRadius: 5,
    //ANDROID ONLY
    elevation: 5,
    //IOS ONLY
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    shadowOpacity: 0.4,
  },
  numberInput: {
    color: 'orange',
    minHeight: 50,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 10,
    marginTop: 8,
    width: 60,
    borderStyle: 'solid',
    borderBottomWidth: 3,
    borderColor: 'orange',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 15,
    borderRadius: 8,
  },
});
