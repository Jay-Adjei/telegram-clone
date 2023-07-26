import { View, StyleSheet, FlatList } from "react-native";
import React from "react";
import Contactlistitem from "../components/Invite Friends";
import contacts from "../../assets/data/contacts.json";
import Header from "../components/Invite Friends/IFheader";
import Footer from "../components/Invite Friends/IFfooter";
import { useState } from "react";

export default function InviteFriendsScreen() {
  const [selectedContacts, setSelectedContacts] = useState([]);

  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        ListHeaderComponent={<Header selectedContacts={selectedContacts} />}
        ListFooterComponent={<Footer selectedContacts={selectedContacts} />}
        renderItem={({ item }) => (
          <Contactlistitem
            contact={item}
            selectedContacts={selectedContacts}
            setSelectedContacts={setSelectedContacts}
          />
        )}
        keyExtractor={(item) => item.id}
        stickyHeaderIndices={[0, contacts.length + 1]}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
