import { View, Text, StyleSheet, Button, Pressable } from "react-native";

function QuizScreen({ title, handleChoice1, handleChoice2, firstTitle, secondTitle, shouldBeVisible }) {
    return (
        <View style={styles.container}>
            <Text style={styles.storyText}>{title}</Text>
            <View style={styles.buttonContainer}>
                <Button onPress={handleChoice1} title={firstTitle} color={'red'} />
            </View>
            {shouldBeVisible && (
                <Pressable onPress={handleChoice2} style={{backgroundColor: 'blue'}}>
                    <Text style={styles.txt}>{secondTitle}</Text>
                </Pressable>
            )
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    storyText: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#E8E8E8',
    },
    buttonContainer: {
        marginVertical: 15,
        width: '80%',
    },
    secondButton: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        padding: 15,
        borderRadius: 10,
    },
    txt:{
        color: '#E8E8E8',
    }
})
export default QuizScreen;