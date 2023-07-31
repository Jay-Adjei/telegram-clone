import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Pressable,
} from "react-native";
import React, { useRef } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@react-native-material/core";

const OTPScreen = () => {
  const navigation = useNavigation();
  const inputRefs = [];
  const inputs = [];

  // Function to handle changes in TextInput and move focus to the next input
  const handleInputChange = (text, index) => {
    inputs[index] = text;
    if (text.length === 1 && index < inputRefs.length - 1) {
      inputRefs[index + 1].focus();
    }
  };
  return (
    <View style={styles.container}>
      <Pressable style={{ alignSelf: "flex-start" }}>
        <AntDesign
          name="arrowleft"
          size={24}
          color="black"
          onPress={() => {
            navigation.navigate("LogInScreen");
          }}
        />
      </Pressable>
      <View>
        <Image
          source={{
            uri: "https://i.pinimg.com/564x/2a/cf/0e/2acf0e9cb36b4e8c6a3c7de2990f5ea0.jpg",
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.headerText}>
        <Text style={{ fontWeight: "600", fontSize: 17 }}>
          Check your Telegram messages
        </Text>
      </View>
      <View style={styles.text}>
        <Text style={{ textAlign: "center", color: "gray" }}>
          We've sent the code to the telegram app for +233 594065031 on your
          other device
        </Text>
      </View>
      <View style={styles.textinput}>
        {[0, 1, 2, 3, 4].map((index) => (
          <TextInput
            key={index}
            style={styles.textInputStyle}
            maxLength={1}
            ref={(ref) => (inputRefs[index] = ref)}
            onChangeText={(text) => handleInputChange(text, index)}
            value={inputs[index]}
          />
        ))}
      </View>
      <View style={{ paddingTop: 20 }}>
        <Button
          title="Verify"
          style={{ backgroundColor: "#0088cc" }}
          onPress={() => {
            navigation.navigate("Chats");
          }}
        />
      </View>
      <View style={{ bottom: 1 }}>
        <Text style={styles.footerText}>Tap to get code via SMS</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
  },
  image: { height: 200, width: 200 },
  headerText: { paddingBottom: 20 },
  text: { paddingHorizontal: 30 },
  textinput: { flexDirection: "row", paddingTop: 20 },
  textInputStyle: {
    borderWidth: 1,
    borderColor: "#0088cc",
    borderRadius: 8,
    marginRight: 3,
    padding: 7,
  },
  footerText: { top: 100, color: "#0088cc" },
});

export default OTPScreen;
