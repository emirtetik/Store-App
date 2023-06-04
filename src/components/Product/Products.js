import React from 'react'
import { View,Text,Image } from 'react-native'
import styles from "./Products.style";

 const Products = ({store}) =>{
  return (
    <View style={styles.container}>
      <View style={styles.flex_container}>
    <Image style={styles.image} source={{uri: store.imgURL}}/>
    <View style={styles.inner_container}>
    <Text style={styles.title}>{store.title}</Text>
    <Text style={styles.price}>{store.price}</Text>
    <Text style={styles.product_inStock}>{store.inStock ?  "" : "STOKTA YOK"}</Text>
    </View>
    </View>
</View>
    
  )
}

export default Products