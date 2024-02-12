import { Router } from "./app/router/router";
import Favicon from "react-favicon";
import { persistor, store } from "@entities/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "@assets/styles/index.scss";
import { ModalCloseCallbacksProvider } from "@shared/contexts/modal-context/modal-context-provider";

function App() {
  return (
    <Provider store={store}>
      <ModalCloseCallbacksProvider>
        <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
          <Favicon url="/favicon.ico" />
          <Router />
        </PersistGate>
      </ModalCloseCallbacksProvider>
    </Provider>
  );
}

export default App;
