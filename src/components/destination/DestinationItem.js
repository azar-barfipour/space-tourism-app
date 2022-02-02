import classes from "./DestinationItem.module.css";
const DestinationItem = (props) => {
  return (
    <div className="destination">
      <li className={classes["des__item"]}>{props.name}</li>
      <li className={classes["des__item"]}>
        <img src={props.image.webp}></img>
      </li>
      <li className={classes["des__item"]}>{props.description}</li>
      <li className={classes["des__item"]}>{props.distance}</li>
      <li className={classes["des__item"]}>{props.travel}</li>
    </div>
  );
};
export default DestinationItem;
