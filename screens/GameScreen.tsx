import { View, Text, StyleSheet } from "react-native/types";

const GameScreen = (props: any) => {
    return (<View style={styles.screen}>
      <Text>The Game Screen!</Text>
    </View>);
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
});