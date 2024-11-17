import { StyleSheet, Pressable, View } from "react-native";

function ReusableCard({color, cardChild, onPress, style}){
    return (
        <Pressable onPress={onPress} style={[styles.buttonContainer,{backgroundColor: color},style]}>
            <View>
                {cardChild}
            </View>
        </Pressable>
    );
}
export default ReusableCard;

const styles = StyleSheet.create({
    buttonContainer:{
        margin: 15,
        borderRadius: 10,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {height: 4, width: 0},
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
   
});