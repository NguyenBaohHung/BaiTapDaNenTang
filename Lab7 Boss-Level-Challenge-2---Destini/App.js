import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView } from 'react-native';
import QuizScreen from './screens/QuizScreen';
import StoryBrain from './model/StoryBrain';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const storyBrain = new StoryBrain();

export default function App() {
  const [storyNumber, setStoryNumber] = useState(0);

  const handleFirstChoice = () => {
    storyBrain.nextStory(1);
    setStoryNumber(storyBrain.storyNumber);
  }


  const handleSecondChoice = () => {
    storyBrain.nextStory(1);
    setStoryNumber(storyBrain.storyNumber);
  }
  return (
    <LinearGradient style={styles.container} colors={['#ff7e5f', '#feb47b']}>
      <ImageBackground source={require('./assets/images/background.png')} style={styles.container}
        resizeMode='cover' imageStyle={styles.img}>
        <SafeAreaView style={styles.container}>
          <QuizScreen title={storyBrain.getStory()} firstTitle={storyBrain.getFirstChoice()} secondTitle={storyBrain.getSecondChoice()}
          handleChoice1={handleFirstChoice} handleChoice2={handleSecondChoice}  shouldBeVisible={storyBrain.buttonShouldBeVisible}/>
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    opacity: 0.25,
  }
});
