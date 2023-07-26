import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{ backgroundColor: "#229ED9" }}
    >
      <View style={{ flexDirection: "row" }}>
        <Image
          source={{
            uri: "https://c4.wallpaperflare.com/wallpaper/611/838/413/spiderman-hd-4k-superheroes-wallpaper-thumb.jpg",
          }}
          style={styles.image}
        />
        <View>
          <Entypo name="moon" size={24} color="white" style={styles.icon} />
        </View>
      </View>

      <Text style={styles.name}>Mr. Adjei</Text>
      <Text style={styles.number}>+233 594065031</Text>
      <View style={styles.ItemList}>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  row: { flexDirection: "row" },
  image: {
    height: 60,
    width: 60,
    borderRadius: 50,
    marginTop: 5,
    marginLeft: 15,
  },
  icon: {
    marginTop: 20,
    marginLeft: 180,
  },
  name: {
    marginTop: 10,
    marginLeft: 20,
    marginBottom: 7,
    color: "white",
  },
  number: {
    color: "lightgray",
    marginLeft: 20,
    marginBottom: 10,
  },
  ItemList: { backgroundColor: "#FFF", paddingTop: 10 },
});

export default CustomDrawer;
