import classes from "./DestinationItems.module.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const DestinationItems = (props) => {
  console.log(props.items.destinations);
  const text = props.items.destinations.map((item) => {
    return (
      <TabPanel>
        <div className={classes["tab-detail"]}>{item.name}</div>
        <div className={classes["tab-detail"]}>{item.description}</div>
        <div className={classes["tab-detail"]}>{item.distance}</div>
        <div className={classes["tab-detail"]}>{item.travel}</div>
      </TabPanel>
    );
  });
  return (
    <div className={classes["tab-wrapper"]}>
      <Tabs>
        <TabList>
          <Tab>Moon</Tab>
          <Tab>Mars</Tab>
          <Tab>Europa</Tab>
          <Tab>Titan</Tab>
        </TabList>
        {text}
      </Tabs>
    </div>
  );
};
export default DestinationItems;
