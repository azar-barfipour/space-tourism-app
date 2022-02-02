const TechnologoItem = (props) => {
  return (
    <div>
      <li>{props.name}</li>
      <li>
        <img src={props.image}></img>
      </li>
      <li>{props.description}</li>
    </div>
  );
};
export default TechnologoItem;
