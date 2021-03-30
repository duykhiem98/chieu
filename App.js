
import React, { useState } from "react";
import { Text, View, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import mainscreen from './src/screen/mainscreen';
import {House, IC_HOUSE,IC_user} from './src/image'

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}


const Tab = createBottomTabNavigator();

export default function App() {
  const [isShowInfo, setIsShowInfo] = useState(false);
   const onPress = () => {
      setIsShowInfo(isShowInfo ? false : true)
   }
  return (
    <NavigationContainer>
      <Tab.Navigator  screenOptions={{
        headerShown: false
      }}>
        <Tab.Screen 
          name="Mainscreen" 
          options={{
            tabBarLabel: 'Mainscreen',
            tabBarIcon: ({ color, size }) => (
              <Image style={{width: 25, height: 25,}} source={IC_user}  />
            ),
          }}
          component={mainscreen} />
        <Tab.Screen 
          name="HomeScreen" 
          component={HomeScreen} 
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Image style={{width: 24, height: 24,tintColor:'red' }} source={IC_HOUSE}/>
            )
          }}
        />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}
