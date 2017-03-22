import React, {Component} from 'react';
import {AppRegistry, Button, FlatList} from 'react-native';
import { StackNavigator, } from 'react-navigation';

class MainScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome'
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
            <Button
                title="Go to Jane's profile"
                onPress={() => navigate('Profile', {name: 'Jane'})}/>
        );
    }
}

class ProfileScreen extends React.Component {
    static navigationOptions = {
        title: ({ state }) => `${state.params.name}'s profile`,
        header: {
           right: <Button title="Info" />,
        },
    };

    render() {
        const {goBack} = this.props.navigation;
        return (
            <Button
                title="Back to main"
                onPress={() => goBack()}/>
        );
    }
}

const App = StackNavigator({
    Main: {screen: MainScreen},
    Profile: {screen: ProfileScreen},
});

AppRegistry.registerComponent('SampleApp', () => App);
