import  * as React from 'react';
import { StyleSheet,View, Text } from 'react-native';

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

export default function LoginScreen() {
    const [isReady, setReady] = React.useState(false);
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
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
