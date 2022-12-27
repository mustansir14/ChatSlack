import Message from "../components/Message";
import Header from "../components/Header";
import InputBox from "../components/InputBox";
import { StyleSheet, FlatList, View } from "react-native";
import { setData } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import ColorConstants from "../constants/ColorConstants";

export default ChatScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const { data } = useSelector((state) => state.userReducer);
  const dataCurrent = data.find((item) => {
    if (item.id === id) return true;
    return false;
  });
  const dispatch = useDispatch();
  const updateData = (singleData) => {
    const index = data.findIndex((item) => {
      if (item.id === singleData.id) return true;
      return false;
    });
    dispatch(
      setData([...data.slice(0, index), singleData, ...data.slice(index + 1)])
    );
  };
  const deleteMessage = (index) => {
    dataCurrent.messages.splice(index, 1);
    updateData({ ...dataCurrent, messages: [...dataCurrent.messages] });
  };

  const addMessage = (message) => {
    updateData({
      ...dataCurrent,
      messages: [...dataCurrent.messages, message],
    });
  };

  const renderItem = ({ item, index }) => {
    return (
      <Message
        message={item}
        key={index}
        deleteMessage={deleteMessage}
        index={index}
      />
    );
  };
  return (
    <View style={styles.container}>
      <Header text={dataCurrent.name} />
      <FlatList
        style={styles.messageContainer}
        data={dataCurrent.messages}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
      <InputBox addMessage={addMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "10%",
  },
  messageContainer: {
    flex: 1,
    backgroundColor: ColorConstants.COLOR_LIGHTEST,
  },
});
