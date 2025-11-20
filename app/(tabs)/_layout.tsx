import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RemixIcon from "react-native-remix-icon";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.navItemActive : styles.navItem}>
              {focused ? (
                <View style={styles.navButtonActive}>
                  <RemixIcon name="home-5-fill" size={20} color="#FFF" />
                  <Text style={styles.navLabelActive}>Home</Text>
                </View>
              ) : (
                <RemixIcon name="home-line" size={20} color="#9E9E9E" />
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.navItemActive : styles.navItem}>
              {focused ? (
                <View style={styles.navButtonActive}>
                  <RemixIcon name="search-eye-fill" size={20} color="#FFF" />
                  <Text style={styles.navLabelActive}>Explore</Text>
                </View>
              ) : (
                <RemixIcon name="search-line" size={20} color="#9E9E9E" />
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.navItemActive : styles.navItem}>
              {focused ? (
                <View style={styles.navButtonActive}>
                  <RemixIcon name="mail-fill" size={20} color="#FFF" />
                  <Text style={styles.navLabelActive}>Messages</Text>
                </View>
              ) : (
                <RemixIcon name="mail-line" size={20} color="#9E9E9E" />
              )}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.navItemActive : styles.navItem}>
              {focused ? (
                <View style={styles.navButtonActive}>
                  <RemixIcon name="settings-3-fill" size={20} color="#FFF" />
                  <Text style={styles.navLabelActive}>Settings</Text>
                </View>
              ) : (
                <RemixIcon name="settings-3-line" size={20} color="#9E9E9E" />
              )}
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#FFF",
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.01,
    shadowRadius: 3,
    height: 80,
    paddingBottom: 15,
    paddingTop: 15,
    paddingHorizontal: 30,
  },
  navItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  navItemActive: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 100,
  },
  navButtonActive: {
    flexDirection: "row",
    backgroundColor: "#5B4AE8",
    paddingVertical: 8,
    paddingHorizontal: 0,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    minWidth: 100,
  },
  navLabelActive: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "600",
  },
});
