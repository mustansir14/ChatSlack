import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import DeleteButton from "./DeleteButton";
import ColorConstants from "../constants/ColorConstants";

export default Message = ({ message, deleteMessage, index }) => {
  const { me, text, dateSent } = message;
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: me
            ? ColorConstants.COLOR_DARKEST
            : ColorConstants.COLOR_LIGHT,
          alignSelf: me ? "flex-end" : "flex-start",
        },
      ]}
    >
      <View style={styles.textContainer}>
        <Text
          style={{
            color: me
              ? ColorConstants.COLOR_TEXT_LIGHT
              : ColorConstants.COLOR_TEXT_DARK,
          }}
        >
          {text}
        </Text>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.optionsContainer}>
          <DeleteButton me={me} deleteMessage={() => deleteMessage(index)} />
        </View>
        <View style={styles.dateTimeContainer}>
          <Text
            style={{
              color: me
                ? ColorConstants.COLOR_TEXT_LIGHT
                : ColorConstants.COLOR_TEXT_DARK,
              fontSize: 10,
            }}
          >
            {dateSent.getHours() + ":" + dateSent.getMinutes()}
          </Text>
          <Icon
            name="check"
            color={
              me
                ? ColorConstants.COLOR_TEXT_LIGHT
                : ColorConstants.COLOR_TEXT_DARK
            }
            style={{ marginLeft: 5 }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    borderRadius: 10,
    margin: 5,
    maxWidth: "80%",
  },
  optionsContainer: {
    alignSelf: "flex-end",
  },

  textContainer: {
    maxWidth: "80%",
    justifyContent: "center",
    alignContent: "center",
    padding: 10,
  },
  dateTimeContainer: {
    alignSelf: "flex-end",
    display: "flex",
    flexDirection: "row",
    margin: 10,
  },
});
