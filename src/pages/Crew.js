import CrewItems from "../components/Crew/CrewItems";
const Crew = (props) => {
  return (
    <div>
      <CrewItems items={props.items} />
    </div>
  );
};
export default Crew;
