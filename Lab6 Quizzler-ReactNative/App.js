import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import QuizBrain from './models/QuizBrain';
import { useState } from 'react';

const quizBrain = new QuizBrain();

export default function App() {
  const [scoreKeeper, setScoreKeeper] = useState([]);

  const checkAnswer = (userPicked) => {
    const correctAnswer = quizBrain.getCorrectAnswer();

    if (quizBrain.isFinished()) {
      Alert.alert('Finished!', "You have reached the end of quiz", [{ text: 'Ok', style: 'destructive' }])
      quizBrain.reset();
      setScoreKeeper([]);
    } else {
      if (userPicked === correctAnswer) {
        setScoreKeeper([...scoreKeeper, "✔️"]);
      } else {
        setScoreKeeper([...scoreKeeper, "❌"]);
      }
      quizBrain.nextQuestion();
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.textQuestion}>{quizBrain.getQuestionText()}</Text>
      <View style={styles.buttonContainer}>
        <Button color={'#4CAF50'} title='True' onPress={() => checkAnswer(true)} />
      </View>
      <View style={styles.buttonContainer}>
        <Button color={'#F44336'} title='False' onPress={() => checkAnswer(false)} />
      </View>
      <View>
        {scoreKeeper.map((icon, index) => (
          <Text key={index}>{icon}</Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#060B6F',
    justifyContent: 'center',
    padding: 20,
  },
  textQuestion: {
    paddingVertical: '50%',
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginBottom: 20,
  },
});
