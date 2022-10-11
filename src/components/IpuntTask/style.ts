import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  container: {

  },

  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 142

  },

  input: {
    flex:1,
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    gap: 8,
    backgroundColor: "#262626",
    border: '1 solid #0D0D0D',
    borderRadius: 6,
    width: 271,
    height: 54,
  }, 

  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center',
    width: 52,
    height: 52,
    backgroundColor: "#1E6F9F",
    borderRadius: 6,
    padding: 18,
    gap: 8
    
  }
})