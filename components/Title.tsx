import { View, Text, StyleSheet } from 'react-native';

const Title = ({ children }: { children: string }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    // fontWeight: 'bold',
    color: "white",//Color.accent500,
    borderWidth: 2,
    borderColor: "white",//Color.accent500,
    textAlign: 'center',
    padding: 12,
    backgroundColor: "rgba(84, 11, 47, 0.5)"//Color.primary700,
  },
});
