import { View, Text, StyleSheet } from 'react-native';

const Title = ({ children }: { children: string }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    width: 300,
    maxWidth: '80%',
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
    color: 'white',
    backgroundColor: 'rgba(84, 11, 47, 0.5)', //Color.primary700,
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center',
  },
});
