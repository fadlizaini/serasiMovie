import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DetailContainer from './containers/DetailContainer';
import HomeContainer from './containers/HomeContainer';

const Stack = createStackNavigator();

function Navigators() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeContainer} />
        <Stack.Screen name="Detail" component={DetailContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigators;
