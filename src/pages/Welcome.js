import classes from "./Welcome.module.css";
const Welcome = () => {
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.header}>SPACE</h1>
      <p className={classes.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, error.
        Velit in debitis recusandae iure aut cupiditate, ipsa, odio illum
        officiis ea iusto! Facilis dolorum aspernatur laborum impedit expedita
        eos?
      </p>
    </div>
  );
};
export default Welcome;
