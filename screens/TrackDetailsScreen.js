import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';


export default class SearchResultScreen extends Component {
    state = {
        trackName: 'Unknown',
        trackID: '123'
    }
    
    componentDidMount() {
        let { trackName } = this.props.route.params;
        let { trackID } = this.props.route.params;
        this.setState({ trackName, trackID });
    }

    render() {
        return (
            <View style={styles.background}>
                <View style={styles.container}>
                    <Text style={styles.titleText}>{this.state.trackName}</Text>
                    <View style={styles.separator}></View>
                    <Text style={styles.infoText}>Artist: Jane Doe</Text>
                    <Text style={styles.infoText}>Album: The Album</Text>
                    <Text style={styles.infoText}>First Release Date: 10/10/2010</Text>
                    <Text style={styles.infoText}>Explict Words: No</Text>
                    <Text style={styles.lyricsTitleText}>Lyrics:</Text>
                    <Text style={styles.lyricsText}>
                        Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusant doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis.
                        Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusant doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis.
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#2f2538",
        flex: 1,
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
    },
});