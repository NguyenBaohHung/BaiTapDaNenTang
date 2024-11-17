import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import CalculatorBrain from "../model/CalculatorBrain"
import Slider from "@react-native-community/slider";
import ReusableCard from "../components/ReusableCard";
import IconContent from "../components/IconContent";
import Style from "../components/Style";
import Colors from "../constants/Colors"
import RoundIconButton from "../components/RoundIconButton"
import BottomButton from "../components/BottomButton"

const Gender = {
    MALE: 'male',
    FEMALE: 'female',
}

function InputScreen({ navigation }) {
    const [selectedGender, setSelectedGender] = useState(null);
    const [height, setHeight] = useState(120);
    const [weight, setWeight] = useState(60);
    const [age, setAge] = useState(20);

    const handleCalculate = () => {
        const result = new CalculatorBrain(height, weight);
        navigation.navigate('ResultPage', {
            bmiResult: result.calculateBMI(),
            resultTxt: result.getResult(),
            interpretation: result.getInterpretation(),
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <TouchableOpacity
                    style={[styles.card, selectedGender === Gender.MALE ? styles.activeCard : styles.inactiveCard]}
                    onPress={() => setSelectedGender(Gender.MALE)}
                >
                    <IconContent iconName={"mars"} label={"MALE"} />
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.card, selectedGender === Gender.FEMALE ? styles.activeCard : styles.inactiveCard]}
                    onPress={() => setSelectedGender(Gender.FEMALE)}
                >
                    <IconContent iconName={"venus"} label={"FEMALE"} />
                </TouchableOpacity>
            </View>

            <ReusableCard cardChild={
                <>
                    <Text style={Style.labelTxt}>HEIGHT</Text>
                    <Text style={Style.numberTxt}>{height} cm</Text>
                    <Slider
                        style={styles.slider}
                        minimumValue={120}
                        maximumValue={220}
                        thumbTintColor={Colors.bottomContainerColor}
                        minimumTrackTintColor="#FFFFFF"
                        maximumTrackTintColor="#8D8E98"
                        onValueChange={(value) => setHeight(Math.round(value))}
                    />
                </>
            } />


            <View style={styles.row}>
                <ReusableCard
                    cardChild={
                        <>
                            <Text style={Style.labelTxt}>WEIGHT</Text>
                            <Text style={Style.numberTxt}>{weight}</Text>
                            <View style={styles.row}>
                                <RoundIconButton iconName={"minuscircleo"} onPress={() => setWeight(weight - 1)} />
                                <RoundIconButton iconName={"pluscircleo"} onPress={() => setWeight(weight + 1)} />
                            </View>
                        </>
                    }
                />

                <ReusableCard
                    cardChild={
                        <>
                            <Text style={Style.labelTxt}>AGE</Text>
                            <Text style={Style.numberTxt}>{age}</Text>
                            <View style={[styles.row]}>
                                <RoundIconButton iconName={"minuscircleo"} onPress={() => setAge(age - 1)} />
                                <RoundIconButton iconName={"pluscircleo"} onPress={() => setAge(age + 1)} />
                            </View>
                        </>
                    }
                />
            </View>

            <BottomButton title={"CALCULATE"} onPress={handleCalculate} />
        </View>

    );
}

export default InputScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: Colors.activeCardColor,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        padding: 10,
    },
    card: {
        flex: 1,
        margin: 5,
        padding: 10,
        borderRadius: 10,
        backgroundColor: Colors.inActiveCardColor
    },
    activeCard: {
        backgroundColor: Colors.bottomContainerColor,
    },
    inactiveCard: {
        backgroundColor: Colors.activeCardColor
    },
    slider: { width: '100%', height: 40 },
    buttonContainer:{
        marginHorizontal: 15,
    }
});