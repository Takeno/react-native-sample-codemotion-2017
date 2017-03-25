import React from 'react';
import { AppRegistry, StatusBar } from 'react-native';
import { StackNavigator, } from 'react-navigation';
import HomeScene from './Scenes/Home';
import EventDaysScene from './Scenes/EventDays';
import TalkScene from './Scenes/Talk';

const App = StackNavigator({
    Home: {screen: HomeScene},
    EventDays: {screen: EventDaysScene},
    Talk: {screen: TalkScene},
}, {
    navigationOptions: {
        header: {
            style: {
                backgroundColor: '#ff5c00',
            },
            tintColor: 'white'
        }
    }
});

StatusBar.setBarStyle('light-content');

AppRegistry.registerComponent('SampleApp', () => App);
