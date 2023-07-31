import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
  Animated,
} from "react-native";
import React, { useState, useRef } from "react";
import OnboardingItem from "./OnboardingItems";
import { Entypo } from "@expo/vector-icons";
import PageIndicator from "./PageIndicator";
import slides from "../../../assets/data/slides";
import { useNavigation } from "@react-navigation/native";

const Onboarding = () => {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const viewConfig = useRef({
    viewAreaCoveragePercentThreshold: 50,
  }).current;
  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View>
        <Entypo
          name="moon"
          size={30}
          color="#0088cc"
          style={{ alignSelf: "flex-end", right: 25 }}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={slides}
          renderItem={({ item }) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidesRef}
        />
        <PageIndicator data={slides} scrollX={scrollX} />
      </View>

      <View style={styles.button}>
        <Button
          title="Start Messaging"
          onPress={() => {
            navigation.navigate("LogInScreen");
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    top: 50,
    backgroundColor: "white",
  },
  button: {
    justifyContent: "center",
    top: 200,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
export default Onboarding;
