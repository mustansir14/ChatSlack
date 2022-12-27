import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import ColorConstants from "../constants/ColorConstants";

export default ChatBox = ({ data, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Chat", {
          id: data.id,
        })
      }
    >
      <View style={styles.container}>
        <Image
          source={
            data.imageUri
              ? { uri: data.imageUri }
              : require("../assets/no-profile-pic.png")
          }
          style={styles.image}
        ></Image>
        <View style={styles.rightContainer}>
          <Text style={styles.nameText}>{data.name}</Text>
          <Text style={styles.messageText}>
            {data.messages.length > 0
              ? data.messages[data.messages.length - 1].text
              : ""}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: "2%",
    backgroundColor: ColorConstants.COLOR_LIGHTEST,
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 37.5,
  },
  rightContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: "5%",
  },
  nameText: {
    fontSize: 17,
    color: ColorConstants.COLOR_DARKEST,
  },
  messageText: {
    fontSize: 13,
    marginTop: 5,
    color: ColorConstants.COLOR_LIGHT,
  },
});
