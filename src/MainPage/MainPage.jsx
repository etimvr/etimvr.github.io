import { Content } from "./Content/Content.jsx";
import { AboutMe } from "./AboutMe/AboutMe.jsx";
import { Header } from "./Header/Header.jsx";
import { Footer } from "./Footer/Footer.jsx";
import { colors } from "../colors.js";
import { Wave } from "../components/Wave/Wave.jsx";

export function MainPage() {
  return (
    <>
      <Header color={colors.greenCucumber} />
      <Content />
      <Wave
        waveColor={colors.greenCucumber}
        backgroundColor={colors.whiteIvory}
        isRevert
      />
      <AboutMe />
      <Wave
        waveColor={colors.greenCucumber}
        backgroundColor={colors.whiteIvory}
      />
      <Footer color={colors.greenCucumber} />
    </>
  );
}
