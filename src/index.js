import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
} from 'react-native';

class SampleApp extends Component {
    render() {
        return (
            <Text style={{margin: 40}}>
                Hello, Codemotion!
            </Text>
        );
    }
}

AppRegistry.registerComponent('SampleApp', () => SampleApp);
