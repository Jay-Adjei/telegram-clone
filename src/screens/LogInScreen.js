import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Fontisto, Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";

const GroupBox = ({ title, children }) => {
  return (
    <View style={styles.groupBox}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const LogInScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: "center",
          textAlign: "center",
          paddingHorizontal: 70,
        }}
      >
        <Text style={{ fontWeight: "600", fontSize: 17, paddingBottom: 10 }}>
          Your phone number
        </Text>
        <Text style={{ textAlign: "center" }}>
          Please confirm your country code and enter your phone number.
        </Text>
      </View>
      <View style={{ paddingTop: 30 }}>
        <Pressable
          onPress={() => {
            navigation.navigate("CountryScreen");
          }}
        >
          {/* Use the selectedCountry to display the chosen country */}
          <GroupBox title="Country">
            <View style={styles.groupContainer}>
              <Image
                source={{
                  uri: "https://i.pinimg.com/236x/16/ee/19/16ee19c25b24461f7933e378b4d1ee3e.jpg",
                }}
                style={styles.image}
              />
              <Text style={{ paddingLeft: 15 }}>Ghana</Text>
              <Fontisto
                name="angle-right"
                size={24}
                color="lightgray"
                style={{ left: 240 }}
              />
            </View>
          </GroupBox>
        </Pressable>
        <GroupBox title="Phone number">
          <View style={styles.groupContainer}>
            <View style={{ borderRightWidth: 1, paddingRight: 5 }}>
              {/* Use the selectedCountry code */}
              <Text>+233</Text>
            </View>
            <View style={{ paddingLeft: 10, flex: 1 }}>
              <TextInput placeholder="##########" />
            </View>
          </View>
        </GroupBox>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("OTPScreen");
        }}
        style={{
          alignSelf: "flex-end",
          backgroundColor: "#0088cc",
          borderRadius: 20,
          top: 50,
        }}
      >
        <Ionicons
          name="arrow-forward-sharp"
          size={30}
          color="white"
          style={{ padding: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    justifyContent: "center",
    flex: 1,
    padding: 10,
    backgroundColor: "white",
  },
  groupContainer: { flexDirection: "row", alignItems: "center" },
  image: { height: 30, width: 30 },
  groupBox: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    position: "relative",
  },
  title: {
    fontSize: 12,
    marginBottom: 10,
    position: "absolute", // Position the title absolutely
    top: -13, // Adjust the top value to control the distance from the top border
    left: 10, // Adjust the right value to control the distance from the right border
    backgroundColor: "white", // Set a background color to cover the border
    paddingHorizontal: 5,
  },
  content: {
    // You can add additional styles for the content within the group box
  },
});

export default LogInScreen;
