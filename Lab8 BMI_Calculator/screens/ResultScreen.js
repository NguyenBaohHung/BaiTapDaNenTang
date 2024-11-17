import { View, Text, StyleSheet } from "react-native"
import Colors from "../constants/Colors"
import Style from "../components/Style"
import ReusableCard from "../components/ReusableCard";
import BottomButton from "../components/BottomButton";

function ResultScreen({ navigation, route }) {
    const bmiResult = route.params.bmiResult;
    const resultTxt = route.params.resultTxt;
    const interpretation = route.params.interpretation;

    return (
        <View style={styles.container}>
            <Text style={Style.title}>Your Result</Text>
            
                    <View style={styles.resultContainer}>
                        <Text style={Style.resultTxt}>{resultTxt.toUpperCase()}</Text>
                        <Text style={Style.txtBMI}>{bmiResult}</Text>
                        <Text style={[Style.bodyTxt, { textAlign: 'center' }]}>{interpretation}</Text>
                    </View>

            <BottomButton
                title={"RE-CALCULATE"}
                onPress={() => navigation.goBack()}
            />
        </View>
    );
}

export default ResultScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: Colors.activeCardColor
    },
    resultContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});