import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { MeetupApi } from '../../../constants/api';
import loadingScreen from '../../shared';
import MeetupList from '../../components/meetupList/meetupList';
import Colors from '../../../constants/colors';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import styles from './style';

const meetupApi = new MeetupApi();

class homeScreen extends Component {
    static navigationOptions = {
        header: {
            style: { backgroundColor: Colors.redColor },
        },
        tabBar: {
            icon: ({ tintColor }) => (
                <FontAwesome
                    name="home"
                    size={25}
                    color={tintColor}
                />
            ),
        },
    }


    static defaultProps = {
        meetupApi
    }

    state = {
        loading: false,
        meetups: []
    }

    async componentDidMount() {
        this.setState({ loading: true });
        const meetups = await this.props.meetupApi.fetchGroupMeetups();
        this.setState({ loading: false, meetups });
    }

    render() {
        if (this.state.loading) {
            return (
                <View style={styles.root}>
                    <ActivityIndicator
                        size="large"
                    />
                </View>
            )
        }
        return (
            <View style={styles.root}>
                <View style={styles.topContainer}>
                    <Text>homeScreen</Text>
                </View>
                <View style={styles.bottomContainer}>
                    <MeetupList meetups={this.state.meetups} />
                </View>
            </View>
        );
    }
}

export default homeScreen;