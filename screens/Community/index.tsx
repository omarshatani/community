import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function CommunityScreen(props) {
  return (
    <View style={styles.container}>
      <Text>CommunityScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
