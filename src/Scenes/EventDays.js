import React from 'react';
import {Platform} from 'react-native';
import {TabNavigator} from 'react-navigation';
import {makeEventScene} from './Event';


export default TabNavigator({
  EventDayOne: { screen: makeEventScene('Agenda', 'MAR 24', require('../assets/24-icon.png')) },
  EventDayTwo: { screen: makeEventScene('Agenda', 'MAR 25', require('../assets/25-icon.png')) },
}, {
    tabBarOptions: {
        activeTintColor: Platform.select({
            ios: '#ff5c00',
            android: '#333333'
        }),
        inactiveTintColor: Platform.select({
            ios: '#666666',
            android: '#333333'
        }),
        indicatorStyle: {
            backgroundColor: '#ff5c00',
        },
        style: {
            backgroundColor: '#f8f8f8'
        }
    }
});
