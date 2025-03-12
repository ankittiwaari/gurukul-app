import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E3F2FD',
      alignItems: 'center',
      justifyContent: 'center',
    },
    loginContainer:{
      width:'100%',
      justifyContent:'space-between',
      padding:10,
      backgroundColor:'#fff'    
    },
    loginInput:{
      width:'100%',
      borderWidth:1,
      borderColor:'#000000',
      borderRadius:50,
      marginBottom:10,
      marginTop:10,
      padding:8
    },
    headingText:{
      fontSize:30,
      fontWeight:"bold",
      marginBottom:30
    },
    buttonWrap:{
      overflow:'hidden',
      borderRadius:50
    }
  });