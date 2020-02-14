import  * as React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

import { Asset } from 'expo-asset';
import { AppLoading } from 'expo';

function cacheImages(images) {
    return images.map(image => {
      if (typeof image === 'string') {
        return Image.prefetch(image);
      } else {
        return Asset.fromModule(image).downloadAsync();
      }
    });
}
async function _loadAssetsAsync() {
    const imageAssets = cacheImages([require('./../assets/bg.jpg')]);
    await Promise.all([...imageAssets]);
}

function MusicApp (){
    const { width, height } = Dimensions.get('window');
    return (
        <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          justifyContent: 'flex-end'
        }}
      >
        <View style={{ ...StyleSheet.absoluteFill }}>
          <Image
            source={require('../assets/bg.jpg')}
            style={{ flex: 1, height: null, width: null }}
          />
        </View>
        <View style={{ height: height / 3, justifyContent: 'center' }}>
          <View style={styles.button}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>SIGN IN</Text>
          </View>
          <View style={{ ...styles.button, backgroundColor: '#2E71DC' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
              SIGN IN WITH FACEBOOK
            </Text>
          </View>
        </View>
      </View>
    );
}


export default function LoginScreen() {
    const [isReady, setReady] = React.useState(false);
 if(!isReady){
    return (
        <AppLoading
                        startAsync={this._loadAssetsAsync}
                        onFinish={() => setReady(true)}
                        onError={console.warn}
                    />
      );
 }
 return <MusicApp />;

  
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems: "center",
        justifyContent: "center",
    },
});
