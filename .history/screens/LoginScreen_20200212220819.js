import  React, {useState, useEffect} from "react";
import { StyleSheet,
         View, 
         Text, 
         KeyboardAvoidingView, 
         Image, 
         TextInput, 
         TouchableOpacity,
         Animated } from "react-native";
export default function LoginScreen() {

    const [offset] = useState(new Animated.ValueXY({x:0, y:80}));
    const [opacity]= useState(new Animated.Value(0));
    useEffect(()=>{
        Animated.spring(offset.y,{
            toValue:0,
            speed:4,
            bounciness:30,
        }).start();
    },[]);
  return (
   <KeyboardAvoidingView style={styles.background}>
       <View style={styles.containerLogo}>
           <Image source={require("./../assets/logo.png")}/>
       </View>
       <Animated.View style={[
                                styles.container,
                                {
                                    opacity: opacity,
                                    transform:[
                                        {translateY: offset.y}
                                    ]
                                }
                            ]}>
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
       </Animated.View>
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
    input:{
        backgroundColor:"#FFF",
        width:"90%",
        marginBottom:15,
        color:"#222",
        fontSize:17,
        borderRadius:7,
        padding:10,
    },
    btnSubmit:{
        backgroundColor:"#35AAFF",
        width:"90%",
        height:45,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 7,
    },
    submitText:{
        fontSize:18,
        color:"#FFF",
    },
    btnRegistre:{
        marginTop:10,
    },
    registreText:{
        color:"#FFF",
    },
});
