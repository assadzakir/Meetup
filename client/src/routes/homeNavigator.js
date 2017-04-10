import  { TabNavigator } from 'react-navigation';
import { HomeScreen } from '../containers';
import { NotificationScreen } from '../containers';
import { ProfileScreen } from '../containers';

export default TabNavigator({
    Home: { screen: HomeScreen},
    Notification: { screen: NotificationScreen},
    Profile: { screen: ProfileScreen}
});
