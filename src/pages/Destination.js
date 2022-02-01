import DestinationItems from "../components/destination/DestinationItems";
const Destination = (props) => {
  console.log(props.items);
  console.log(props.items.destinations);
  return (
    <div>
      <h1>Pick Your Destination</h1>
      {props.items && <DestinationItems items={props.items} />}
    </div>
  );
};
export default Destination;
