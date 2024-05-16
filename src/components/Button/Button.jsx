import PropTypes from "prop-types";
import classes from "./Button.module.css";
import typography from "../../typography.module.css";

Button.propTypes = {
  icon: PropTypes.any,
  onClick: PropTypes.any,
  children: PropTypes.string,
  isIconOnLeftSide: PropTypes.bool,
};

export function Button(props) {
  const { icon, children, onClick, isIconOnLeftSide = false } = props;

  return (
    <div
      className={classes.button}
      onClick={onClick}
      style={{
        flexDirection: isIconOnLeftSide ? "row-reverse" : "row",
        zIndex: 1,
      }}
    >
      <div className={typography.smallText500} style={{ zIndex: 1 }}>
        {children}
      </div>
      {icon && (
        <img
          src={icon}
          style={{ zIndex: 1 }}
          alt="cta-icon"
          width="24"
          height="24"
        />
      )}
    </div>
  );
}
