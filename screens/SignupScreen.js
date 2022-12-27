import { View, StyleSheet } from "react-native";
import { useState } from "react";
import ColorConstants from "../constants/ColorConstants";
import TitleText from "../components/TitleText";
import Button from "../components/Button";
import FormInput from "../components/FormInput";
import ValidationText from "../components/ValidationText";

export default SignupScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [validationText, setValidationText] = useState(null);

  const onSubmit = () => {
    const fields = {
      firstName,
      lastName,
      username,
      password,
      passwordConfirm,
    };
    for (let field in fields) {
      if (fields[field] === "") {
        setValidationText("Please fill all fields.");
        return;
      }
    }
    setValidationText(null);
    navigation.navigate("Home");
  };

  const onPressLogin = () => {
    navigation.navigate("Login");
  };
  return (
    <View style={styles.container}>
      <View>
        <TitleText text={"Welcome to ChatSlack!"} fontSize={25} />
        <TitleText
          text={"Please enter the following details to create an account"}
          fontSize={20}
        />
      </View>
      <View style={styles.formContainer}>
        <FormInput
          value={firstName}
          setValue={setFirstName}
          placeholder={"First Name"}
        />
        <FormInput
          value={lastName}
          setValue={setLastName}
          placeholder={"Last Name"}
        />
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
        <FormInput
          value={passwordConfirm}
          setValue={setPasswordConfirm}
          placeholder={"Confirm Password"}
          secureTextEntry={true}
        />
      </View>
      {validationText && <ValidationText text={validationText} />}
      <View style={styles.buttonContainer}>
        <Button text={"Sign up"} onPress={onSubmit} />
        <Button
          text={"Already have an account? Log in"}
          onPress={onPressLogin}
        />
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
