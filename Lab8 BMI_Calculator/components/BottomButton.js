import { Pressable, View, Text, StyleSheet } from "react-native";
import Style from "./Style";
import Colors from "../constants/Colors";
import SystemConstant from "../constants/SystemConstant";

function BottomButton({ title, onPress }) {
    return (
        <Pressable onPress={onPress}>
            <View style={styles.buttonContainer}>
                <Text style={Style.largeButtonTxt}>{title}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: Colors.bottomContainerColor,
        marginTop: 10,
        paddingBottom: 20,
        height: SystemConstant.bottomContainerHeight,
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default BottomButton;