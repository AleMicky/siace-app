import  React from 'react';
import { StyleSheet,View, Text, KeyboardAvoidingView, Image } from 'react-native';



export default function LoginScreen() {
  return (
   <KeyboardAvoidingView>
       <View>
           <Image source={require('./../assets/logo.png')}/>
       </View>
   </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems: "center",
        justifyContent: "center",
    },
});
