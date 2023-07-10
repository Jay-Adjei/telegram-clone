import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
  SafeAreaView,
} from "react-native";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const ChatListItem = ({ chat }) => {
  return (
    <SafeAreaView style={styles.maincontainer}>
      <ScrollView>
        <View style={styles.container}>
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
                {dayjs(chat.lastMessage.createdAt).fromNow(true)}
              </Text>
            </View>

            <Text numberOfLines={1} style={styles.subTitle}>
              {chat.lastMessage.text}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    paddingTop: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "lightgray",
  },
  scrollview: {
    marginHorizontal: 10,
  },
  container: {
    flexDirection: "row",
    marginVertical: 3,
    borderBottomColor: Colors.gray,
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
    flexDirection: "row",
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
export default ChatListItem;
