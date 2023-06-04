import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        margin:10,
        borderRadius:10,
         },
         flex_container:{
          backgroundColor:"#D8D8D8",
        borderRadius:10,
             padding:3,
         },

         image: {
            width: 160,
            height: 180,
            margin:5,
            borderRadius:10,
         },
         inner_container:{
          padding: 5,
          
         },
         title: {   
                     fontSize: 15,
                     fontWeight: "bold",
                     color: "#000000",
                     width: 120,   
         },
         price: {
              marginTop:3,
              marginBottom:3,
              color:"#000000",
         },
         product_inStock:{
            fontSize:18,
            fontWeight:"bold",
            color:"red",
            paddingLeft:7,
            paddingRight:7,
        },
});