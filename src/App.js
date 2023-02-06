import {Routes,Route} from "react-router-dom";
import MainScreen from "./components/Main/Main";
import Pinfo from "./components/personal/Pinfo";

function App() {
  return (
    <Routes>
        <Route exact path="*" element={<MainScreen />} />
        <Route exact path="/components/personal/Pinfo"  element={<Pinfo />} />
    </Routes>
  );
}

export default App;
