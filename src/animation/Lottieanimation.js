import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import location_pin from "../../assets/images/loaction_pin.json";

const Lottieanimation = () => {
  return (
    <View>
      <LottieView
        source={location_pin} // Replace with your animation JSON file
        autoPlay
        loop
        style={{ height: 150, width: 150 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Lottieanimation;
