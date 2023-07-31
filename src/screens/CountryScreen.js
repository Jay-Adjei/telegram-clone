import { View, Text, FlatList } from "react-native";
import React from "react";
import countries from "../../assets/data/countries.json";
import Countries from "../components/Country";
import { useState } from "react";
import LogInScreen from "./LogInScreen";
import { useNavigation } from "@react-navigation/native";

const CountryScreen = () => {
  const navigation = useNavigation();
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountryPress = (country) => {
    setSelectedCountry(country);
    navigation.navigate(<LogInScreen selectedCountry={country} />); // Use "LogInScreen" as the route name
  };
  return (
    <View>
      <FlatList
        data={countries}
        renderItem={({ item }) => (
          <Countries item={item} onPress={handleCountryPress} />
        )}
      />
    </View>
  );
};

export default CountryScreen;
