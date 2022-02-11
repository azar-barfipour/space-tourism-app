import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import classes from "./TechnologoItems.module.css";
const TechnologoItems = (props) => {
  const text = props.items.technology.map((item) => {
    return (
      <div className={classes["tech_silde"]}>
        <div>{item.name}</div>
        <div>{item.description}</div>
        <span>{item.caption}</span>
      </div>
    );
  });
  console.log(props.items);
  return (
    <div className={classes["tech_silde__wrapper"]}>
      <Slide>{text}</Slide>
    </div>
    // <ul>
    //   {props.items.technology.map((item) => {
    //     return (
    //       <TechnologoItem
    //         key={Math.floor()}
    //         id={item.key}
    //         name={item.name}
    //         image={item.images.portrait}
    //         description={item.description}
    //       />
    //     );
    //   })}
    // </ul>
  );
};
export default TechnologoItems;
