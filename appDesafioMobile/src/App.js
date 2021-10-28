import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Pages/Login';
import Todo from './Pages/Todo';
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false, }} />
        <Stack.Screen name="Todo" component={Todo} options={{ headerShown: false, }} />
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default App;
