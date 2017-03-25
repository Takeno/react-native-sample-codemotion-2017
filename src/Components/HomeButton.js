import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';


export default (props) => (
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
        <Image style={styles.homeButton} source={require('../assets/home-button.png')} />
    </TouchableOpacity>
);


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 15,
    },
    homeButton: {
        flex: 1,
        height: 200,
    }
});
