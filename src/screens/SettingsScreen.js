import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
  SafeAreaView,
} from "react-native";
import React from "react";
import {
  Ionicons,
  MaterialIcons,
  FontAwesome5,
  Feather,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function SettingsScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ backgroundColor: "white", padding: 15 }}>
          <Pressable
            onPress={() => {
              navigation.navigate("Number");
            }}
            style={styles.account}
          >
            <Text style={{ color: "#229ED9", paddingBottom: 10 }}>Account</Text>
            <Text style={{ fontSize: 17 }}>+233 594065031</Text>
            <Text style={{ color: "gray" }}>Tap to change phone number</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate("Username");
            }}
            style={styles.username}
          >
            <Text style={{ fontSize: 17 }}>@nania_bizness</Text>
            <Text style={{ color: "gray" }}>Username</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate("bio");
            }}
            style={styles.Bio}
          >
            <Text style={{ fontSize: 17 }}>...</Text>
            <Text style={{ color: "gray" }}>Bio</Text>
          </Pressable>
        </View>
        <View
          style={{
            backgroundColor: "white",
            padding: 15,
            marginTop: 10,
          }}
        >
          <View style={styles.chat}>
            <Ionicons
              name="chatbubble-outline"
              size={24}
              color="gray"
              style={{ paddingRight: 20 }}
            />
            <Text style={{ fontSize: 15 }}>Chat Settings</Text>
          </View>
          <View style={styles.privacy}>
            <MaterialIcons
              name="lock-outline"
              size={24}
              color="gray"
              style={{ paddingRight: 20 }}
            />
            <Text style={{ fontSize: 15 }}>Privacy and Security</Text>
          </View>
          <View style={styles.privacy}>
            <FontAwesome5
              name="bell"
              size={24}
              color="gray"
              style={{ paddingRight: 20 }}
            />
            <Text style={{ fontSize: 15 }}>Notifications and Sounds</Text>
          </View>
          <View style={styles.privacy}>
            <Feather
              name="pie-chart"
              size={24}
              color="gray"
              style={{ paddingRight: 20 }}
            />
            <Text style={{ fontSize: 15 }}>Data and storage</Text>
          </View>
          <View style={styles.privacy}>
            <Feather
              name="battery-charging"
              size={24}
              color="gray"
              style={{ paddingRight: 20 }}
            />
            <Text style={{ fontSize: 15 }}>Power Saving</Text>
          </View>
          <View style={styles.privacy}>
            <Feather
              name="folder"
              size={24}
              color="gray"
              style={{ paddingRight: 20 }}
            />
            <Text style={{ fontSize: 15 }}>Chat Folders</Text>
          </View>
          <View style={styles.privacy}>
            <MaterialIcons
              name="devices"
              size={24}
              color="gray"
              style={{ paddingRight: 20 }}
            />
            <Text style={{ fontSize: 15 }}>Devices</Text>
          </View>
          <View style={styles.end}>
            <MaterialIcons
              name="language"
              size={24}
              color="gray"
              style={{ paddingRight: 20 }}
            />
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 15, paddingRight: 200 }}>Language</Text>
              <Text style={{ fontSize: 15, color: "#229ED9" }}>Engish</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "white",
            padding: 15,
            marginTop: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={{
              uri: "https://s3.getstickerpack.com/storage/uploads/sticker-pack/telegram-premium/tray_large.png?1b9970f7c6b9a75d8733911336ffaff1",
            }}
            style={{ height: 30, width: 30 }}
          />
          <Text style={{ paddingLeft: 15, fontSize: 15 }}>
            Telegram Premium
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "white",
            padding: 15,
            marginTop: 10,
          }}
        >
          <View style={styles.privacy}>
            <FontAwesome
              name="commenting-o"
              size={24}
              color="gray"
              style={{ paddingRight: 20 }}
            />
            <Text style={{ fontSize: 15 }}>Ask a Question</Text>
          </View>
          <View style={styles.privacy}>
            <AntDesign
              name="questioncircleo"
              size={24}
              color="gray"
              style={{ paddingRight: 20 }}
            />
            <Text style={{ fontSize: 15 }}>Telegram FAQ</Text>
          </View>
          <View style={styles.end}>
            <Ionicons
              name="ios-shield-checkmark-outline"
              size={24}
              color="gray"
              style={{ paddingRight: 20 }}
            />
            <Text style={{ fontSize: 15 }}>Privacy Policy</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: "lightgray",
    overflow: "visible",
  },
  account: {
    borderBottomColor: "gray",
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: 10,
  },
  username: {
    paddingTop: 10,
    borderBottomColor: "gray",
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: 10,
  },
  Bio: {
    paddingTop: 10,
    paddingBottom: 5,
  },
  chat: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "gray",
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: 10,
  },
  privacy: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
    borderBottomColor: "gray",
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: 10,
  },
  end: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
  },
});
