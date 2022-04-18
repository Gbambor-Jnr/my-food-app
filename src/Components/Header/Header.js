import { Fragment } from "react/cjs/react.production.min";

import classes from "./Header.module.css";
import image from "../Images/mj2.jpeg";
import Button from "./Button";

const Header = (props) => {
  return (
    <Fragment>
      <div className={classes.container}>
        <span>
          <h2>Boss Miracle</h2>
          <h3>
            What <span style={{ color: "orange" }}>would you </span>like to
            Order?
          </h3>
        </span>
        <Button onClickNow={props.onClickNow} />
        <img src={image} alt="human" className={classes.images} />
      </div>
    </Fragment>
  );
};

export default Header;
