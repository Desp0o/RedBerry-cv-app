import {Routes,Route} from "react-router-dom";
import MainScreen from "./components/Main/Main";

function App() {
  return (
    <Routes>
        <Route exact path="*" element={<MainScreen />} />
    </Routes>
  );
}

export default App;
