import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from 'react-native';

const testMusicData = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      name: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      name: 'Third Item',
    },
];

function MusicListItem({ name }) {
    return(
        <View style={styles.itemView}>
            <TouchableOpacity style={styles.hiddenButton} onPress={() => { /* TODO Button implementation */ }}>
                <Text style={styles.itemName}>{ name }</Text>
            </TouchableOpacity>
            <View style={styles.separator}></View>
        </View>
    );
}

export default class SearchResultScreen extends Component {
    componentDidMount() {
        this.loadMusics();
    }

    loadMusics = async () => {
        const response = await api.get("chart.tracks.get?chart_name=top&page=1&page_size=10&country=br&f_has_lyrics=1&apikey=df305db8d07b8dfe85a2419fda233462");

        const { docs } = response.data;

        console.log(docs);
    }

    render() {
        return(
            <View style={styles.container}>
                <FlatList 
                    data ={testMusicData /* TODO Data implemetation */}
                    keyExtractor = { music => music.id } 
                    renderItem = {({ music }) => (
                        <MusicListItem 
                            name={music.name}
                        />
                    )}
                />
            </View>
        );
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