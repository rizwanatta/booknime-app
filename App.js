import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,FlatList} from 'react-native';
import {useEffect, useState} from 'react';
import axios from 'axios';


export default function App() {

  const [incomingBooks, setIncomingBooks] = useState([]);

  useEffect(()=>{

    axios.get('http://192.168.1.102:3000/books').then(response=>{

      console.log(response.data);
      if (response.status === 200){
        setIncomingBooks(response.data)
      }

    }).catch(error=>{
        Alert.alert('SOMETHING WENT WRONG', error.message);
    })

  },[])


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
       data = {incomingBooks}
        style={{width:300,height:3000, backgroundColor:'yellow'}}
        renderItem={({item})=>(
          <View>
              <Text>{item.name}</Text>
            </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'violet',
  },
});
