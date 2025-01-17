import classes from "../Footer/Footer.module.css";
import typography from "../../typography.module.css";
import flower from "../../assets/footer/footer-flower.svg";
import PropTypes from "prop-types";

Footer.propTypes = {
  color: PropTypes.string,
};

export function Footer(props) {
  const { color } = props;
  return (
    <>
      <div style={{ backgroundColor: color }}>
        <div className={classes.inner}>
          <div className={classes.flower}>
            <img src={flower} alt="footer-flower" />
          </div>
          <div className={typography.hugeText} style={{ position: "relative" }}>
            Get in Touch
          </div>
          <div style={{ marginBottom: 48 }} />
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: 100 }}>
              <div className={typography.tiny}>Email</div>
              <div style={{ marginBottom: 16 }} />
              <div
                className={typography.bigText}
                style={{
                  textDecoration: "underline",
                  textDecorationSkipInk: "none",
                }}
              >
                <a
                  href="mailto:sandraovershv@gmail.com"
                  style={{ color: "black" }}
                >
                  sandraovershv@gmail.com
                </a>
              </div>
            </div>
            <div>
              <div className={typography.tiny}>LinkedIn</div>
              <div style={{ marginBottom: 16 }} />
              <div
                className={typography.bigText}
                style={{
                  textDecoration: "underline",
                  textDecorationSkipInk: "none",
                }}
              >
                <a
                  href="https://www.linkedin.com/in/alexandra-shvetsova-20822a221/"
                  style={{ color: "black" }}
                >
                  Aleksandra Shvetsova
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
