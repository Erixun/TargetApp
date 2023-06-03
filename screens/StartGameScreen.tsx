import { useWindowDimensions, View, Text, StyleSheet, TextInput, Alert, Dimensions } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import { useState } from 'react';
import Color from '../constant/Color';
import Title from '../components/Title';
import Card from '../components/Card';
import InstructionText from '../components/InstructionText';

const StartGameScreen = ({
  handleInputNumber,
}: {
  handleInputNumber: (guess: number) => void;
}) => {
  const [number, setNumber] = useState('');

  const handleInput = (value: string) => {
    if (isValidInput(value)) setNumber(value);
  };

  const isValidInput = (value: string) =>
    !isNaN(Number(value)) && Number(value) > 0;

  const submitNumber = () => {
    if (isValidInput(number)) {
      console.log('This is a valid number');
      handleInputNumber(Number(number));
      return setNumber('');
    }

    Alert.alert('Invalid Input!', 'Please enter a number between 1 and 99', [
      { text: 'Okay', style: 'destructive', onPress: resetInput },
    ]);
  };

  const resetInput = () => {
    setNumber('');
  };

  //This hook is used to get the dimensions of the screen
  //and will cause a re-render when the screen is rotated
  const {width, height} = useWindowDimensions();
  
  const marginTop = height < 380? 30: 100;
  
  return (
    <View style={[styles.rootContainer, {marginTop: marginTop}]}>
      <Title>Guess My Number</Title>
      {/* <View style={styles.inputContainer}> */}
      <Card style={styles.inputContainer}>
        <InstructionText>Provide a number between 1 and 99</InstructionText>
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
          <PrimaryButton onPress={submitNumber}>Confirm</PrimaryButton>
        </View>
      </Card>
      {/* </View> */}
    </View>
  );
};

export default StartGameScreen;

// const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // marginTop: deviceHeight < 380? 30: 100,
    // padding: 50,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  instructionText: {
    color: Color.accent500,
    fontSize: 18,
    textAlign: 'center',
  },
  inputContainer: {
    marginTop: 36,
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
