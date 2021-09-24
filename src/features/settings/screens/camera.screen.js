import React, { useState, useEffect, useRef, useContext } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import { SafeArea } from "../../restaurants/components/safe-area.component";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
export const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef();
  const { user } = useContext(AuthenticationContext);
  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return (
      <SafeArea>
        <Text>No access to camera</Text>
      </SafeArea>
    );
  }
  return (
    <View>
      <TouchableOpacity onPress={snap}>
        <Camera
          ref={(camera) => (cameraRef.current = camera)}
          type={Camera.Constants.Type.front}
          style={{ width: "100%", height: "100%" }}
          atio={"16:9"}
        />
      </TouchableOpacity>
    </View>
  );
};
