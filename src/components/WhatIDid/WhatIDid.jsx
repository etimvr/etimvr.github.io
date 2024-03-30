import PropTypes from "prop-types";
import classes from "./WhatIDid.module.css";

WhatIDid.propTypes = {
  text: PropTypes.any,
  color: PropTypes.string,
};

export function WhatIDid(props) {
  const { text, color } = props;

  return (
    <div className={classes.box} style={{ backgroundColor: color }}>
      <div className={classes.text3}>What I did?</div>
      <div className={classes.text2}>{text}</div>
    </div>
  );
}
