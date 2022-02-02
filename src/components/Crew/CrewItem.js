const CrewItem = (props) => {
  return (
    <div>
      <li>{props.name}</li>
      <li>{props.bio}</li>
      <li>
        <img src={props.image}></img>
      </li>
      <li>{props.role}</li>
    </div>
  );
};
export default CrewItem;
