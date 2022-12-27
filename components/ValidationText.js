import { Text, StyleSheet } from "react-native";

export default ValidationText = ({ text }) => {
  return <Text style={styles.container}>{text}</Text>;
};

const styles = StyleSheet.create({
  container: {
    color: "red",
    fontSize: 15,
  },
});
