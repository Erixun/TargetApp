import { Dimensions, StyleSheet, View } from "react-native";
import Color from "../constant/Color";

const Card = ({ children, style }: { children: React.ReactNode; style?: any }) => {
  return <View style={{ ...styles.card, ...style }}>{children}</View>;
}

export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Color.primary700,
    padding: 20,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.56,
    elevation: deviceWidth < 380? 4 : 6,
  },
});