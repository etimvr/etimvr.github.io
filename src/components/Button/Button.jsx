import PropTypes from "prop-types";
import classes from "./Button.module.css";

Button.propTypes = {
  icon: PropTypes.any,
  onClick: PropTypes.any,
  children: PropTypes.string,
};

export function Button(props) {
  const { icon, children, onClick } = props;

  return (
    <div className={classes.button} onClick={onClick}>
      <div className={classes.text} style={{ zIndex: 1 }}>
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
