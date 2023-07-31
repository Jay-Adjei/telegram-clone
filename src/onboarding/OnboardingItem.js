import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

const OnboardingItem = ({ item }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <View style={{}}>
        <Image
          source={{ uri: item.image }}
          style={[styles.image, { width, resizeMode: "contain" }]}
        />
      </View>
      <View style={{ flex: 0.3 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: StatusBar.currentheight,
  },
  image: {
    flex: 0.5,
    justifyContent: "center",
  },
  title: {
    fontWeight: "400",
    fontSize: 28,
    marginBottom: 10,
    color: "black",
    textAlign: "center",
  },
  description: {
    fontWeight: "400",
    color: "gray",
    textAlign: "center",
    paddingHorizontal: 64,
    flexWrap: "wrap",
  },
});
export default OnboardingItem;
