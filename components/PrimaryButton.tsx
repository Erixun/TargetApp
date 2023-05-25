import { ReactNode } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const PrimaryButton = ({ children }: PrimaryButtonProps) => {
  return (
    <View>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    width: 100,
    paddingVertical: 5,
    paddingHorizontal: 15,
    color: "white"
  }
})

type PrimaryButtonProps = {
  children: ReactNode
}