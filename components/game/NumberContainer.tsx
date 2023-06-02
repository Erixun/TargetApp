import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Color from '../../constant/Color';

const NumberContainer = ({ children }: { children: number }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;
const BREAKPOINT_WIDTH = 380;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Color.accent500,
    borderRadius: 10,
    paddingVertical: deviceWidth < BREAKPOINT_WIDTH? 12 : 24,
    paddingHorizontal: 18,
    marginVertical: deviceWidth < BREAKPOINT_WIDTH? 28 : 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontSize: 36,
    fontFamily: 'open-sans-bold',
    color: Color.accent500,
  },
});
