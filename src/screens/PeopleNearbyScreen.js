import { View, StyleSheet, StatusBar, Button, Text } from "react-native";
import React from "react";
import Lottieanimation from "../animation/Lottieanimation";
import PNBText from "../PNB/PNBText";

export default function PeopleNearbyScreen() {
  return (
    <View style={styles.container}>
      <Lottieanimation />
      <View style={styles.content}>
        <Text style={styles.title}>People Nearby</Text>
        <Text style={styles.description}>
          Quickly add people nearby who are viewing this section and discover
          local group chats.
        </Text>
        <Text style={styles.description}>
          Please switch on location access to enable this feature.
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            title="Allow Access"
            onPress={() => console.log("Button pressed")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    paddingBottom: 30,
    paddingTop: 10,
  },
  description: {
    textAlign: "center",
    color: "gray",
    marginVertical: 15,
  },
  buttonContainer: {
    alignSelf: "stretch",
    marginHorizontal: 10,
    marginBottom: 10,
  },
});
