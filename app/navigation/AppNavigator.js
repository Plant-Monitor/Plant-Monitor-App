import React, { useEffect, useRef } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import * as Notifications from 'expo-notifications';
import HomeScreen from '../screens/HomeScreen';
import WelcomePage from '../screens/WelcomePage';
import MonitoringPage from '../screens/MonitoringPage';
import PlantInfoScreen from '../screens/PlantInfoScreen';
import expoPushTokensApi from '../api/expoPushTokens';

const Tab = createBottomTabNavigator();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true
  }),
});

const AppNavigator = () => {

  const responseListener = useRef();

  useEffect(() => {
      // Get a token
      registerForPushNotificationsAsync()
          //.then(token => expoPushTokensApi.register(token));

      // This listener is fired whenever a notification is received while the app is foregrounded
      

      // This listener is fired whenever a user taps on or interacts with a notification
      // (works when app is foregrounded, backgrounded, or killed)
      responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
          console.log('--- notification tapped ---');
          console.log(response);
          console.log('------');
      });

      // Unsubscribe from events
      return () => {
          //Notifications.removeNotificationSubscription(notificationListener.current);
          Notifications.removeNotificationSubscription(responseListener.current);
      };
  }, []);

    async function registerForPushNotificationsAsync() {
        let token;

        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;

        if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }
        if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
        }
        token = (await Notifications.getExpoPushTokenAsync()).data;
        console.log(token);

        return token;
    }
    return (
        <Tab.Navigator>
          <Tab.Screen 
            name="Welcome" 
            component={WelcomePage}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="human-greeting-variant" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen 
            name="Information" 
            component={PlantInfoScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="information-circle-outline" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen 
            name="Home" 
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen 
            name="Monitoring" 
            component={MonitoringPage}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Entypo name="line-graph" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
    );
};

export default AppNavigator