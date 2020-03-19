import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from 'react-native';

export default class App extends Component {
  render() {
    return(
      <ImageBackground source={require("./img/bg-img.jpg")} style={styles.bgImg}>
        <Text style={styles.title}>TopRating</Text>
        <Text style={styles.introText}>Search for differents countrys and get to know their top rating musics!</Text>
        <View style={styles.separetor}></View>
      </ImageBackground>
    );
  }
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
    marginTop: 60,
  },

  introText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    maxWidth: 300,
    alignSelf: "center",
  },

  separetor: {
    backgroundColor: "#fff",
    width: 120,
    height: 3,
    alignSelf: "center",
    marginTop: 10,
  }
});