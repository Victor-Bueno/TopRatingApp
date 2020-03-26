import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import TrackListProvider from "../provider/TrackListProvider";


const MusicListItemRender = ( track ) => {
    return(
        <View style={styles.itemView}>
            <TouchableOpacity style={styles.hiddenButton} onPress={() => { /* TODO Button implementation */ }}>
                <Text style={styles.itemName}> { track }</Text>
            </TouchableOpacity>
            <View style={styles.separator}></View>
        </View>
    );
}

export default class SearchResultScreen extends Component {
    state = {
        trackList: [],
        loading: true,
    }

    componentDidMount() {
        let { countrySelected } = this.props.route.params;
        TrackListProvider.getTrackList(countrySelected)
            .then(trackList => this.setState({loading: false, trackList }))
            .catch((err) => console.log(err));
    }

    render() {
        if(this.state.loading) {
            return (
                <View style={styles.container}></View>
              );
            }
            else{
            return(
                <View style={styles.container}>
                    <FlatList 
                        data ={this.state.trackList}
                        keyExtractor = { music => music.track.track_id.toString() } 
                        renderItem = {({ item }) => (
                            MusicListItemRender(item.track.track_name)
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