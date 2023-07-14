import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";

const Calls = ({ chat }) => {
  const timestamp = chat.lastMessage.createdAt;
  const [formattedDate, setFormattedDate] = useState("");
  useEffect(() => {
    const dateObj = new Date(timestamp);
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1; // Months are zero-based, so adding 1
    const day = dateObj.getDate();

    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    const seconds = dateObj.getSeconds();

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const date = ` ${monthNames[month]} ${day},${year}`;
    const time = `at ${hours}:${minutes}`;
    const formatted = `${date} ${time}`;
    setFormattedDate(formatted);
  }, [timestamp]);
  return (
    <SafeAreaView style={styles.maincontainer}>
      <View
        onPress={() => {
          navigation.navigate("Chat", { id: chat.id, name: chat.user.name });
          handleClick;
        }}
        style={styles.container}
      >
        <Image
          source={{
            uri: chat.user.image,
          }}
          style={styles.image}
        />
        <View style={styles.content}>
          <View style={styles.row}>
            <View style={{ flexDirection: "row" }}>
              <Text numberOfLines={1} style={styles.name}>
                {chat.user.name}
              </Text>
              <MaterialIcons
                name="call"
                size={24}
                color="#229ED9"
                style={{ marginRight: 20 }}
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              <MaterialIcons name="call-made" size={24} color="lightgreen" />
              <Text style={styles.subTitle}>{formattedDate}</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    paddingTop: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "lightgray",
    backgroundColor: "#ffffff",
  },
  container: {
    flexDirection: "row",
    marginVertical: 3,
    borderBottomColor: "lightgray",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 5,
    marginRight: 7,
  },
  content: {
    top: 6,
    flex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "lightgray",
  },
  row: {
    flexDirection: "column",
    marginBottom: 2,
  },
  name: {
    flex: 1,
    fontWeight: "bold",
  },
  subTitle: {
    color: "gray",
  },
});

export default Calls;
