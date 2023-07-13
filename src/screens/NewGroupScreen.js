import { View, Text, FlatList } from "react-native";
import React from "react";
import chats from "../../assets/data/chats.json";
import NewGroup from "../components/NewGroup";
import NewGroupInputBox from "./NewGroupInputBox";

const NewGroupScreen = () => {
  return (
    <FlatList
      data={chats}
      ListHeaderComponent={() => <NewGroupInputBox />}
      renderItem={({ item }) => <NewGroup chat={item} />}
    />
  );
};

export default NewGroupScreen;
