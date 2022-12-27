import { TextInput, StyleSheet } from "react-native";

export default FormInput = ({
  value,
  setValue,
  placeholder,
  secureTextEntry,
}) => {
  return (
    <TextInput
      value={value}
      onChangeText={setValue}
      placeholder={placeholder}
      style={styles.container}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: 250,
    margin: 5,
    padding: 10,
    borderRadius: 5,
  },
});
