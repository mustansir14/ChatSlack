import { View, StyleSheet, Text } from "react-native";
import ColorConstants from "../constants/ColorConstants";

export default Header = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "8%",
    backgroundColor: ColorConstants.COLOR_DARK,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: ColorConstants.COLOR_TEXT_LIGHT,
  },
});
