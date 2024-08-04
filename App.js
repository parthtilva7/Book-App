import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import store from './redux/store';
import BooksList from './Screens/BooksList';
import BookDetail from './Screens/BookDetail';
import BorrowedBooks from './Screens/BorrowedBook';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="BooksList" component={BooksList} />
    <Stack.Screen name="BookDetail" component={BookDetail} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen name="Borrowed" component={BorrowedBooks} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
