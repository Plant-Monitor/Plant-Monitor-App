import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';



// We are building by using a todo list app as a template
export default function App() {
  return ( 
    <ScrollView>
    <View style={styles.container}>
    <View style={styles.tasksWrapper}>
      <Text style= {styles.sectionTitle}> Soil Monitoring Snapshot </Text>
      {/* {Today's Tasks} */}

      {/* <View styles={styles.item}></View> */}
      {/* {This is where the tasks will go} */}
    </View>
    <Task text="Water Levels" metric_2 = "70%" squarecolor ="black"></Task>
    <Task text="Moisture" metric_2 ="90%"></Task>
    <Task text="Light" metric_2="60%"></Task>
    <Task text="Temperature" metric_2="30°C"></Task>
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
    fontFamily : 'Sans-Serif',
    paddingBottom : 50,
    fontSize : 30,
    fontWeight : 'bold'
  },
  item: {},

});
