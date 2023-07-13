import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
  SafeAreaView,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
import { useState } from "react";
import { Value } from "react-native-reanimated";

function ChatListItem({ chat, toggleHeader }) {
  const navigation = useNavigation();
  const [isClicked, setIsClicked] = useState(true);

  const handleClick = () => {
    setIsClicked(true);
    toggleHeader(true);
  };

  return (
    <SafeAreaView style={styles.maincontainer}>
      <ScrollView>
        <Pressable
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
                {dayjs(chat.lastMessage.createdAt).fromNow(true)}
              </Text>
            </View>

            <Text numberOfLines={1} style={styles.subTitle}>
              {chat.lastMessage.text}
            </Text>
          </View>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    paddingTop: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "lightgray",
    backgroundColor: "#ffffff",
  },
  scrollview: {
    marginHorizontal: 10,
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
