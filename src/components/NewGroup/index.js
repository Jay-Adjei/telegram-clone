import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
} from "react-native";
import React from "react";
import dayjs from "dayjs";

const NewGroup = ({ chat }) => {
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
            <Text numberOfLines={1} style={styles.name}>
              {chat.user.name}
            </Text>
            <Text style={styles.subTitle}>
              Last seen {dayjs(chat.lastMessage.createdAt).fromNow()}
            </Text>
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

export default NewGroup;
