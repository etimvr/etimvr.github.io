import classes from "./Content.module.css";
import typography from "../../typography.module.css";
import cloud from "../../assets/main/cloud.svg";
import flowers from "../../assets/main/flowers.svg";
import hearts from "../../assets/main/hearts.svg";
import product from "../../assets/main/product.svg";
import star from "../../assets/main/star.svg";
import arrowUp from "../../assets/common/arrow-up.svg";
import smile from "../../assets/main/smile.svg";
import { Button } from "../../components/Button/Button.jsx";
import { scrollToId } from "../../helpers.js";

export function Content() {
  return (
    <div className={classes.mainPage}>
      <div className={classes.inner}>
        <div className={classes.cloud}>
          <img src={cloud} alt="cloud" />
        </div>
        <div className={classes.flowers}>
          <img src={flowers} alt="flowers" />
        </div>
        <div className={classes.hearts}>
          <img src={hearts} alt="hearts" />
        </div>
        <div className={classes.product}>
          <img src={product} alt="product" />
        </div>
        <div className={classes.star}>
          <img src={star} alt="star" />
        </div>
        <div className={typography.smallText400}>from 2019 to ∞</div>
        <div style={{ marginBottom: 12 }} />
        <div className={typography.hugeText} style={{ position: "relative" }}>
          CURIOUS DESIGNER, STORYTELLER, DIGITAL CREATOR
        </div>
        <div style={{ marginBottom: 24 }} />
        <div
          className={typography.normalText400}
          style={{ position: "relative" }}
        >
          <div>
            blending tech, art and community, my focus goes beyond beautiful
            interfaces.
          </div>
          <div>
            I craft inclusive, human-centred experiences, all tailored to your
            company’s needs.
          </div>
        </div>
        <div style={{ marginBottom: 44 }} />
        <div className={classes.buttons}>
          <Button
            icon={arrowUp}
            onClick={() => {
              scrollToId("my-work");
            }}
          >
            MY WORK
          </Button>
          <Button
            icon={smile}
            onClick={async () => {
              scrollToId("contacts");
            }}
          >
            CONTACT ME
          </Button>
        </div>
      </div>
    </div>
  );
}
