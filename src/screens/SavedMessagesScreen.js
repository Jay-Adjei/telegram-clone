import { View, Text, ImageBackground, StyleSheet, Image } from "react-native";
import React from "react";
import InputBox from "../components";
import LottieView from "lottie-react-native";
import cloud from "../animation/cloud.gif";

export default function SavedMessagesScreen() {
  return (
    <ImageBackground
      source={{
        uri: "https://i.pinimg.com/736x/3d/8c/2f/3d8c2f2c82c1c9ef1e27be645cd1aa17.jpg",
      }}
      style={styles.uri}
    >
      <View style={styles.container}>
        <Image
          source={cloud} // Replace with your animation JSON file
          autoPlay
          loop
          style={{ height: 150, width: 150 }}
        />
        <View style={styles.Title}>
          <Text style={{ color: "white" }}>Your Cloud Storage</Text>
        </View>
        <View style={styles.Text}>
          <Text style={styles.text}>
            {" "}
            <Text style={styles.bulletPoint}>{"\u2022"}</Text> Forward messages
            here to save them{"\n"}
            <Text style={styles.bulletPoint}>{"\u2022"}</Text> Send media and
            files to store them{"\n"}
            <Text style={styles.bulletPoint}>{"\u2022"}</Text> Access this chat
            from any device{"\n"}
            <Text style={styles.bulletPoint}>{"\u2022"}</Text> Use search to
            quickly find things{"\n"}
          </Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <InputBox style={styles.inputBox} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  uri: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    backgroundColor: "rgba(20, 20, 20, 0.2)",
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  Title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  text: { color: "white", margin: 3 },
  bulletPoint: {
    fontSize: 24, // Adjust the font size as needed
    // ... other styles
  },
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});
