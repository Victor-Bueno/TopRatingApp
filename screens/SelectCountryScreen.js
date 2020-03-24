import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Picker,
    TouchableOpacity,
} from 'react-native';
import CountryProvider from "../provider/CountryProvider";

export default class SelectCountryScreen extends Component {
  state = { 
    countries: [],
    countrySelected: "au"
  }

  componentDidMount() {
    CountryProvider.getCountries()
      .then(countries => this.setState({ countries }))
      .catch((err) => console.log(err));
  }

  renderCountryItem(country) {
    return (<Picker.Item key={country.id} label={country.name} value={country.id} />);
  }

  
  render(){
    return(
      <ImageBackground source={require("../img/bg-img.jpg")} style={styles.bgImg}>
        <Text style={styles.title}>TopRating</Text>
        <Text style={styles.introText}>Search for differents countries and get to know their top rating musics!</Text>
        <View style={styles.separator}></View>
        <View style={styles.container}>
          <Text style={styles.textStart}>Get Started:</Text>
          <Picker 
            style={styles.picker} 
            mode={"dropdown"}
            onValueChange={(itemValue) =>
              this.setState({countrySelected: itemValue})
            }
            selectedValue={this.state.countrySelected}
          >
            {this.state.countries.map((country) => this.renderCountryItem(country))}
          </Picker>
          <TouchableOpacity style={styles.searchButton} onPress={() => { this.props.navigation.navigate("SearchResult", {selectedCountryId: this.state.countrySelected}) }}>
            <Text style={styles.textStart}>Search</Text>
          </TouchableOpacity>
          <Text style={styles.textOption}>Search for a country and select it in one of the options above or set as worldwide.</Text>
        </View>
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
  
    searchButton: {
      backgroundColor: "#8D1541",
      width: 90,
      height: 50,
      borderRadius: 6,
      alignSelf: "center",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 25,
    },

    textOption: {
      color: "#fff",
      fontSize: 15,
      maxWidth: 360,
      marginTop: 190,
    },
});
