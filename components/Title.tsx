import { View, Text, StyleSheet } from 'react-native';
import Color from '../constant/Color';

const Title = ({ children }: { children: string }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "white",//Color.accent500,
    borderWidth: 2,
    borderColor: "white",//Color.accent500,
    textAlign: 'center',
    padding: 12,
    backgroundColor: "rgba(84, 11, 47, 0.5)"//Color.primary700,
  },
});
