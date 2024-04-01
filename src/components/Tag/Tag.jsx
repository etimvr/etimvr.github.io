import PropTypes from "prop-types";
import classes from "./Tag.module.css";
import typography from "../../typography.module.css";

Tag.propTypes = {
  children: PropTypes.string,
};

export function Tag(props) {
  const { children } = props;

  return (
    <div className={classes.tag}>
      <div className={typography.smallText400}>{children}</div>
    </div>
  );
}
