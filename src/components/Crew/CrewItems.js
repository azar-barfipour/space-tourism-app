import CrewItem from "../Crew/CrewItem";
const CrewItems = (props) => {
  console.log(props.items.crew);
  return (
    <ul>
      {props.items.crew.map((item) => {
        return (
          <CrewItem
            key={Math.floor()}
            id={item.key}
            name={item.name}
            bio={item.bio}
            image={item.images.png}
            role={item.role}
          />
        );
      })}
    </ul>
  );
};
export default CrewItems;
