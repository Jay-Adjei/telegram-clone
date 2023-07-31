import { View, StyleSheet, useWindowDimensions, Animated } from "react-native";
import React from "react";

const PageIndicator = ({ data, scrollX }) => {
  const width = useWindowDimensions().width;
  return (
    <View style={styles.container}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotwidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: "clamp",
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            style={[styles.dot, { width: dotwidth, opacity }]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 64,
  },
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: "#0088cc",
    marginHorizontal: 8,
  },
});
export default PageIndicator;
