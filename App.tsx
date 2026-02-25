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
  ImageBackground,
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
        {/* ====== Image Background ====== */}
        <ImageBackground
          blurRadius={1}
          style={styles.backImg}
          source={{
            uri: 'https://images.unsplash.com/photo-1714894692194-2712d564b277?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
        >
          {/* ===== ScrollView Main ===== */}
          <ScrollView>
            {/* ===== ScrollView IMG ===== */}
            <ScrollView
              horizontal
              style={styles.imageContainer}
              showsHorizontalScrollIndicator={false}
            >
              {/* ===== Fast IMG ===== */}
              <FastImage
                style={styles.img}
                source={{
                  uri: 'https://media1.tenor.com/m/ps67m_SI04UAAAAC/mike-tyson-awkward-smile.gif',
                  priority: FastImage.priority.normal,
                }}
              />
              {/* ===== Regular IMG ===== */}
              <Image
                style={styles.img}
                source={require('./src/images/model.jpeg')}
              />
              {/* ===== Fast IMG ===== */}
              <FastImage
                style={styles.img}
                source={{
                  uri: 'https://media1.tenor.com/m/fL0JjU-mMLoAAAAC/kemanturawus.gif',
                  priority: FastImage.priority.normal,
                }}
              />
            </ScrollView>

            <View style={styles.mainView}>
              <Text style={styles.textColor}>🇨🇦 English – Hello </Text>
            </View>
            <View style={styles.secondView}>
              <Text style={styles.textColor}>🇮🇳 Hindi – नमस्ते (Namaste)</Text>
            </View>
            <View style={styles.thirdView}>
              <Text style={styles.textColor}>🇲🇽 Mexico (Spanish) – Hola</Text>
            </View>
            <View style={styles.mainView}>
              <Text style={styles.textColor}> 🇫🇷 Frace - Bonjour ! </Text>
            </View>
            <View style={styles.secondView}>
              <Text style={styles.textColor}> 🇩🇪 German – Hallo</Text>
            </View>
            <View style={styles.thirdView}>
              <Text style={styles.textColor}> 🇮🇹 Italian – Ciao– Hallo</Text>
            </View>
            <View style={styles.mainView}>
              <Text style={styles.textColor}>
                🇯🇵 Japanese – こんにちは (Konnichiwa)
              </Text>
            </View>
            <View style={styles.secondView}>
              <Text style={styles.textColor}>
                🇨🇳 Chinese (Mandarin) – 你好 (Nǐ hǎo)
              </Text>
            </View>
            <View style={styles.thirdView}>
              <Text style={styles.textColor}>🇷🇺 Russian – Привет (Privet)</Text>
            </View>
            <View style={styles.mainView}>
              <Text style={styles.textColor}>🇧🇷 Portuguese – Olá</Text>
            </View>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#999"
              ></TextInput>
            </View>

            <View>
              <TextInput
                style={styles.input}
                placeholder="Number"
                placeholderTextColor="#999"
              ></TextInput>
            </View>
            {/* ===== Pressable (Button) ===== */}
            <Pressable style={styles.btnStyle} onPress={handleTap}>
              <Text style={styles.btnText}> Submit</Text>
            </Pressable>
            {/* ===== Clear (Button) ===== */}
            <Pressable style={styles.btnClear} onPress={handleTap}>
              <Text style={styles.btnText}> Clear </Text>
            </Pressable>
          </ScrollView>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;

const styles = StyleSheet.create({
  backImg: {
    flex: 1,
  },
  btnStyle: {
    backgroundColor: '#008BFF',
    padding: 12,
    margin: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  btnClear: {
    backgroundColor: '#C3110C',
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
    paddingHorizontal: 10, // Aligns children horizontally flexWrap: 'wrap',
  },
  img: {
    width: 200, // 🔥 REQUIRED
    height: 150,
    margin: 5,
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
