import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const BioScreeen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>BioScreeen</Text>
    </View>
  );
};
BioScreeen.options = {
  headerShown: true,
};

export default BioScreeen;
