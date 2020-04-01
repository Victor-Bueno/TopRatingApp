import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
} from 'react-native';
import LyricsProvider from "../provider/LyricsProvider"

export default class SearchResultScreen extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            trackName: props.route.params.trackName,
            trackID: props.route.params.trackID,
            details: props.route.params.details,
            lyrics: "Not found",
            loading: true,
        }
    }
    
    componentDidMount() {
        LyricsProvider.getLyrics(this.state.trackID)
            .then(lyrics => this.setState({ loading: false, lyrics }))
            .catch((err) => {
                console.log(err)
                Alert.alert(
                    'Error',
                    'Error trying to search for the lyrics',
                    [
                      {text: 'Try again', onPress: () => this.props.navigation.goBack()},
                    ],
                    { cancelable: false }
                  )
            });
    }

    render() {
        if(this.state.loading) {
            return (
                <View style={styles.background}>
                    <Text style={styles.loading}>Loading...</Text>
                </View>
            );
        }
        else{
            return (
                <ScrollView>
                    <View style={styles.background}>
                        <View style={styles.container}>
                            <Text style={styles.titleText}>{this.state.trackName}</Text>
                            <View style={styles.separator}></View>
                            <Text style={styles.infoText}>Artist: {this.state.details.artist}</Text>
                            <Text style={styles.infoText}>Album: {this.state.details.album}</Text>
                            <Text style={styles.infoText}>Release Date: {this.state.details.releaseDate}</Text>
                            <Text style={styles.infoText}>Explict Words: {this.state.details.explicit}</Text>
                            <Text style={styles.lyricsTitleText}>Lyrics:</Text>
                            <Text style={styles.lyricsText}>{this.state.lyrics}</Text>
                        </View>
                    </View>
                </ScrollView>
            );
        }
    }
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#2f2538",
        flex: 1,
    },

    loading: {
        color: "#fff",
        fontSize: 24,
        textAlign: "center",
        marginTop: 100,
    },

    container: {
        marginTop: 30,
        marginLeft: 30,
    },

    titleText: {
        color: "#fff",
        fontSize: 36,
        fontWeight: "bold",
        marginBottom: 10,
    },

    separator: {
        backgroundColor: "#fff",
        height: 3,
        width: 320,
        marginBottom: 20,
    },

    infoText: {
        color: "#fff",
        fontSize: 18,
        maxWidth: 315,
        marginVertical: 2,
    },

    lyricsTitleText: {
        color: "#fff",
        fontSize: 18,
        marginTop: 25,
        marginBottom: 10,
    },

    lyricsText: {
        color: "#fff",
        fontSize: 18,
        maxWidth: 315,
        marginBottom: 30,
    },
});