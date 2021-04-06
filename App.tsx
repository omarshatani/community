import "react-native-gesture-handler";
import React from "react";
import {
  ExtendedTheme,
  NavigationContainer,
  useTheme,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { theme } from "./theme";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  TitilliumWeb_200ExtraLight,
  TitilliumWeb_300Light,
  TitilliumWeb_400Regular,
  TitilliumWeb_600SemiBold,
  TitilliumWeb_700Bold,
  TitilliumWeb_900Black,
} from "@expo-google-fonts/titillium-web";
import { useFonts } from "expo-font";
import { scale, verticalScale } from "react-native-size-matters";
import AppLoading from "expo-app-loading";
import HomeIcon from "./theme/svg/it-pa.svg";
import ProfileIcon from "./theme/svg/it-user.svg";
import NewsIcon from "./theme/svg/it-bookmark.svg";
import Header from "./components/Header";
import MainScreen from "./screens/Main";
import ProfileScreen from "./screens/Profile";
import NewsScreen from "./screens/News";

const BottomTab = createBottomTabNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    TitilliumWeb_200ExtraLight,
    TitilliumWeb_300Light,
    TitilliumWeb_400Regular,
    TitilliumWeb_600SemiBold,
    TitilliumWeb_700Bold,
    TitilliumWeb_900Black,
  });

  const extendedTheme: ExtendedTheme = {
    ...theme,
    fonts: {
      regular: "TitilliumWeb_400Regular",
      bold: "TitilliumWeb_700Bold",
      semibold: "TitilliumWeb_600SemiBold",
      black: "TitilliumWeb_900Black",
      light: "TitilliumWeb_300Light",
    },
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaProvider>
      <Header theme={extendedTheme} />
      <NavigationContainer theme={extendedTheme}>
        <BottomTab.Navigator
          tabBarOptions={{
            activeTintColor: extendedTheme.colors.primary,
            inactiveTintColor: extendedTheme.colors.common.grey,
            style: {
              elevation: 0,
              shadowOpacity: 0,
              borderTopWidth: 0,
            },
            allowFontScaling: true,
            adaptive: true,
            labelStyle: {
              marginVertical: verticalScale(7),
              fontFamily: "TitilliumWeb_600SemiBold",
              fontSize: scale(12),
            },
          }}
          lazy
        >
          <BottomTab.Screen
            name="Main"
            component={MainScreen}
            options={{
              title: "Home",
              tabBarIcon: ({ focused, ...props }) => (
                <HomeIcon
                  fill={
                    focused ? theme.colors.primary : theme.colors.common.grey
                  }
                  {...props}
                />
              ),
            }}
          />
          <BottomTab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              title: "Profilo",
              tabBarIcon: ({ focused, ...props }) => (
                <ProfileIcon
                  fill={
                    focused ? theme.colors.primary : theme.colors.common.grey
                  }
                  {...props}
                />
              ),
            }}
          />
          <BottomTab.Screen
            name="News"
            component={NewsScreen}
            options={{
              tabBarIcon: ({ focused, ...props }) => (
                <NewsIcon
                  fill={
                    focused ? theme.colors.primary : theme.colors.common.grey
                  }
                  {...props}
                />
              ),
            }}
          />
        </BottomTab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
