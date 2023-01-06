import ChatScreen from "../screens/ChatScreen";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIsLoggedIn } from "../redux/actions";

const Stack = createNativeStackNavigator();

export default MainNavigation = () => {
  const { isLoggedIn } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    async function checkToken() {
      try {
        const token = await AsyncStorage.getItem("token");
        if (token === null) {
          dispatch(setIsLoggedIn(false));
        } else {
          dispatch(setIsLoggedIn(true));
        }
      } catch (error) {
        console.log(error);
      }
    }

    checkToken();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {isLoggedIn ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Chat" component={ChatScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
