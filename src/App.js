import Layout from "./components/layout/Layout";
import { Routes, Route, Navigate } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="home" />}></Route>
        <Route path="home" element={<Welcome />}></Route>
        <Route path="destination" element={<Destination />}></Route>
        <Route path="crew" element={<Crew />}></Route>
        <Route path="technology" element={<Technology />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
