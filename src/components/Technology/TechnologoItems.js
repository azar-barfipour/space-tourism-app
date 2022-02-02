import TechnologoItem from "./TechnologoItem";
const TechnologoItems = (props) => {
  return (
    <ul>
      {props.items.technology.map((item) => {
        return (
          <TechnologoItem
            key={Math.floor()}
            id={item.key}
            name={item.name}
            image={item.images.portrait}
            description={item.description}
          />
        );
      })}
    </ul>
  );
};
export default TechnologoItems;
