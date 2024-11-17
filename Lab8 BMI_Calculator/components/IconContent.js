import { StyleSheet, View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Style from "./Style"

function IconContent({iconName, label}){
    return(
        <View style={styles.container}>
            <FontAwesome name={iconName} size={35} color={"white"} />
            <Text style={Style.labelTxt}>{label}</Text>
        </View>
    );
}

export default IconContent;

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        elevation: 4,
    },
});