import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, Text, ActivityIndicator,TouchableOpacity } from 'react-native';
import Colors from '../../../constants/colors';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
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

      return { style, titleStyle, left };
    },
  }

    render() {
        return (
            <View>
                <Text>Create Meeups</Text>
            </View>
        );
    }
}

export default createMeetup;