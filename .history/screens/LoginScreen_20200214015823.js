import  React, {useState, useEffect} from "react";
import { StyleSheet,
         View, 
         Text, 
         KeyboardAvoidingView, 
         Image, 
         TextInput, 
         TouchableOpacity,
         Animated,
         Keyboard } from "react-native";
export default function LoginScreen() {

    const [offset] = useState(new Animated.ValueXY({x:0, y:80}));
    const [opacity]= useState(new Animated.Value(0));
    const [logo] = useState(new Animated.ValueXY({x:130, y:155}));
    useEffect(()=>{
        keyboardDidShowListener = Keyboard.addListener('keyboardDidShow'.keyboardDidShow);
        keyboardDidHideListener = Keyboard.addListener('keyboardDidHide'.keyboardDidHide);
        Animated.parallel([
            Animated.spring(offset.y,{
                toValue:0,
                speed:4,
                bounciness:30,
            }),
        Animated.timing(opacity,{
            toValue:1,
            duration:500,
        })
        ]).start();
        
    },[]);

  function keyboardDidShow(){
    Animated.parallel([
        Animated.timing(logo.x,{
            toValue:55,
            duration:100,
        }),
        Animated.timing(logo.y,{
            toValue:60,
            duration:50,
        })

    ]).start();
  }
  function keyboardDidHide (){
    Animated.parallel([
        Animated.timing(logo.x,{
            toValue:130,
            duration:100,
        }),
        Animated.timing(logo.y,{
            toValue:155,
            duration:50,
        })

    ]).start();

  }
  return (
   <KeyboardAvoidingView style={styles.background} behavior="padding" enabled>
       <View style={styles.containerLogo}>
           <Animated.Image style={{
               width:logo.x,
               height:logo.y,
           }} source={require("./../assets/logo.png")}/>
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
                       secureTextEntry={true}
                       autoCorrect ={false}
                       onChangeText={()=>{}}/>

            <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('Home')}>
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
