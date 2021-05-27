// import logo from './logo.svg';
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { Provider } from "react-redux";
import configureStore from "./_store/ConfigureStore";
import configureValidators from "./_utils/custom-validators-message";
configureValidators();
let { store } = configureStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
