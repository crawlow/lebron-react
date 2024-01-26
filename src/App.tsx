import { Router } from "./router/router";
import Favicon from "react-favicon";
import '@assets/styles/index.scss';

function App() {
  return (
    <>
      <Favicon url="/favicon.ico" />
      <Router />
    </>
  );
}

export default App;
