import { View, StyleSheet, TextInput, Button } from "react-native";
import { useState } from "react";
import ColorConstants from "../constants/ColorConstants";

export default InputBox = ({ addMessage }) => {
  const [messageText, setMessageText] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Message"
        value={messageText}
        onChangeText={setMessageText}
      />
      <View style={styles.button}>
        <Button
          title="Send"
          color={ColorConstants.COLOR_DARK}
          onPress={() => {
            addMessage({ text: messageText, me: true, dateSent: new Date() });
            setMessageText("");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 10,
    width: "80%",
  },
  container: {
    height: 50,
    display: "flex",
    flexDirection: "row",
  },
  button: {
    margin: 10,
  },
});
