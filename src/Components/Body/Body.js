import ChoiceList from "./ChoiceList";
import FoodList from "./FoodList";
import classes from "./Body.module.css";

const Body = () => {
  return (
    <div className={classes.body}>
      <h3>Choose your Category</h3>
      <ChoiceList />
      <FoodList />
    </div>
  );
};

export default Body;
