import { View, Text, StyleSheet, TextInput } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

const StartGameScreen = (props: any) => {
  return (
    <View style={styles.screen}>
      <Text>The Game Screen! There should be input below</Text>
      <TextInput style={styles.numberInput} keyboardType='number-pad' maxLength={2} placeholder='##' />
      <View style={styles.buttonContainer}>
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    marginTop: 100,
    width: "100%",
    // flex: 1,
    padding: 10,
    alignItems: 'center',
    // backgroundColor: "purple",
    color: "white"
  },
  numberInput: {
    // flex: 1,
    minHeight: 50,
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    // backgroundColor: "black",
    paddingHorizontal: 10,
    marginVertical: 8,
    width: 60,
    borderStyle: "solid",
    borderBottomWidth: 5,
    borderColor: "red",
  },
  buttonContainer: {
    backgroundColor: "darkblue",
    color: "white",
    flexDirection: 'row',
    marginTop: 30,
    gap: 15,
    borderRadius: 5,
    //ANDROID ONLY
    elevation: 5, 
    //IOS ONLY
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.3
  },
});
