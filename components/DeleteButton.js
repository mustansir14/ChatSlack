import { View, StyleSheet, Text, Modal, Pressable } from "react-native";
import { Button as IconButton } from "react-native-elements";
import Icon from "react-native-vector-icons/AntDesign";
import { useState } from "react";
import Button from "./Button";
import ColorConstants from "../constants/ColorConstants";

export default DeleteButton = ({ me, deleteMessage }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const onPress = () => {
    setModalVisible(true);
  };
  return (
    <View>
      <IconButton
        onPress={onPress}
        icon={
          <Icon
            name={"delete"}
            color={
              me
                ? ColorConstants.COLOR_TEXT_LIGHT
                : ColorConstants.COLOR_TEXT_DARK
            }
          />
        }
        type="clear"
      />
      <View>
        <Modal
          animationType="fade"
          visible={modalVisible}
          transparent={true}
          onRequestClose={() => {
            setModalVisible(false);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                Are you sure you want to delete this message?
              </Text>
              <View style={styles.buttonView}>
                <Button
                  onPress={() => {
                    setModalVisible(!modalVisible);
                    deleteMessage();
                  }}
                  text={"Yes"}
                />
                <Button
                  onPress={() => setModalVisible(!modalVisible)}
                  text={"No"}
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: ColorConstants.COLOR_LIGHTEST,
    borderRadius: 10,
    padding: 35,
    alignItems: "center",
    shadowColor: ColorConstants.COLOR_TEXT_DARK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: "20%",
  },
  buttonView: {
    flex: 1,
    flexDirection: "row",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
