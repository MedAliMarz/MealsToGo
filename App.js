import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
} from "react-native";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Text>search</Text>
        </View>
        <View style={styles.list}>
          <Text>list</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  search: {
    flexGrow: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    flexGrow: 10,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
