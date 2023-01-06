import { View, StyleSheet, Text } from "react-native";
import ColorConstants from "../constants/ColorConstants";
import Button from "./Button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { setIsLoggedIn } from "../redux/actions";

export default Header = ({ text }) => {
  const dispatch = useDispatch();

  const onPressLogout = async () => {
    try {
      await AsyncStorage.removeItem("token");
      dispatch(setIsLoggedIn(false));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <Button text={"Log out"} onPress={onPressLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "8%",
    backgroundColor: ColorConstants.COLOR_DARK,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: "5%",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: ColorConstants.COLOR_TEXT_LIGHT,
  },
});
