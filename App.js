import 'react-native-gesture-handler';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Picker,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function SelectionCountryScreen() {
  return(
    <ImageBackground source={require("./img/bg-img.jpg")} style={styles.bgImg}>
      <Text style={styles.title}>TopRating</Text>
      <Text style={styles.introText}>Search for differents countrys and get to know their top rating musics!</Text>
      <View style={styles.separator}></View>
      <View style={styles.container}>
        <Text style={styles.textStart}>Get Started:</Text>
        <Picker style={styles.picker} mode={"dropdown"}>
          <Picker.Item label="XX" value="none" />
          <Picker.Item label="Brazil" value="br" />
          <Picker.Item label="Italy" value="it" />
          <Picker.Item label="United States" value="us" />
          <Picker.Item label="United Kingdom" value="uk" />
          <Picker.Item label="World Wide" value="xw" />
        </Picker>
        <Text style={styles.textOption}>Search for a country and select it in one of the options above or set as worldwide.</Text>
        </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bgImg: {
    width: "100%",
    height: "100%",
  },

  title: {
    color: "#fff",
    fontFamily: "sans-serif-light",
    letterSpacing: -5,
    fontSize: 68,
    textAlign: "center",
    marginTop: 30,
  },

  introText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    maxWidth: 300,
    alignSelf: "center",
  },

  separator: {
    backgroundColor: "#fff",
    width: 120,
    height: 3,
    alignSelf: "center",
    marginTop: 10,
  },

  container: {
    marginTop: 100,
    marginLeft: 26,
  },

  textStart: {
    color: "#fff",
    fontSize: 18,
  },

  picker: {
    color: "#fff",
    width: 350,
    marginTop: 5,
  },

  textOption: {
    color: "#fff",
    fontSize: 15,
    maxWidth: 360,
    marginTop: 250,
  },
});

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={SelectionCountryScreen} 
          options={{
            headerStyle: {
              backgroundColor: "#8D1541",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;