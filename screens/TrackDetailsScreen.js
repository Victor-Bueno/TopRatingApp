import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';


export default class SearchResultScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.container}>ThirdScreen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#2f2538",
        flex: 1,
    },
});