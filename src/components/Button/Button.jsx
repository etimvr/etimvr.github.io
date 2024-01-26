import PropTypes from 'prop-types';
import classes from './Button.module.css';

Button.propTypes = {
    icon: PropTypes.any,
    children: PropTypes.string,
};

export function Button(props) {

    const {icon, children} = props;

    return (
        <div className={classes.button}>
            <div className={classes.text}>{children}</div>
            {icon && <img src={icon} alt="cta-icon" width="24" height="24"/>}
        </div>
    )
}

