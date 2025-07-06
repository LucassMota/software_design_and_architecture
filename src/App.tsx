import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ImperativeProgramming } from "./programming-paradigms/ImperativeProgramming";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/imperative-programming"
          element={<ImperativeProgramming />}
        />
      </Routes>
    </Router>
  );
}

export default App;
