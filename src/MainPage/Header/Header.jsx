import classes from './Header.module.css';
import {Button} from "../../components/Button/Button.jsx";
import {scrollToId} from "../../helpers.js";
import cv from "../../assets/cv.pdf"
import PropTypes from "prop-types";
import {useNavigate} from "react-router-dom";
import {routes} from "../../routes.js";

Header.propTypes = {
    color: PropTypes.string,
};

export function Header(props) {
    const navigate = useNavigate();
    const {color} = props;
    return (
        <div className={classes.header} style={{backgroundColor: color}} id="header">
            <div className={classes.appbar}>
                <div className={classes.text}>ALEKSANDRA S.</div>
                <div className={classes.rightSide}>
                    <div className={classes.clickableText} onClick={async () => {
                        await navigate(routes.main);
                        scrollToId('my-work');
                    }}>MY WORK
                    </div>
                    <div className={classes.clickableText} onClick={async () => {
                        await navigate(routes.main);
                        scrollToId('about-me')
                    }}>ABOUT
                    </div>
                    <div className={classes.clickableText}><a href={cv} target="_blank" rel="noreferrer" style={{
                        color: "black",
                        textDecoration: "none"
                    }}>RESUME</a></div>
                    <Button>CONTACT ME</Button>
                </div>
            </div>
        </div>
    )
}

