import { View, StyleSheet } from "react-native";
import { useState } from "react";
import ColorConstants from "../constants/ColorConstants";
import TitleText from "../components/TitleText";
import FormInput from "../components/FormInput";
import Button from "../components/Button";
import ValidationText from "../components/ValidationText";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { setIsLoggedIn } from "../redux/actions";

export default LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);

  const dispatch = useDispatch();

  const onSubmit = async () => {
    try {
      const res = await axios.post("https://dummyjson.com/auth/login", {
        username,
        password,
      });
      try {
        await AsyncStorage.setItem("token", res.data.token);
        dispatch(setIsLoggedIn(true));
      } catch (error) {
        console.log(error);
      }
      setIsInvalid(false);
      navigation.navigate("Home");
    } catch (error) {
      console.log(error.response);
      setIsInvalid(true);
    }
  };

  const onPressSignup = () => {
    navigation.navigate("Signup");
  };

  return (
    <View style={styles.container}>
      <View>
        <TitleText text={"Welcome to ChatSlack!"} fontSize={25} />
        <TitleText text={"Please login to continue"} fontSize={20} />
      </View>
      <View style={styles.formContainer}>
        <FormInput
          value={username}
          setValue={setUsername}
          placeholder={"Username"}
        />
        <FormInput
          value={password}
          setValue={setPassword}
          placeholder={"Password"}
          secureTextEntry={true}
        />
      </View>
      {isInvalid && <ValidationText text={"Invalid username or password!"} />}
      <View style={styles.buttonContainer}>
        <Button text={"Login"} onPress={onSubmit} />
        <Button text={"Sign up"} onPress={onPressSignup} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: ColorConstants.COLOR_LIGHTEST,
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    marginVertical: 30,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    margin: 10,
  },
});
