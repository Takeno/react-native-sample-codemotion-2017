import React, {Component} from 'react';
import {View, Text, Image, ListView, StyleSheet} from 'react-native';
import HomeButton from '../Components/HomeButton';
import TalkRow from '../Components/TalkRow';


export function makeEventScene(title, label, icon) {
    class Event extends React.Component {
        static navigationOptions = {
            title: title,
            tabBar: {
                label: label,
                icon: ({ tintColor }) => (
                    <Image source={icon} style={[styles.tabIcon, {tintColor}]} />
                ),
            },
        };

         constructor() {
            super();
            const ds = new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            });

            this.state = {
                dataSource: ds.cloneWithRows([{
                    time: '9:40 / 10:00',
                    title: 'Title one',
                    speaker: 'Speaker One'
                }, {
                    time: '10:00 / 10:40',
                    title: 'Title two',
                    speaker: 'Speaker Two'
                }, {
                    time: '10:50 / 12:30',
                    title: 'Title three',
                    speaker: 'Speaker Three'
                }, {
                    time: '10:50 / 12:30',
                    title: 'Another talk',
                    speaker: 'Another Speaker'
                }, {
                    time: '10:50 / 12:30',
                    title: 'Another talk',
                    speaker: 'Another Speaker'
                }, {
                    time: '10:50 / 12:30',
                    title: 'Another talk',
                    speaker: 'Another Speaker'
                }, {
                    time: '10:50 / 12:30',
                    title: 'Another talk',
                    speaker: 'Another Speaker'
                }]),
            };
        }

        render() {
            const {navigate} = this.props.navigation;
            return (
                <ListView
                    dataSource={this.state.dataSource}
                    renderHeader={() =>
                        <View style={styles.headerContainer}>
                            <Text style={styles.headerTitle}>Room N10</Text>
                        </View>
                    }
                    renderRow={talk =>
                        <TalkRow talk={talk} onPress={() => navigate('Talk', {talk})} />}
                    />
            );
        }
    }

    return Event;
}

const styles = StyleSheet.create({
    tabIcon: {
        width: 20,
        height: 20,
    },
    headerContainer: {
        height: 150,
        backgroundColor: '#eeeeee',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 28,
        color: '#ff5c00'
    }
});
