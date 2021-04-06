import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function TicketsScreen(props) {
  return (
    <View style={styles.container}>
      <Text>TicketsScreen</Text>
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
