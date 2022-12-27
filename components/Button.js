import { Pressable, Text, StyleSheet } from "react-native";
import ColorConstants from "../constants/ColorConstants";

export default Button = ({ text, onPress, width }) => {
  const otherStyles = {
    width,
  };
  return (
    <Pressable style={[styles.button, otherStyles]} onPress={onPress}>
      <Text style={styles.textStyle}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: ColorConstants.COLOR_LIGHT,
    elevation: 2,
    marginLeft: "5%",
    marginRight: "5%",
    height: 35,
    minWidth: 50,
  },
  textStyle: {
    color: ColorConstants.COLOR_TEXT_LIGHT,
    fontWeight: "bold",
    textAlign: "center",
  },
});
