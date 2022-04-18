import classes from "./FoodList.module.css";

import food1 from "../Images/food1.webp";
import food2 from "../Images/food2.jpeg";
import food3 from "../Images/food3.jpeg";
import food4 from "../Images/food4.jpeg";

import FoodListItem from "./FoodListItem";

const FoodList = () => {
  const defaultFood = [
    {
      id: "m1",
      src: food1,
      title: "Fries With Chicken 🔥 cheese burger",
      price: 25.14,
    },
    {
      id: "m2",
      src: food2,
      title: "Pizza with Leaves And StrawBerry",
      price: 19.28,
    },
    {
      id: "m3",
      src: food3,
      title: "Beef Cheese Burher 🔥 with sausages",
      price: 43.12,
    },
    {
      id: "m4",
      src: food4,
      title: "Hungry Meal with burger and fries nd sausages",
      price: 14.22,
    },
  ];

  //  const cartCtx=useContext(CartContext)

  //  const submitNowChangeHandler=()=>{

  //  }

  const lists = defaultFood.map((food) => {
    // <li key={food.id} id={food.id}>
    //   <img src={food.src} alt="pictures" />
    //   <div className={classes.div}>
    //     <p>{food.title}</p>
    //     <p>{food.price}</p>
    //   </div>

    //   <Input onSubmitNow={} />
    // </li>
    return (
      <div key={food.id}>
        <FoodListItem
          id={food.id}
          src={food.src}
          title={food.title}
          price={food.price}
        />
      </div>
    );
  });

  return (
    <div>
      <ul className={classes.ul}>{lists}</ul>
    </div>
  );
};

export default FoodList;
