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


// class ProfileScreen extends React.Component {
//     static navigationOptions = {
//         title: ({ state }) => `${state.params.name}'s profile`,
//         header: {
//            right: <Button title="Info" />,
//         },
//     };
//
//     render() {
//         const {goBack} = this.props.navigation;
//         return (
//             <Button
//                 title="Back to main"
//                 onPress={() => goBack()}/>
//         );
//     }
// }
