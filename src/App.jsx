import { BrowserRouter } from "react-router-dom";
import AnimationRoute from "./pages/AnimationRoute";

const App = () => {
  return (
    <BrowserRouter>
      <AnimationRoute />
    </BrowserRouter>
  );
};

export default App;
