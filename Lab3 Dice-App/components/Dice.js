export default Dice;

import { Image, View, StyleSheet, Pressable } from 'react-native'

function Dice(props) {

    const diceImages = {
        1: require('../assets/images/dice1.png'),
        2: require('../assets/images/dice2.png'),
        3: require('../assets/images/dice3.png'),
        4: require('../assets/images/dice4.png'),
        5: require('../assets/images/dice5.png'),
        6: require('../assets/images/dice6.png'),
    }


    return (
        <Pressable onPress={props.onTapRandomDice}>
            <Image style={styles.diceImage} source={diceImages[props.diceNumber]} />
        </Pressable>
    )

}
const styles = StyleSheet.create({
    diceImage: {
        width: 100,
        height: 100,
    }
});