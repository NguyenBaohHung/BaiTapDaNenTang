import { Pressable, StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
function RoundIconButton({ iconName, onPress }) {
    return (
        <View style={{paddingHorizontal: 5}}>
            <Pressable onPress={onPress} android_ripple={{ color: '#F5F3F6' }}
                style={({ pressed }) => [styles.buttonContainer, pressed ? styles.button : null]}>
                <AntDesign name={iconName} size={25} color={"black"} />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 28,
        width: 56,
        height: 56,
        elevation: 4,
        backgroundColor: '#4C4F5E',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        opacity: 0.5,
    },
});



export default RoundIconButton;