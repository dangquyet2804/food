import { createStackNavigator, createAppContainer } from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';
import ResultScreen from './src/screens/ResultScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Results: ResultScreen
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Seacrch'
    }
  }
);

export default createAppContainer(navigator);
