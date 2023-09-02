import { Typography } from "flourish-ui";
import "./App.scss";
import TestComponent from "./TestComponent";

const App = () => {
  return (
    <>
      <Typography>Hello world</Typography>
      <TestComponent />
      <a href="https://amazon.com" target="_blank">hello world</a>
    </>
  );
};

export default App;
