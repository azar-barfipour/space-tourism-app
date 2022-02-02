import DestinationItem from "./DestinationItem";
const DestinationItems = (props) => {
  console.log(props.items.destinations);
  return (
    <div>
      <ul>
        {props.items.destinations.map((item) => {
          return (
            <DestinationItem
              key={Math.random()}
              id={item.key}
              name={item.name}
              image={item.images}
              description={item.description}
              distance={item.distance}
              travel={item.travel}
            />
          );
        })}
      </ul>
    </div>
  );
};
export default DestinationItems;
