import { StyleSheet, Text, View } from 'react-native';
import Color from '../../constant/Color';

const NumberContainer = ({ children }: { children: number }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Color.accent500,
    borderRadius: 10,
    padding: 12,
    marginVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontSize: 36,
    fontWeight: 'bold',
    color: Color.accent500,
  },
});
