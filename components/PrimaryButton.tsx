import { ReactNode } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const PrimaryButton = ({ children }: PrimaryButtonProps) => {
  return (
    <View style={styles.btnOuterContainer}>
      <Pressable
        android_ripple={{ color: 'grey' }}
        style={({ pressed }) => pressed ? [styles.btnInnerContainer, styles.btnPressed] : styles.btnInnerContainer}
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  btnOuterContainer: {
    backgroundColor: 'darkred',
    borderRadius: 4,
    elevation: 2,
    overflow: 'hidden',
    flex: 1
  },
  btnInnerContainer: {
    // width: 100,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  btnPressed: {
    opacity: 0.75
  },
  text: {
    textAlign: 'center',
    color: 'white',
  },
});

type PrimaryButtonProps = {
  children: ReactNode;
};
