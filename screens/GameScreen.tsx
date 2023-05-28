import { View, Text, StyleSheet, StatusBar, Platform } from 'react-native';
import Title from '../components/Title';

const GameScreen = ({ userNumber }: { userNumber: number }) => {
  return (
    <View style={styles.screen}>
      {/* <Text style={{color: "white"}}>
        </Text> */}
      <Title>Opponent's Guess</Title>
      <Text style={{ color: 'white' }}>{userNumber}</Text>
      <View>
        <Text style={{ color: 'white' }}>Higher or lower?</Text>
        <Text>+ - buttons</Text>
      </View>
      <View>
        <Text style={{ color: 'white' }}>Round #</Text>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    marginHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#4a0427',
    color: 'white',
  },
});
