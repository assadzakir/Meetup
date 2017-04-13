import { StackNavigator, TabNavigator } from 'react-navigation';
import HomeScreen from './homeNavigator';
import { createMeetupScreen } from '../containers'

export default StackNavigator({
    Home: {
        screen: HomeScreen
    },
    createMeetup: {
        screen: createMeetupScreen
    }

}, {
        mode: 'modal',
    });
