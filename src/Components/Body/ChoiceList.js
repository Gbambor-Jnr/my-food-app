import classes from "./ChoiceList.module.css";

const ChoiceList = () => {
  //   const arr1 = [{ item: 1 }, { item: 2 }];
  //   const item3 = { item: 3 };
  //   const arr2 = [...arr1];
  //   const arr3 = [arr2.concat(item3)];
  //   console.log(arr3);
  return (
    <div>
      <div className={classes.container}>
        <a href="/">FAST FOOD</a>
        <a href="/">LUNCH</a>
        <a href="/">DINNER</a>
        <a href="/">REFRESH</a>
      </div>
      <p> 🔥 TOP IN MEAL</p>
      <div></div>
    </div>
  );
};

export default ChoiceList;
