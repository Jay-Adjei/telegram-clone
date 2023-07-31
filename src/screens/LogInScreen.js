import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
} from "react-native";
import React, { useState } from "react";

const cloudGif = require("../../assets/images/ClockIcon.gif");
const telegramIcon = require("../../assets/images/TelegramLogo.gif"); // Load the local GIF image
const speedometer = require("../../assets/images/speedometer.gif");
const images = [telegramIcon, cloudGif, speedometer];

const WIDTH = Dimensions.get("window").width;
const Height = Dimensions.get("window").height;
onchange = (nativeEvent) => {};

const LogInScreen = () => {
  const [imgActive, setimgActive] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrap}>
        <ScrollView
          onscroll={({ nativeEvent }) => onchange(nativeEvent)}
          showsHorizintalScrollIndicator={false}
          paddingEnabled
          horizontal
          style={styles.wrap}
        >
          {images.map((e, index) => (
            <Image
              key={e}
              resizeMode="contain"
              style={styles.wrap}
              source={e}
            />
          ))}
        </ScrollView>
        <View style={styles.wrapDot}>
          {images.map((e, index) => (
            <Text
              key={e}
              style={imgActive == index ? styles.dotActive : styles.dot}
            >
              ●
            </Text>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrap: {
    width: WIDTH,
    height: Height * 0.5,
  },
  wrapDot: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    alignSelf: "center",
  },
  dotActive: {
    margin: 3,
    color: "black",
  },
  dot: {
    margin: 3,
    color: "lightgray",
  },
});

export default LogInScreen;
