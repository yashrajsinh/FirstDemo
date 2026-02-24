/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeView}>
        <View style={styles.imageContainer}>
          //Online image
          <Image
            style={styles.img}
            source={{
              uri: 'https://media1.tenor.com/m/ps67m_SI04UAAAAC/mike-tyson-awkward-smile.gif',
            }}
          />
          <Image
            style={styles.img}
            source={{
              uri: 'https://media1.tenor.com/m/RV0H8QvfzTIAAAAC/burgerkingguy.gif',
            }}
          />
          //Local Image
          <Image
            style={styles.img}
            source={require('./src/images/model.jpeg')}
          />
        </View>

        <View style={styles.mainView}>
          <Text style={styles.textColor}>Hola ! 🇲🇽</Text>
        </View>
        <View style={styles.secondView}>
          <Text style={styles.textColor}>Namaste ! 🇮🇳</Text>
        </View>
        <View style={styles.thirdView}>
          <Text style={styles.textColor}>Bonjour ! 🇫🇷</Text>
        </View>
        <View>
          <TextInput style={styles.input} placeholder="Useless"></TextInput>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;

const styles = StyleSheet.create({
  safeView: {
    backgroundColor: '#F075AE',
    flex: 1,
    padding: 1,
  },
  imageContainer: {
    flexDirection: 'row', // Aligns children horizontally flexWrap: 'wrap',
    justifyContent: 'center',
  },
  img: {
    flex: 1,
    height: 150,
    padding: 2,
    borderRadius: 25,
  },
  mainView: {
    margin: 5,
    padding: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#FFB2B2',
  },
  secondView: {
    justifyContent: 'center',
    margin: 5,
    padding: 5,
    borderRadius: 10,
    alignContent: 'center',
    backgroundColor: '#E36A6A',
  },
  thirdView: {
    backgroundColor: '#DDAED3',
    borderRadius: 10,
    margin: 5,
    padding: 5,
    justifyContent: 'center',
    alignContent: 'center',
  },
  input: {
    height: 40,
    margin: 8,
    borderRadius: 10,
    borderWidth: 1.5,
    padding: 5,
  },
  textColor: {
    fontSize: 25,
    fontStyle: 'normal',
    textAlign: 'center',
  },
});
