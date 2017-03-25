import React, {Component} from 'react';
import { Button, ScrollView, StyleSheet } from 'react-native';
import HomeButton from '../Components/HomeButton';

export default class Home extends React.Component {
    static navigationOptions = {
        title: 'Events'
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
            <ScrollView contentContainerStyle={styles.scrollView}>
                <HomeButton onPress={() => navigate('EventDays')} />
                <HomeButton onPress={() => navigate('EventDays')} />
                <HomeButton onPress={() => navigate('EventDays')} />
                <HomeButton onPress={() => navigate('EventDays')} />
                <HomeButton onPress={() => navigate('EventDays')} />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scrollView: {
        paddingVertical: 10,
        marginHorizontal: 15,
    }
});
