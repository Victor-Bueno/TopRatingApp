import 'react-native-gesture-handler';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SelectCountryScreen from "./screens/SelectCountryScreen"
import SearchResultScreen from "./screens/SearchResultScreen"

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={SelectCountryScreen} 
          options={{
            headerStyle: {
              backgroundColor: "#8D1541",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen 
          name="Showing the top musics:" 
          component={SearchResultScreen} 
          options={{
            headerStyle: {
              backgroundColor: "#8D1541",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
            headerRight: () => (
              <TouchableOpacity
                onPress={() => alert(/*TODO Implemet navigation*/'This is a button!')}
              >
                <Text style={{color:"#fff"}}>Back</Text>
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;