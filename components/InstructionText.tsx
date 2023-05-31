import { StyleProp, Text, TextStyle } from 'react-native';
import Color from '../constant/Color';
import { StyleSheet } from 'react-native';

const InstructionText = ({ children, style }: { children: string, style?: StyleProp<TextStyle> }) => {
  return <Text style={[style, styles.instructionText]}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: { //overrides style prop
    fontFamily: 'open-sans',
    fontSize: 18,
    color: Color.accent500,
    textAlign: 'center',
    marginBottom: 12,
  },
});
