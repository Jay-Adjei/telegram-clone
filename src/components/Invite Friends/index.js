import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Pressable,
} from "react-native";
import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

function Contactlistitem({ contact, selectedContacts, setSelectedContacts }) {
  const [isSelected, setIsSelected] = useState(false);

  const handleContactClick = () => {
    setIsSelected(!isSelected);
    if (!isSelected) {
      setSelectedContacts((prevSelectedContacts) => [
        ...prevSelectedContacts,
        contact.user.name,
      ]);
    } else {
      setSelectedContacts((prevSelectedContacts) =>
        prevSelectedContacts.filter((name) => name !== contact.user.name)
      );
    }
  };

  return (
    <SafeAreaView style={styles.maincontainer}>
      <ScrollView>
        <Pressable onPress={handleContactClick} style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: contact.user.image,
              }}
              style={styles.image}
            />
            {isSelected && (
              <View style={styles.tickContainer}>
                <AntDesign name="checkcircle" size={24} color="#46C635" />
              </View>
            )}
          </View>
          <View style={styles.content}>
            <View style={styles.row}>
              <Text numberOfLines={1} style={styles.name}>
                {contact.user.name}
              </Text>
              <Text style={styles.subTitle}>{contact.user.number}</Text>
            </View>
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
  imageContainer: {
    position: "relative",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 5,
    marginRight: 7,
    margin: 5,
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
  tickContainer: {
    position: "absolute",
    bottom: 5,
    right: 5,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 1,
    zIndex: 1,
  },
});
export default Contactlistitem;
