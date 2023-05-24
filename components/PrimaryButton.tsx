import { StyleSheet, Text, TouchableOpacity, View } from "react-native/types";

const PrimaryButton = ({ children, ...props }: any) => {
    return (<TouchableOpacity {...props}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </TouchableOpacity>);
};

const styles = StyleSheet.create({
    button: {
        // backgroundColor: Colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
    },
    buttonText: {
        color: 'white',
        fontFamily: 'open-sans',
        fontSize: 18,
    },
});