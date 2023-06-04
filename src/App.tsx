
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput
} from 'react-native';
import product_data from './product_data.json';
import Products from "./components/Product/Products";



function App() {
    const product_store = ({item})  => <Products store={item} />
  return (
    <View style={styles.container} >
               <Text style={styles.header}>PATIKASTORE</Text>
               <TextInput
               placeholder='Ara...'
        style={styles.input}
      />
      <View style={styles.flastlist}>
       <FlatList  
        keyExtractor={(item) => item.id.toString()}
       data={product_data}
       renderItem={ product_store}
       numColumns={2}
       />
         </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
 
    header: {
      fontSize: 35,
      margin: 10,
      fontWeight: 'bold',
      color:"purple",
    },
    input: {
      backgroundColor: "#eceff1",
    borderRadius: 10,
    padding: 10,
    fontSize: 18,
    margin:10,
    },
    flastlist:{
      backgroundColor:"white",
    }
});

export default App;
