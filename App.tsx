/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
  Alert,
  ScrollView,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';

function App() {
  function handleTap() {
    Alert.alert('message');
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeView}>
        {/* ===== TODO: ScrollView ===== */}
        <ScrollView>
          {/* ===== TODO: MainView ===== */}
          <View style={styles.imageContainer}>
            {/* ===== TODO: Fast IMG ===== */}
            <FastImage
              style={styles.img}
              source={{
                uri: 'https://media1.tenor.com/m/ps67m_SI04UAAAAC/mike-tyson-awkward-smile.gif',
                priority: FastImage.priority.normal,
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
            {/* ===== TODO: Regular IMG ===== */}
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
          {/* ===== TODO: Pressable (Button) ===== */}
          <Pressable style={styles.btnStyle} onPress={handleTap}>
            <Text style={styles.btnText}> Press Me !</Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;

const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: '#25343F',
    padding: 12,
    margin: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  safeView: {
    backgroundColor: '#FFF4EA',
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
