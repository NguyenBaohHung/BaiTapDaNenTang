import { View, Pressable, StyleSheet, Text } from "react-native";

function CustomButton({ customStyle, onPlayWav, colorButton }) {
    return (
        <View style={[styles.container, customStyle]}>
            <Pressable style={[styles.button,colorButton]} onPress={onPlayWav} android_ripple={{ color: '#c3cd18' }}>
                <Text>1</Text>
            </Pressable>
        </View>
    );
}

export default CustomButton;
const styles = StyleSheet.create({
    container: {
        width: 400,
        height: 100,
    },
    innerText: {
        color: 'white',
        fontSize: 15,
    },
    button: {
        padding: 35,
    },
});