import { StyleSheet, FlatList, View } from "react-native";
import Header from "../components/Header";
import ChatBox from "../components/ChatBox";
import { useSelector } from "react-redux";

export default HomeScreen = ({ navigation }) => {
  const { data } = useSelector((state) => state.userReducer);

  const renderItem = ({ item, index }) => {
    return <ChatBox data={item} navigation={navigation} />;
  };
  return (
    <View style={styles.container}>
      <Header text={"Demo Chat App"} />
      <FlatList
        data={data}
        renderItem={renderItem}
        style={styles.flatList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "10%",
  },
  flatList: {
    flex: 1,
  },
});
