import TechnologoItems from "../components/Technology/TechnologoItems";
import { useState, useEffect } from "react";

const Technology = (props) => {
  // const [jsonData, setJsonData] = useState([]);
  // console.log("111");
  // const fetchData = async () => {
  //   try {
  //     const res = await fetch(
  //       "https://recat-meetup-project-default-rtdb.firebaseio.com/groups.json"
  //     );
  //     console.log(res);
  //     if (!res.ok) throw new Error(`something went wrong`);
  //     const data = await res.json();
  //     console.log(data);
  //     setJsonData(data.technology);
  //     console.log(data.technology);
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };
  // console.log(jsonData);
  // useEffect(() => {
  //   fetchData();
  // }, []);
  return <TechnologoItems items={props.items} />;
};
export default Technology;
