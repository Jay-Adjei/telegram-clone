import { FlatList } from "react-native";
import React from "react";
import chats from "../../assets/data/chats.json";
import Contacts from "../components/Contacts";
import TextComponent from "../components/Contacts/Textindex";

export default function ContactsScreen() {
  return (
    <FlatList
      data={chats}
      ListHeaderComponent={() => <TextComponent />}
      renderItem={({ item }) => <Contacts chat={item} />}
    />
  );
}
