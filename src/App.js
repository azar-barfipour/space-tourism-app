import Layout from "./components/layout/Layout";
import { Routes, Route, Navigate } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import { useEffect, useState } from "react";

function App() {
  const [jsonData, setJsonData] = useState([]);
  const fetchData = async () => {
    const res = await fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await res.json();
    setJsonData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(jsonData);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="home" />}></Route>
        <Route path="home" element={<Welcome />}></Route>
        <Route
          path="destination"
          element={<Destination items={jsonData} />}
        ></Route>
        )<Route path="crew" element={<Crew />}></Route>
        <Route path="technology" element={<Technology />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
