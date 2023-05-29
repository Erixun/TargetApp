import { ReactNode } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Color from '../constant/Color';

const PrimaryButton = ({ children, onPress }: PrimaryButtonProps) => {
  return (
    <View style={styles.btnOuterContainer}>
      <Pressable
        android_ripple={{ color: 'grey' }}
        style={({ pressed }) =>
          pressed
            ? [styles.btnInnerContainer, styles.btnPressed]
            : styles.btnInnerContainer
        }
        onPress={onPress}
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  btnOuterContainer: {
    borderRadius: 4,
    elevation: 2,
    overflow: 'hidden',
    flex: 1,
  },
  btnInnerContainer: {
    // width: 100,
    backgroundColor: Color.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  btnPressed: {
    opacity: 0.75,
  },
  text: {
    textAlign: 'center',
    color: 'white',
  },
});

type PrimaryButtonProps = {
  children: ReactNode;
  onPress: () => void;
};
