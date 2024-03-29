import { Content } from "./Content/Content.jsx";
import { AboutMe } from "./AboutMe/AboutMe.jsx";
import { Header } from "./Header/Header.jsx";
import { Footer } from "./Footer/Footer.jsx";
import { colors } from "../colors.js";
import classes from "./MainPage.module.css";

export function MainPage() {
  return (
    <>
      <Header color={colors.darkGreen} />
      <Content />
      <div className={classes.wave} />
      <AboutMe />
      <div className={classes.wave} style={{ transform: "rotate(180deg)" }} />
      <Footer color={colors.darkGreen} />
    </>
  );
}
