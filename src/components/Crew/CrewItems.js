import { Fragment } from "react";
import classes from "./CrewItems.module.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
const CrewItems = (props) => {
  const text = props.items.crew.map((item) => {
    return (
      <div className={classes["crew_silde"]}>
        <div>{item.name}</div>
        <div>{item.bio}</div>
        <div>{item.role}</div>
      </div>
    );
  });
  console.log(props.items.crew);
  return (
    <Fragment>
      <h2 className={classes["crew_header"]}>meet your crew</h2>
      <div className={classes["crew_silde__wrapper"]}>
        <Slide>{text}</Slide>
      </div>
    </Fragment>
  );
};
export default CrewItems;
