import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, Text, ActivityIndicator,TouchableOpacity } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
import Colors from '../../../constants/colors';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

import  CreateMeetupForm  from '../../components/meetupForm/meetupForm';
import styles from './style';

class createMeetup extends Component {

    static navigationOptions = {
    title: 'Create a new Meetup',
    header: ({ goBack }) => {
      const style = { backgroundColor: Colors.redColor };

      const titleStyle = { color: Colors.whiteColor };

      const left = (
        <TouchableOpacity style={styles.iconClose} onPress={() => goBack()}>
          <MaterialIcons
            name="close"
            size={30}
            color="#fff"
          />
        </TouchableOpacity>
      );

      return { style, titleStyle };
    },
  }

    state = {
    isDateTimePickerVisible: false,
    date: moment(),
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true })

  _handleDateTimePicker = () => this.setState({ isDateTimePickerVisible: false })

  _handleDatePicked = date => {
    this.setState({ date });
    this._handleDateTimePicker();
  }

  _checkTitle() {
    const { date } = this.state;
    if (date > moment()) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a');
    }
    return 'Pick a meetup date';
  }

  _checkIfButtonSubmitDisabled() {
    const { date } = this.state;

    if (date > moment()) {
      return false;
    }
    return true;
  }

  _createMeetup = async values => {
    await this.props.createMeetup(values);
    await this.props.fetchGroupMeetups();
    // this.props.navigation.goBack();
  }

render() {
    const {
      meetup,
    } = this.props;
    if (meetup.isLoading) {
      return (
        <View style={styles.root}>
          <ActivityIndicator
                        size="large"
                    />
        </View>
      );
    } else if (meetup.error.on) {
      return (
        <View style={styles.root}>
          <Text>{meetup.error.message}</Text>
        </View>
      );
    }
    return (
      <View style={styles.root}>
        <CreateMeetupForm
          createMeetup={this._createMeetup}
          showDateTimePicker={this._showDateTimePicker}
          checkTitle={this._checkTitle()}
        />
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._handleDateTimePicker}
          mode="datetime"
        />
      </View>
    );
  }
}
const mapStateToProps = (state) => {
    return { meetup: state.createMeetupReducer };
};

const mapDispatchToProps = (d) => {
    return {
        createMeetup: (m) => d({
            type: "CREATE_MEETUP",
            payload:m
        }),
        fetchGroupMeetups: () => d({
            type: "FETCH_MY_MEETUPS"
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(createMeetup);