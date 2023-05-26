import { View, Text, StyleSheet, TextInput } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import { useState } from 'react';

const StartGameScreen = (props: any) => {
  
  const [number, setNumber] = useState('')
  
  const handleInput = (value:any) => {
    console.log(value)
    if(isNaN(value)) return
    
    setNumber(value)
  }

  return (
    <View style={styles.inputContainer}>
      <Text style={{color: "white"}}>The Game Screen! There should be input below</Text>
      <TextInput
        style={styles.numberInput}
        keyboardType="number-pad"
        maxLength={2}
        placeholder="##"
        autoCapitalize='none'
        autoCorrect={false}
        value={number}
        onChangeText={handleInput}
      />
      <View style={styles.buttonContainer}>
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 20,
    // width: "100%",
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#72063c',
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
