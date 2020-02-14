import  React from 'react';
import { StyleSheet,
         View, 
         Text, 
         KeyboardAvoidingView, 
         Image, 
         TextInput, 
         TouchableOpacity } from 'react-native';
export default function LoginScreen() {
  return (
   <KeyboardAvoidingView style={styles.background}>
       <View style={styles.containerLogo}>
           <Image source={require('./../assets/logo.png')}/>
       </View>
       <View style={styles.container}>
            <TextInput placeholder = "Correo"
                      autoCorrect ={false}
                      onChangeText={()=>{}}/>
            <TextInput placeholder = "Contraseña"
                      autoCorrect ={false}
                      onChangeText={()=>{}}/>
            <TouchableOpacity>
                 <Text>Holssdfs</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                 <Text>Holssdfs</Text>
            </TouchableOpacity>
       </View>
   </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
    background:{
        flex:1,
        backgroundColor:'#191919',
        alignItems: "center",
        justifyContent: "center",
    },
    containerLogo:{
        flex:1,
        justifyContent: "center",
        backgroundColor:'red' 
    },
    container:{
        flex:1,
        backgroundColor: 'blue'
    }
});
