import { StyleSheet } from "react-native";
exports.colors = {
  primary: "#bc6c25",
  secondary: "#dda15e",
  tertiary: "#fefae0",
  extra1: "#283618",
  extra2: "#606c38",
};
export default StyleSheet.create({
  mainBackground: {
    backgroundColor: '#fefae0'
  },
  innerApp:{
    flex: 1, 
    backgroundColor: '#fefae0',     
    justifyContent:'flex-start',
  },
  container: { 
    flex: 1, 
    backgroundColor: '#fefae0', 
    justifyContent:'center',
  },
  loginContainer: {
    width: "100%",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#fefae0",
    borderRadius: 20,
  },
  loginInput: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#bc6c25",
    borderRadius: 50,
    marginBottom: 10,
    marginTop: 10,
    padding: 8,
    color: '#283618'
  },
  headingText: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
    color: '#bc6c25'
  },
  buttonWrap: {
    overflow: "hidden",
    borderRadius: 50,
  },
  globalText: {
    color: "#283618",
  },
});
