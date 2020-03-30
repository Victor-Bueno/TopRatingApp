import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Alert,
} from 'react-native';
import TrackListProvider from "../provider/TrackListProvider";


export default class SearchResultScreen extends Component {
    state = {
        trackList: [],
        loading: true,
    }
    
    MusicListItemRender = ( trackName, trackID, details ) => {
        return(
            <View style={styles.itemView}>
                <TouchableOpacity style={styles.hiddenButton} onPress={() => { this.props.navigation.navigate("TrackDetails", { trackName, trackID, details }) }}>
                    <Text style={styles.itemName}> { trackName }</Text>
                </TouchableOpacity>
                <View style={styles.separator}></View>
            </View>
        );
    }

    componentDidMount() {
        let { countrySelected } = this.props.route.params;
        TrackListProvider.getTrackList(countrySelected)
            .then(trackList => this.setState({ loading: false, trackList }))
            .catch((err) => {
                console.log(err)
                Alert.alert(
                    'Error',
                    'Error trying to search for the best musics',
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
                <View style={styles.container}>
                    <Text style={styles.loading}>Loading...</Text>
                </View>
            );
        }
        else{
            return(
                <View style={styles.container}>
                    <FlatList 
                        data ={this.state.trackList}
                        keyExtractor = { music => music.id } 
                        renderItem = {({ item }) => (
                            this.MusicListItemRender(item.name, item.id, item.details)
                        )}
                    />
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#2f2538",
        flex: 1,
    },

    loading: {
        color: "#fff",
        fontSize: 24,
        textAlign: "center",
        marginTop: 100,
    },

    itemView: {
        marginLeft: 10,
        marginVertical: 12,
    },

    hiddenButton: {
        width: 250,
        height: 50,
        justifyContent: "center",
    },

    itemName: {
        color: "#fff",
        fontSize: 24,
        marginBottom: 5,
    },

    separator: {
        backgroundColor: "#3c2d49",
        height: 2,
        width: 365,
    }
});