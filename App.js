import { Provider } from "react-redux";
import { Store } from "./redux/store";
import MainNavigation from "./navigators/MainNavigation";

export default function App() {
  return (
    <Provider store={Store}>
      <MainNavigation />
    </Provider>
  );
}
