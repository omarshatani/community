import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "../Home";
import CommunityScreen from "../Community";
import TicketsScreen from "../Tickets";
import SocialServicesScreen from "../SocialServices";
import { Dimensions, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import Header from "../../components/Header";
import { SafeAreaView } from "react-native-safe-area-context";

const Tab = createMaterialTopTabNavigator();
const { width } = Dimensions.get("window");

export default function MainScreen(props) {
  const {
    colors: {
      primary,
      common: { white, grey },
    },
  } = useTheme();
  return (
    <>
      {/* <Header /> */}
      <Tab.Navigator
        tabBarOptions={{
          scrollEnabled: true,
          bounces: false,
          allowFontScaling: true,
          activeTintColor: white,
          inactiveTintColor: grey,
          labelStyle: {
            textTransform: "capitalize",
          },
          tabStyle: {
            width: "auto",
          },
          style: {
            elevation: 0,
            shadowOpacity: 0,
            display: "flex",
            marginHorizontal: 10,
          },
          indicatorStyle: {
            height: "100%",
            backgroundColor: primary,
            borderRadius: 15,
            alignSelf: "auto",
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Principale" }}
        />
        <Tab.Screen
          name="Community"
          component={CommunityScreen}
          options={{ title: "Comunità Energetica" }}
        />
        <Tab.Screen
          name="Tickets"
          component={TicketsScreen}
          options={{ title: "Segnalazioni" }}
        />
        <Tab.Screen
          name="SocialServices"
          component={SocialServicesScreen}
          options={{ title: "Partenariato Sociale" }}
        />
      </Tab.Navigator>
    </>
  );
}
