import HomePage from "./pages/HomePage/HomePage";
import WorkoutLogPage from "./pages/WorkoutLogPage/WorkoutLogPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/workouts" element={<WorkoutLogPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
