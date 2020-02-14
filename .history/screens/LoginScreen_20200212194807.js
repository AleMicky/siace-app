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
   <KeyboardAvoidingView>
       <View>
           <Image source={require('./../assets/logo.png')}/>
       </View>
       <View>
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
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems: "center",
        justifyContent: "center",
    },
});
