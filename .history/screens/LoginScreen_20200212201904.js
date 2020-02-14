import  React from "react";
import { StyleSheet,
         View, 
         Text, 
         KeyboardAvoidingView, 
         Image, 
         TextInput, 
         TouchableOpacity } from "react-native";
export default function LoginScreen() {
  return (
   <KeyboardAvoidingView style={styles.background}>
       <View style={styles.containerLogo}>
           <Image source={require("./../assets/logo.png")}/>
       </View>
       <View style={styles.container}>
            <TextInput style={styles.input}
                       placeholder = "Correo"
                       autoCorrect ={false}
                       onChangeText={()=>{}}/>
            <TextInput style={styles.input}
                       placeholder = "Contraseña"
                       autoCorrect ={false}
                       onChangeText={()=>{}}/>

            <TouchableOpacity style={styles.btnSubmit}>
                 <Text style={styles.submitText}>Iniciar Sesion</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnRegistre}>
                 <Text style={styles.registreText}>Registrate</Text>
            </TouchableOpacity>
       </View>
   </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
    background:{
        flex:1,
        backgroundColor:"#191919",
        alignItems: "center",
        justifyContent: "center",
    },
    containerLogo:{
        flex:1,
        justifyContent: "center",
    },
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        width:"90%",
        paddingBottom:50,
    },
    
});
