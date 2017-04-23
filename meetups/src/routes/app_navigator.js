import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import {connect} from 'react-redux';

import  { LoginScreen }  from '../containers';
import navigator from './navigator';

class appNavigator extends Component {
    render() {
        return <LoginScreen />
    }
}

export default appNavigator;