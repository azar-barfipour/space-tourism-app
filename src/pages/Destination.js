import DestinationItems from "../components/Destination/DestinationItems";
const Destination = (props) => {
  console.log(props.items);
  console.log(props.items.destinations);
  return <div>{props.items && <DestinationItems items={props.items} />}</div>;
};
export default Destination;
