import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SelectCountryScreen from "./screens/SelectCountryScreen"
import SearchResultScreen from "./screens/SearchResultScreen"
import TrackDetailsScreen from "./screens/TrackDetailsScreen"

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerStyle: {
            backgroundColor: "#8D1541",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={SelectCountryScreen} 
        />
        <Stack.Screen 
          name="SearchResult" 
          component={SearchResultScreen} 
          options={{
            title: "Showing the top musics:",
          }}
        />
        <Stack.Screen 
          name="TrackDetails" 
          component={TrackDetailsScreen} 
          options={{
            title: "Showing the track details:",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;