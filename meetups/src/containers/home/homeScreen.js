import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, Text, ActivityIndicator } from 'react-native';
import loadingScreen from '../../shared';
import MeetupList from '../../components/meetupList/meetupList';
import Colors from '../../../constants/colors';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import styles from './style';

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

    componentDidMount() {
        this.props.fetchGroupMeetups()
    }

    render() {
        const {
            meetups: {
                isFetched,
            data,
            error
            }
        } = this.props;
        if (!isFetched) {
            return (
                <View style={styles.root}>
                    <ActivityIndicator
                        size="large"
                    />
                </View>
            )
        } else if (error.on) {
            return (
                <View>
                    <Text>{error.message}</Text>
                </View>
            );
        }
        return (
            <View style={styles.root}>
                <View style={styles.topContainer}>
                    <Text>homeScreen</Text>
                </View>
                <View style={styles.bottomContainer}>
                    <MeetupList meetups={data} />
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return { meetups: state.meetupReducer.myMeetups };
};

const mapDispatchToProps = (d) => {
    return {
        fetchGroupMeetups: () => d({
            type: "FETCH_MY_MEETUPS"
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(homeScreen);