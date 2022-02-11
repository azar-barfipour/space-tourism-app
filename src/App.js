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
    try {
      const res = await fetch("data.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      console.log(res);
      if (!res.ok) throw new Error(`something went wrong`);
      const data = await res.json();
      console.log(data);
      setJsonData(data);
      console.log(jsonData);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="home" />}></Route>
        <Route path="home" element={<Welcome />}></Route>
        {jsonData && (
          <Route
            path="destination"
            element={<Destination items={jsonData} />}
          ></Route>
        )}
        <Route path="crew" element={<Crew items={jsonData} />}></Route>
        <Route
          path="technology"
          element={<Technology items={jsonData} />}
        ></Route>
      </Routes>
    </Layout>
  );
}

export default App;
