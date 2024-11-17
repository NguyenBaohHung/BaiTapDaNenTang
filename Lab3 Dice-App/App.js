import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View} from 'react-native';
import Dice from './components/Dice';



export default function App() {
  const diceNumber = (()=>Math.floor(Math.random()*6)+1)
  
  const [enteredLeftNumber, setLeftNumber] = useState(1);
  const [enteredRightNumber, setRightNumber] = useState(1);
  
  function onTapChangeLeftDice() {
    setLeftNumber(diceNumber());
  }

  function onTapChangeRightDice(){
    setRightNumber(diceNumber());
  }

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Dice diceNumber={enteredLeftNumber}  onTapRandomDice={onTapChangeLeftDice} />
      </View>
      <View style={styles.innerContainer}>
        <Dice diceNumber={enteredRightNumber}  onTapRandomDice={onTapChangeRightDice} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#d83810',
    alignItems: 'center',
    justifyContent: 'center'
  },
  innerContainer: {
    paddingHorizontal: 10,
  },
});
