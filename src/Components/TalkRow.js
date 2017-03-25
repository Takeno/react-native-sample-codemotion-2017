import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';


export default (props) => (
    <TouchableOpacity onPress={props.onPress}>
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>{props.talk.time}</Text>
            </View>

            <View style={styles.content}>
                <View style={styles.picContainer}>
                    <Image
                        style={styles.pic}
                        source={{uri: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 40)}.jpg`}} />
                </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.talkTitle}>{props.talk.title}</Text>
                    <Text style={styles.talkSpeaker}>{props.talk.speaker}</Text>
                </View>
                <View style={styles.arrowContainer}>
                    <Image source={require('../assets/arrow.png')} />
                </View>
            </View>
        </View>
    </TouchableOpacity>
);


const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
    },
    header: {
        backgroundColor: '#ff5c00',
        height: 20,
        paddingHorizontal: 10,
        paddingVertical: 1,
    },
    headerText: {
        color: 'white'
    },
    content: {
        flexDirection: 'row',
        padding: 10,
    },
    pic: {
        width: 78,
        height: 78,
        borderRadius: 39,
    },
    detailsContainer: {
        marginLeft: 20,
        flex: 1,
    },
    talkTitle: {
        fontSize: 20,
    },
    talkSpeaker: {
        fontSize: 16,
    },
    arrowContainer: {
        justifyContent: 'center',
    }
});
