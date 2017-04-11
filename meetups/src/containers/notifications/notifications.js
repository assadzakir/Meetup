import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../../../constants/colors';

class Notification extends Component {
    static navigationOptions = {
    header: {
      style: { backgroundColor: Colors.redColor },
    },
    tabBar: {
      icon: ({ tintColor }) => (
        <MaterialIcons
          name="notifications"
          size={25}
          color={tintColor}
        />
      ),
    },
  }

    render() {
        return (
            <View style={{flex:1}}>
                <Text>
                    Notification
                </Text>
            </View>
        );
    }
}

export default Notification;