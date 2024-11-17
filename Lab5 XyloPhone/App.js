import { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Audio } from 'expo-av';
import { Pressable } from 'react-native';
import CustomButton from './components/CustomButton';

export default function App() {
  const [sounds, setSounds] = useState([]);

  const playBacks = {
    1: require('./assets/Sound/note1.wav'),
    2: require('./assets/Sound/note2.wav'),
    3: require('./assets/Sound/note3.wav'),
    4: require('./assets/Sound/note4.wav'),
    5: require('./assets/Sound/note5.wav'),
    6: require('./assets/Sound/note6.wav'),
    7: require('./assets/Sound/note7.wav'),
  }

  const playSound = async (soundFile) => {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(soundFile);
    setSounds((prevSounds) => [...prevSounds, sound]); 

    console.log('Playing Sound');
    await sound.playAsync();

    sound.setOnPlaybackStatusUpdate((status) => {
      if (status.didJustFinish) {
        console.log('Unloading Sound');
        sound.unloadAsync();
        setSounds((prevSounds) => prevSounds.filter(s => s !== sound)); 
      }
    });
  };

  useEffect(() => {
    return () => {
      sounds.forEach((sound) => {
        console.log('Unloading Sound');
        sound.unloadAsync();
      });
    };
  }, [sounds]);

  return (
    <View style={styles.container}>
      <CustomButton customStyle={{backgroundColor:'red'}} colorButton={{backgroundColor:'red'}} onPlayWav={()=>playSound(playBacks[1])}  />
      <CustomButton customStyle={{backgroundColor:'orange'}} colorButton={{backgroundColor:'orange'}} onPlayWav={()=>playSound(playBacks[2])}  />
      <CustomButton customStyle={{backgroundColor:'yellow'}} colorButton={{backgroundColor:'yellow'}} onPlayWav={()=>playSound(playBacks[3])}  />
      <CustomButton customStyle={{backgroundColor:'green'}} colorButton={{backgroundColor:'green'}} onPlayWav={()=>playSound(playBacks[4])}  />
      <CustomButton customStyle={{backgroundColor:'teal'}} colorButton={{backgroundColor:'teal'}} onPlayWav={()=>playSound(playBacks[5])}  />
      <CustomButton customStyle={{backgroundColor:'blue'}} colorButton={{backgroundColor:'blue'}} onPlayWav={()=>playSound(playBacks[6])}  />
      <CustomButton customStyle={{backgroundColor:'purple'}} colorButton={{backgroundColor:'purple'}} onPlayWav={()=>playSound(playBacks[7])}  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    padding: 80,
    flexDirection: 'column',
  },
});
