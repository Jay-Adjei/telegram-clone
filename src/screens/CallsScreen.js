import React from "react";
import Calls from "../components/Calls";
import chats from "../../assets/data/chats.json";
import { FlatList } from "react-native";

export default function CallsScreen() {
  return (
    <FlatList data={chats} renderItem={({ item }) => <Calls chat={item} />} />
  );
}
