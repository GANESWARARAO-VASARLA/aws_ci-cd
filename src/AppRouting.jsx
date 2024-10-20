import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import Counter from "./Counter";

const AppRouting = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/counter" element={<Counter />} />
    </Routes>
  );
};

export default AppRouting;
