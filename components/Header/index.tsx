import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { scale } from "react-native-size-matters";
import { ExtendedThemeProps, useTheme } from "@react-navigation/native";

export default function Header({ theme }: ExtendedThemeProps) {
  const {
    colors: { text, common },
    fonts,
  } = theme;
  console.log(fonts);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title__container}>
        <Text
          style={[styles.title, { color: text, fontFamily: fonts?.regular }]}
        >
          Bentornato,{" "}
        </Text>
        <Text style={[styles.title, { color: text, fontFamily: fonts?.bold }]}>
          Omar
        </Text>
      </View>
      <Image
        source={require("../../theme/img/pofesr.png")}
        style={{
          height: 70,
          width: 70,
        }}
        resizeMode="contain"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: scale(10),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  title__container: {
    display: "flex",
    flexDirection: "row",
  },
  title: {
    fontSize: scale(20),
  },
});
