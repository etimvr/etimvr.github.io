import PropTypes from "prop-types";
import classes from "./WhatIDid.module.css";
import typography from "../../typography.module.css";

WhatIDid.propTypes = {
  text: PropTypes.any,
  color: PropTypes.string,
};

export function WhatIDid(props) {
  const { text, color } = props;

  return (
    <div className={classes.box} style={{ backgroundColor: color }}>
      <div className={typography.title}>What I did?</div>
      <div className={typography.normalText400}>{text}</div>
    </div>
  );
}
