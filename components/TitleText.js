import { Text, StyleSheet } from "react-native";
import ColorConstants from "../constants/ColorConstants";

export default TitleText = ({ text, fontSize }) => {
  const otherStyles = {
    fontSize,
  };
  return <Text style={[styles.container, otherStyles]}>{text}</Text>;
};

const styles = StyleSheet.create({
  container: {
    color: ColorConstants.COLOR_DARKEST,
    margin: 10,
  },
});
