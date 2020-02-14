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
            <TextInput style={styles.input}
                       placeholder = 'Correo'
                       autoCorrect ={false}
                       onChangeText={()=>{}}/>
            <TextInput style={styles.input}
                       placeholder = 'Contraseña'
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerLogo:{
        flex:1,
        justifyContent: 'center',
    },
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:'90%'
    },
    input:{
        backgroundColor:'#fff',
        width:'90%',
        marginBottom:15,
        color:'#222',
        fontSize:17,
        borderRadius:7,
        padding:10,
    },
});
