
import React, { useEffect, useState, useRef } from 'react';
import { ScrollView, StyleSheet, Text, View} from 'react-native';
import Task from "../components/Task";
import * as Notifications from 'expo-notifications';
import apiClient from '../api/client';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true
    }),
  });


// We are building by using a todo list app as a template
export default function MonitoringPage() {
  const [data, setData] = useState({timestamp: new Date()})
  //state for keepin track of when the data is set
  const [loading, setLoading] = useState(true)
  //Url to get data from
  
  const user_id = "68a07386-d07c-49b7-ae18-a15b4c8c21fb"
  const url = `https://64ec-130-113-109-162.ngrok.io/snapshots?id=${user_id}`;
  const notificationListener = useRef();
  
  //used to render side effects in react native 
  useEffect(()=> {
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
        console.log('--- notification received ---');
        console.log(notification.request.content.data);
        console.log('------');
        if(notification.request.content.data.current_snapshot?.timestamp) {
            notification.request.content.data.current_snapshot.timestamp = new Date(notification.request.content.data.current_snapshot.timestamp)
          }
          setData(notification.request.content.data.current_snapshot);
        });
        return () => {
          if (notificationListener.current) {
            Notifications.removeNotificationSubscription(notificationListener.current);
          }
        };
      }, []);
  useEffect(() =>{
    const refreshTime = setInterval(() => {
        fetch(url)
        .then((response)=> response.json())
        .then((json)=>{
            if(json?.timestamp){
            json.timestamp = new Date(json.timestamp)
            }
            setData(json)
        })
        .catch((error)=>console.error(error))
        .finally(()=> setLoading(false));
    }, 10000)
    return () => clearInterval(refreshTime);
  },  []);
  


  // > Fetch the url with the fetch method
  // > Get the response and transform the response to a json format
  // > We now take that json formated file and set the data to the  in the Json file
  // > Catch any errorr and display an error message
  // > Finally if the data is fetched 

  

  return ( 
    
    <ScrollView>
      
      <View style={styles.container}>  
        <View style={styles.tasksWrapper}>
          <Text style= {styles.sectionTitle}> Soil Monitoring </Text>
        </View>
    

        {/* Time Stamp */}
        <View>
          <Text style={styles.timeHeader}> Time Taken </Text>
          <Text style={styles.time}> {data?.timestamp.toLocaleDateString()} </Text>
          <Text style={styles.time}> {data?.timestamp.toLocaleTimeString()} </Text>
          {/* <Text style={styles.time}> {data.timestamp} </Text> */}
          {/* todo: Put here*/}
        </View>

        <View>
          {
            data?.health_properties && Object.keys(data?.health_properties).map((property) => {
              return (<Task 
                key={property}
                metric={property}
                interpretation={data?.health_properties[property]?.interpretation}
                level={data?.health_properties[property]?.level}
                unit={data?.health_properties[property]?.unit}
              />)
            })
          }
        </View>


      
      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  tasksWrapper: {
    backgroundColor: '#7bae37',
    paddingTop : 100,
    paddingHorizontal: 10
    
  },
  sectionTitle: {
    
    textAlign : ('center', 'justify'),
    textAlign : 'center',
    // margin : 10,
    //fontFamily : 'Sans-Serif',
    paddingBottom : 50,
    fontSize : 45,
    fontWeight : 'bold',
    color: '#FFE4C4'
  },


  timeHeader: {
    
    textAlign : ('center', 'justify'),
    textAlign : 'center',
    // margin : 10,
    //fontFamily : 'Sans-Serif',
    paddingTop : 20,
    paddingBottom : 20,
    fontSize : 25,
    fontWeight : 'bold',
    color: 'black'
  },
  time: {
    
    textAlign : ('center', 'justify'),
    textAlign : 'center',
    // margin : 10,
    //fontFamily : 'Sans-Serif',
    paddingTop : 10,
    paddingBottom : 10,
    fontSize : 15,
    fontWeight : 'bold',
    color: 'black'
  },
  
  item: {},

  image:{
    flex: 1,
    justifyContent: 'center',
  }

});
