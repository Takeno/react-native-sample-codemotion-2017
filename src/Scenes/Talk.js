import React, {Component} from 'react';
import { View, Image, Text, ScrollView, StyleSheet } from 'react-native';
import HomeButton from '../Components/HomeButton';

export default class Home extends React.Component {
    static navigationOptions = {
        title: ({state}) => state.params.talk.title
    };
    render() {
        const { talk } = this.props.navigation.state.params;
        return (
            <ScrollView style={styles.container}>
                <View style={styles.infoBar}>
                    <Text style={styles.infoText}>{talk.time}</Text>
                    <Text style={styles.infoText}>Room N10</Text>
                </View>

                <View style={styles.speakerContainer}>
                    <Image
                        style={styles.pic}
                        source={{uri: `https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 40)}.jpg`}} />

                    <Text style={styles.talkTitle}>{talk.title}</Text>
                    <Text style={styles.talkSpeaker}>{talk.speaker}</Text>
                </View>

                <View style={styles.infoBar2}>
                    <Text style={styles.infoText2}>Inspirational</Text>
                    <Text style={styles.infoText2}>English</Text>
                    <Text style={styles.infoText2}>Level: Beginner</Text>
                </View>


                <View style={styles.abstractContainer}>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    infoBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 30,
        backgroundColor: '#0e1e30',
        paddingHorizontal: 10,
    },
    infoText: {
        color: 'white',
        fontSize: 10,
    },
    speakerContainer: {
        alignItems: 'center',
        padding: 20,
    },
    pic: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    talkTitle: {
        fontSize: 20,
    },
    talkSpeaker: {
        fontSize: 16,
    },
    infoBar2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 30,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ff5c00',
    },
    infoText2: {
        fontSize: 10,
    },
    abstractContainer: {
        padding: 20,
    }
});
