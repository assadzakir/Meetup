import { TabNavigator } from 'react-navigation';
import { HomeScreen } from '../containers';
import { NotificationScreen } from '../containers';
import { ProfileScreen } from '../containers';
import Colors from '../../constants/colors';



export default TabNavigator({
    Home: { screen: HomeScreen },
    Notification: { screen: NotificationScreen },
    Profile: { screen: ProfileScreen }
}, {
        swipeEnabled: true,
        animationEnabled: true,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            showLabel: false,
            showIcon: true,
            inactiveTintColor: Colors.blackBlueColor,
            activeTintColor: Colors.redColor,
            pressColor: Colors.redColor,
            indicatorStyle: { backgroundColor: Colors.redColor },
            style: {
                backgroundColor: Colors.whiteColor,
            },
        }
    });
