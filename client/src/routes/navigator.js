import  { StackNavigator, TabNavigator } from 'react-navigation';
import HomeScreen from './homeNavigator';

export default StackNavigator({
    Home: { 
        screen: HomeScreen
    }
});
