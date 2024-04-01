import classes from "../../Cases/Esti/Esti.module.css";
import typography from "../../typography.module.css";
import intro from "../../assets/esti/intro.png";
import whatWeDidFirst from "../../assets/esti/what-we-did-first.png";
import sketches from "../../assets/esti/sketches.png";
import research from "../../assets/esti/research.png";
import jackie from "../../assets/esti/jackie.png";
import lauren from "../../assets/esti/lauren.png";
import massiel from "../../assets/esti/massiel.png";
import chart1 from "../../assets/esti/chart1.png";
import chart2 from "../../assets/esti/chart2.png";
import screen1 from "../../assets/esti/screen1.png";
import screen2 from "../../assets/esti/screen2.png";
import screen3 from "../../assets/esti/screen3.png";
import screen4 from "../../assets/esti/screen4.png";
import screen5 from "../../assets/esti/screen5.png";
import summary from "../../assets/esti/summary.png";
import heart from "../../assets/esti/heart.svg";
import heart2 from "../../assets/esti/heart2.svg";
import heart3 from "../../assets/esti/heart3.svg";
import heart4 from "../../assets/esti/heart4.svg";
import heart5 from "../../assets/esti/heart5.svg";
import hearts from "../../assets/esti/hearts.svg";
import arrow from "../../assets/esti/arrow.svg";
import arrow2 from "../../assets/esti/arrow2.svg";
import arrow3 from "../../assets/esti/arrow3.svg";
import stars from "../../assets/esti/stars.svg";
import star from "../../assets/esti/star.svg";
import star2 from "../../assets/esti/star2.svg";
import bulletStar from "../../assets/common/bullet-star.svg";
import before1 from "../../assets/esti/before1.png";
import before2 from "../../assets/esti/before2.png";
import videoOgg from "../../assets/esti/esti-video.ogg";
import videoMp4 from "../../assets/esti/esti-video.mp4";
import videoWebm from "../../assets/esti/esti-video.webm";
import weirdThing from "../../assets/esti/weird-thing.svg";
import { Button } from "../../components/Button/Button.jsx";
import arrowUp from "../../assets/common/arrow-up.svg";
import { Header } from "../../MainPage/Header/Header.jsx";
import { Footer } from "../../MainPage/Footer/Footer.jsx";
import { colors } from "../../colors.js";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes.js";
import images from "./images.jsx";
import { Wave } from "../../components/Wave/Wave.jsx";
import { ProjectInfo } from "../../components/ProjectInfo/ProjectInfo.jsx";
import { WhatIDid } from "../../components/WhatIDid/WhatIDid.jsx";

export function Esti() {
  const navigate = useNavigate();

  return (
    <>
      <Header color={colors.whiteIvory} />
      <div className={classes.page}>
        <div className={classes.inner}>
          <div
            style={{
              position: "absolute",
              marginLeft: "1270px",
              marginTop: "-10px",
            }}
          >
            <img src={stars} alt="stars" />
          </div>
          <div
            className={typography.caseTitle}
            style={{ zIndex: 2, position: "relative" }}
          >
            Esti: Aesthetic Photo Editor
          </div>
          <div style={{ marginBottom: 12 }} />
          <div
            className={typography.normalText400}
            style={{ textAlign: "center" }}
          >
            The perfect content creator toolkit: an app with consistent vibes in
            mind.
          </div>
          <div style={{ marginBottom: 32 }} />
          <div>
            <img src={intro} alt="intro" width={1420} />
          </div>
          <div style={{ marginBottom: 79 }} />
          <ProjectInfo
            role={"Senior Product Designer"}
            platform={"iOS / Web"}
            team={[
              "1 Designer",
              "5 Engineers",
              "2 Product Managers",
              "2 Product Analysts",
              "2 UX Researchers",
            ]}
          />
          <div style={{ marginBottom: 100 }} />
          <WhatIDid
            color={colors.greenRock}
            text={
              <>
                On this project I worked as a product designer, handling various
                tasks including UX & UI design, prototyping, user interviewing,
                research and usability testing. This role demanded adaptability
                as I explored different aspects of product development.
                <br />
                <br />I collaborated with founders, product managers, marketing
                team, research team, development and analytics team.
              </>
            }
          />
          <div style={{ marginBottom: 100 }} />
          <div
            style={{
              position: "absolute",
              marginLeft: "475px",
              marginTop: "-40px",
            }}
          >
            <img src={heart} alt="heart" />
          </div>
          <div
            className={typography.title}
            style={{ zIndex: 2, position: "relative" }}
          >
            Quick look at Esti
          </div>
          <div style={{ marginBottom: 64 }} />
          <div className={classes.outer}>
            <div className={classes.carousel}>
              {images.map((image, index) => (
                <img
                  src={image}
                  key={index}
                  className={classes.image}
                  alt={`Carousel ${index}`}
                ></img>
              ))}
              {/*duplicate is needed for smooth transition, more context in @keyframes bannermove*/}
              {images.map((image, index) => (
                <img
                  src={image}
                  key={images.length + index}
                  className={classes.image}
                  alt={`Carousel ${index}`}
                ></img>
              ))}
            </div>
          </div>
          <div style={{ marginBottom: 100 }} />
          <div
            style={{
              position: "absolute",
              marginLeft: "-40px",
              marginTop: "45px",
            }}
          >
            <img src={star} alt="star" />
          </div>
          <div
            className={typography.title}
            style={{ maxWidth: 1274, zIndex: 2, position: "relative" }}
          >
            One of the most challenging and innovative projects for Esti was
            Planner
          </div>
          <div style={{ marginBottom: 42 }} />
          <div className={classes.columns}>
            <div style={{ width: "700px" }}>
              <div className={typography.bigText}>Problems</div>
              <div style={{ marginBottom: 32 }} />
              <div className={typography.normalText400}>
                After thorough market research and with some feedback from users
                I pinpointed a user need that Esti could solve: our users are
                micro and macro influencers and they more often than not plan
                their posts.
              </div>
            </div>
            <div style={{ width: "700px" }}>
              <div
                style={{
                  position: "absolute",
                  marginLeft: "60px",
                  marginTop: "-20px",
                }}
              >
                <img src={star2} alt="star2" />
              </div>
              <div
                className={typography.bigText}
                style={{ zIndex: 2, position: "relative" }}
              >
                Goals
              </div>
              <div style={{ marginBottom: 32 }} />
              <div className={typography.normalText400}>
                Provide our users with an easy-to-use handy tool for planning
                social media posts. In the long run this feature should raise
                app's retention which will indirectly affect the revenue.
              </div>
            </div>
          </div>
          <div style={{ marginBottom: 100 }} />
          <div className={typography.title}>What we did first?</div>
          <div style={{ marginBottom: 32 }} />
          <div className={typography.normalText400}>
            In order to validate our decisions and create a truly high-quality
            feature, we decided to start by analyzing competitors on the same
            field.
          </div>
          <div style={{ marginBottom: 42 }} />
          <div style={{ marginLeft: "-35px" }}>
            <img src={whatWeDidFirst} width={1473} alt="what-we-did-first" />
          </div>
          <div style={{ marginBottom: 100 }} />
          <div className={typography.title}>Insight from product analyst</div>
          <div style={{ marginBottom: 32 }} />
          <div className={typography.normalText400}>
            Product Analytic and I looked for the data on CRs to export and to
            sharing to different social media platforms from our app. A short
            analysis showed that Esti users share their edits on social media
            pretty often. This insight worked as a validation for our new
            feature.
          </div>
          <div style={{ marginBottom: 100 }} />
          <div
            style={{
              position: "absolute",
              marginLeft: "-30px",
              marginTop: "-10px",
            }}
          >
            <img src={weirdThing} alt="weird-thing" />
          </div>
          <div
            className={typography.title}
            style={{ zIndex: 2, position: "relative" }}
          >
            Some simple sketches...
          </div>
          <div style={{ marginBottom: 32 }} />
          <div className={typography.normalText400}>
            After conducting research, I decided to try sketching a few simple
            drafts of the future feature. Visualizing in sketch format helps to
            break away from the constraints of the familiar design system and
            think out of the box. In the end, I chose the most promising concept
            and began to design it in detail.
          </div>
          <div style={{ marginBottom: 42 }} />
          <div>
            <img src={sketches} width={1420} alt="sketches" />
          </div>
          <div style={{ marginBottom: 100 }} />
          <div className={typography.title}>Research</div>
          <div style={{ marginBottom: 42 }} />
          <div className={classes.columns}>
            <div className={classes.item}>
              <div className={classes.box}>
                <div className={typography.normalText400}>
                  We conducted 5 user interviews, which allowed us to test our
                  hypotheses and validate solutions.
                  <br />
                  <br />
                  Additionally, besides the planner feature, we tested the
                  onboarding and main screen and discovered new insights.
                </div>
              </div>
            </div>
            <div className={classes.item}>
              <div className={classes.box}>
                <div className={typography.normalText400}>
                  To ensure higher quality results from the interviews, I
                  created prototypes.
                  <br />
                  <br />
                  At each stage of the interview, we asked questions and
                  inquired about the user's feelings to better understand their
                  experience.
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              left: "0",
              right: "0",
              textAlign: "center",
              marginTop: "-85px",
            }}
          >
            <img src={arrow} alt="arrow" />
          </div>
          <div style={{ marginBottom: 64 }} />
          <div style={{ textAlign: "center" }}>
            <img src={research} alt="research" />
          </div>
          <div style={{ marginBottom: 16 }} />
          <div className={typography.italic}>
            Why only 5 people? We used{" "}
            <a
              href="https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/"
              style={{ color: "black" }}
            >
              NNG approach
            </a>{" "}
            with conducting only 5 interviews.
          </div>
          <div style={{ marginBottom: 100 }} />
          <div className={typography.title}>Shortlist of the questions</div>
          <div
            style={{
              position: "absolute",
              marginLeft: "1125px",
              marginTop: "-40px",
            }}
          >
            <img src={arrow2} alt="arrow2" />
          </div>
          <div style={{ marginBottom: 42 }} />
          <div className={classes.shortlist}>
            <div style={{ display: "flex", gap: "16px" }}>
              <img src={bulletStar} height={24} alt="star" />
              <div className={typography.normalText400} style={{ width: 1037 }}>
                What are your thoughts on having a planner features in the photo
                editor?
              </div>
            </div>
            <div style={{ display: "flex", gap: "16px" }}>
              <img src={bulletStar} height={24} alt="star" />
              <div className={typography.normalText400} style={{ width: 1037 }}>
                Do you understand how to use it?
              </div>
            </div>
            <div style={{ display: "flex", gap: "16px" }}>
              <img src={bulletStar} height={24} alt="star" />
              <div className={typography.normalText400} style={{ width: 1037 }}>
                Do you recognize what the calendar icon represents?
              </div>
            </div>
            <div style={{ display: "flex", gap: "16px" }}>
              <img src={bulletStar} height={24} alt="star" />
              <div className={typography.normalText400} style={{ width: 1037 }}>
                Do you understand the preview of the photo on the date in the
                calendar?
              </div>
            </div>
            <div style={{ display: "flex", gap: "16px" }}>
              <img src={bulletStar} height={24} alt="star" />
              <div className={typography.normalText400}>
                Do you understand when the photo was posted to the Instagram?
              </div>
            </div>
          </div>
          <div style={{ marginBottom: 64 }} />
          <div
            style={{
              position: "absolute",
              marginLeft: "527px",
              marginTop: "-10px",
            }}
          >
            <img src={heart2} alt="heart2" />
          </div>
          <div
            className={typography.bigText}
            style={{ textAlign: "center", zIndex: 2, position: "relative" }}
          >
            Esti user personas
          </div>
          <div style={{ marginBottom: 42 }} />
          <div className={classes.shortlist}>
            <div className={classes.personaBox}>
              <div>
                <img src={jackie} alt="jackie" />
              </div>
              <div>
                <div className={typography.bigText}>
                  Jackie, 35 y.o., Austin, CA, USA
                </div>
                <div style={{ marginBottom: 24 }} />
                <div
                  className={typography.normalText500}
                  style={{ display: "flex" }}
                >
                  Degree:
                  <div style={{ fontWeight: 400, marginLeft: 12 }}>
                    MSc in Business Administration
                  </div>
                </div>
                <div style={{ marginBottom: 16 }} />
                <div
                  className={typography.normalText500}
                  style={{ display: "flex" }}
                >
                  Socials:
                  <div style={{ fontWeight: 400, marginLeft: 12 }}>
                    Instagram, Facebook, TikTok rarely
                  </div>
                </div>
                <div style={{ marginBottom: 24 }} />
                <div className={typography.normalText500}>
                  Experience in Editing:
                </div>
                <div style={{ marginBottom: 16 }} />
                <div className={typography.normalText400}>
                  Lightroom (buy presets on Etsy to make IG page look in a
                  certain way), Facetune (only when I don’t look cute),
                  Videoleap (all Reels), Vixer (fonts), Lapse (vintage looks).
                </div>
              </div>
            </div>
            <div className={classes.personaBox}>
              <div>
                <img src={lauren} alt="lauren" />
              </div>
              <div>
                <div className={typography.bigText}>
                  Lauren, 29 y.o., Los Angeles, CA, USA
                </div>
                <div style={{ marginBottom: 24 }} />
                <div
                  className={typography.normalText500}
                  style={{ display: "flex" }}
                >
                  Degree:
                  <div style={{ fontWeight: 400, marginLeft: 12 }}>
                    Berkeley, Digital Media
                  </div>
                </div>
                <div style={{ marginBottom: 16 }} />
                <div
                  className={typography.normalText500}
                  style={{ display: "flex" }}
                >
                  Socials:
                  <div style={{ fontWeight: 400, marginLeft: 12 }}>
                    Instagram, Facebook, Lemon8 recently
                  </div>
                </div>
                <div style={{ marginBottom: 24 }} />
                <div className={typography.normalText500}>
                  Experience in Editing:
                </div>
                <div style={{ marginBottom: 16 }} />
                <div className={typography.normalText400}>
                  VSCO (almost same concept as Esti, but I like Esti more, cuz
                  of Retro looks), Lightroom Presets (cuz my photographers
                  friends use it).
                </div>
              </div>
            </div>
            <div className={classes.personaBox}>
              <div>
                <img src={massiel} alt="massiel" />
              </div>
              <div>
                <div className={typography.bigText}>
                  Massiel, 30 y.o., San Francisco, CA, USA
                </div>
                <div style={{ marginBottom: 24 }} />
                <div
                  className={typography.normalText500}
                  style={{ display: "flex" }}
                >
                  Degree:
                  <div style={{ fontWeight: 400, marginLeft: 12 }}>
                    Tradional Chinese Medicine student
                  </div>
                </div>
                <div style={{ marginBottom: 16 }} />
                <div
                  className={typography.normalText500}
                  style={{ display: "flex" }}
                >
                  Socials:
                  <div style={{ fontWeight: 400, marginLeft: 12 }}>
                    Instagram, TikTok
                  </div>
                </div>
                <div style={{ marginBottom: 24 }} />
                <div className={typography.normalText500}>
                  Experience in Editing:
                </div>
                <div style={{ marginBottom: 16 }} />
                <div className={typography.normalText400}>
                  I never feel I have one app I can commit. I usually move from
                  one to other. Videoleap - most consistent.
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginBottom: 64 }} />
          <div className={typography.bigText} style={{ textAlign: "center" }}>
            Here you can see some stats from the interviews
          </div>
          <div
            style={{
              position: "absolute",
              marginLeft: "1175px",
              marginTop: "-15px",
            }}
          >
            <img src={arrow3} alt="arrow3" />
          </div>
          <div style={{ marginBottom: 42 }} />
          <div style={{ textAlign: "center" }}>
            <img src={chart1} alt="chart1" />
          </div>
          <div style={{ marginBottom: 16 }} />
          <div className={typography.italic}>
            Based on this chart, around 80% of users are interested in the
            planner.
          </div>
          <div style={{ marginBottom: 42 }} />
          <div style={{ textAlign: "center" }}>
            <img src={chart2} alt="chart2" />
          </div>
          <div style={{ marginBottom: 16 }} />
          <div className={typography.italic}>
            Roughly half of the users struggle to understand the current UX of
            the planner.
          </div>
          <div style={{ marginBottom: 64 }} />
          <div
            className={typography.bigText}
            style={{ textAlign: "center", zIndex: 2, position: "relative" }}
          >
            Summary
          </div>
          <div
            style={{
              position: "absolute",
              marginLeft: "753px",
              marginTop: "-55px",
            }}
          >
            <img src={heart3} alt="heart3" />
          </div>
          <div style={{ marginBottom: 42 }} />
          <div>
            <img src={summary} alt="summary" />
          </div>
          <div style={{ marginBottom: 64 }} />
          <div className={typography.bigText} style={{ textAlign: "center" }}>
            A few other insights...
          </div>
          <div style={{ marginBottom: 42 }} />
          <div
            className={classes.columns}
            style={{ gap: 20, flexWrap: "wrap" }}
          >
            <div
              className={classes.box2}
              style={{
                textAlign: "center",
                backgroundColor: colors.greenOlivine,
              }}
            >
              <div
                className={typography.bigText}
                style={{ textAlign: "center", color: colors.white }}
              >
                2/5
              </div>
              <div style={{ marginBottom: 16 }} />
              <div
                className={typography.normalText400}
                style={{ color: colors.white }}
              >
                Onboarding videos were too vague...
              </div>
            </div>
            <div
              className={classes.box2}
              style={{
                textAlign: "center",
                backgroundColor: colors.greenRock,
              }}
            >
              <div
                className={typography.bigText}
                style={{ textAlign: "center" }}
              >
                2/5
              </div>
              <div style={{ marginBottom: 16 }} />
              <div className={typography.normalText400}>
                I don't understand an icon in the app's library.
              </div>
            </div>
            <div
              className={classes.box2}
              style={{
                textAlign: "center",
                backgroundColor: colors.greenOlivine,
              }}
            >
              <div
                className={typography.bigText}
                style={{ textAlign: "center", color: colors.white }}
              >
                5/5
              </div>
              <div style={{ marginBottom: 16 }} />
              <div
                className={typography.normalText400}
                style={{ color: colors.white }}
              >
                I wish I knew about batch editing feature sooner!
              </div>
            </div>
          </div>
          <div style={{ marginBottom: 64 }} />
          <div className={typography.bigText}>
            After conducting research, I focused on the following points:
          </div>
          <div style={{ marginBottom: 32 }} />
          <div className={classes.points}>
            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              <div className={typography.bigText}>1.</div>
              <div
                className={typography.normalText400}
                style={{ width: "1379px" }}
              >
                Improve the planner's UX. Conduct additional market research,
                taking into account the results of user interviews.
              </div>
            </div>
            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              <div className={typography.bigText}>2.</div>
              <div
                className={typography.normalText400}
                style={{ width: "1379px" }}
              >
                Refine the content on the onboarding screens, as we noticed
                issues among users during the interviews.
              </div>
            </div>
            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              <div className={typography.bigText}>3.</div>
              <div
                className={typography.normalText400}
                style={{ width: "1379px" }}
              >
                Change the zero state of the main screen, making it more
                aesthetically pleasing and selecting non-stock looking content.
              </div>
            </div>
          </div>
          <div style={{ marginBottom: 100 }} />
          <div
            className={typography.title}
            style={{ textAlign: "center", zIndex: 2, position: "relative" }}
          >
            Let’s start designing
          </div>
          <div
            style={{
              position: "absolute",
              marginLeft: "985px",
              marginTop: "-80px",
            }}
          >
            <img src={heart4} alt="heart4" />
          </div>
          <div style={{ marginBottom: 42 }} />
          <div className={typography.bigText} style={{ textAlign: "center" }}>
            Planner Zero Screen
          </div>
          <div style={{ marginBottom: 42 }} />
          <div>
            <img src={screen1} alt="screen1" width={1420} />
          </div>
          <div style={{ marginBottom: 64 }} />
          <div
            style={{
              position: "absolute",
              marginLeft: "782px",
              marginTop: "-8px",
            }}
          >
            <img src={heart5} alt="heart5" />
          </div>
          <div
            className={typography.bigText}
            style={{ textAlign: "center", zIndex: 2, position: "relative" }}
          >
            Entry Point
          </div>
          <div style={{ marginBottom: 42 }} />
          <div>
            <img src={screen2} alt="screen2" width={1420} />
          </div>
          <div style={{ marginBottom: 64 }} />
          <div className={typography.bigText} style={{ textAlign: "center" }}>
            Planner Screen
          </div>
          <div style={{ marginBottom: 42 }} />
          <div>
            <img src={screen3} alt="screen3" width={1420} />
          </div>
          <div style={{ marginBottom: 64 }} />
          <div className={typography.bigText} style={{ textAlign: "center" }}>
            Context Menu
          </div>
          <div style={{ marginBottom: 42 }} />
          <div>
            <img src={screen4} alt="screen4" width={1420} />
          </div>
          <div style={{ marginBottom: 64 }} />
          <div
            style={{
              position: "absolute",
              marginLeft: "772px",
              marginTop: "-25px",
            }}
          >
            <img src={bulletStar} alt="star" />
          </div>
          <div
            className={typography.bigText}
            style={{ textAlign: "center", zIndex: "2", position: "relative" }}
          >
            Quick Edit
          </div>
          <div style={{ marginBottom: 42 }} />
          <div>
            <img src={screen5} alt="screen5" width={1420} />
          </div>
          <div style={{ marginBottom: 64 }} />
          <div className={typography.bigText} style={{ textAlign: "center" }}>
            Redesigning Onboarding
          </div>
          <div style={{ marginBottom: 32 }} />
          <div
            className={typography.normalText400}
            style={{ textAlign: "center" }}
          >
            After the user interviews, we found out that the current onboarding
            was unclear to users. Therefore, I redesigned it to make the content
            simpler, more aesthetic, and understandable.
          </div>
          <div style={{ marginBottom: 64 }} />
          <div
            className={classes.columns}
            style={{ gap: 20, flexWrap: "wrap" }}
          >
            <div
              className={classes.box2}
              style={{
                textAlign: "center",
                backgroundColor: colors.greenOlivine,
              }}
            >
              <div
                className={typography.bigText}
                style={{ textAlign: "center", color: colors.white }}
              >
                2/5
              </div>
              <div style={{ marginBottom: 16 }} />
              <div
                className={typography.normalText400}
                style={{ color: colors.white }}
              >
                I didn't like the second onboarding screen. It has too much
                specific information, and the animation is very fast.
              </div>
            </div>
            <div
              className={classes.box2}
              style={{
                textAlign: "center",
                backgroundColor: colors.greenRock,
              }}
            >
              <div
                className={typography.bigText}
                style={{ textAlign: "center" }}
              >
                2/5
              </div>
              <div style={{ marginBottom: 16 }} />
              <div className={typography.normalText400}>
                I think the second onboarding screen shows B/A. I didn't notice
                that there are 4 variations of the photo.
              </div>
            </div>
            <div
              className={classes.box2}
              style={{
                textAlign: "center",
                backgroundColor: colors.greenOlivine,
              }}
            >
              <div
                className={typography.bigText}
                style={{ textAlign: "center", color: colors.white }}
              >
                5/5
              </div>
              <div style={{ marginBottom: 16 }} />
              <div
                className={typography.normalText400}
                style={{ color: colors.white }}
              >
                It took me about a minute to understand the meaning of the third
                onboarding screen.
              </div>
            </div>
            <div
              className={classes.box2}
              style={{
                textAlign: "center",
                backgroundColor: colors.greenRock,
              }}
            >
              <div
                className={typography.bigText}
                style={{ textAlign: "center" }}
              >
                2/5
              </div>
              <div style={{ marginBottom: 16 }} />
              <div className={typography.normalText400}>
                I thought the third onboarding screen was not only about
                Copy/Paste presets but also about planning the IG grid.
              </div>
            </div>
            <div
              className={classes.box2}
              style={{
                textAlign: "center",
                backgroundColor: colors.greenOlivine,
              }}
            >
              <div
                className={typography.bigText}
                style={{ textAlign: "center", color: colors.white }}
              >
                2/5
              </div>
              <div style={{ marginBottom: 16 }} />
              <div
                className={typography.normalText400}
                style={{ color: colors.white }}
              >
                I didn't like the image after opening the application; it looks
                like a stock photo compared to the previous ones.
              </div>
            </div>
            <div
              className={classes.box2}
              style={{
                textAlign: "center",
                backgroundColor: colors.greenRock,
              }}
            >
              <div
                className={typography.bigText}
                style={{ textAlign: "center" }}
              >
                1/5
              </div>
              <div style={{ marginBottom: 16 }} />
              <div className={typography.normalText400}>
                On the third onboarding screen, make it 6 photos instead of 5;
                the empty space is a bit annoying.
              </div>
            </div>
          </div>
          <div style={{ marginBottom: 64 }} />
          <div
            className={classes.videoBox}
            style={{
              textAlign: "center",
              backgroundColor: colors.greenRock,
            }}
          >
            <div
              style={{
                display: "flex",
                alignSelf: "center",
                flexDirection: "column",
              }}
            >
              <div>
                <img src={before1} width={260} height={563} alt="before1" />
              </div>
              <div style={{ marginBottom: 16 }} />
              <div className={typography.italic}>Before</div>
            </div>
            <div
              style={{
                display: "flex",
                alignSelf: "center",
                flexDirection: "column",
              }}
            >
              <video
                width="300"
                controls
                loop
                autoPlay={true}
                style={{ borderRadius: "8px", border: "1px solid" }}
              >
                <source src={videoMp4} type="video/mp4" />
                <source src={videoWebm} type="video/webm" />
                <source src={videoOgg} type="video/ogg" />
              </video>
              <div style={{ marginBottom: 16 }} />
              <div className={typography.italic}>After</div>
              <div
                style={{
                  position: "absolute",
                  marginLeft: "250px",
                  marginTop: "600px",
                }}
              >
                <img src={hearts} alt="hearts" />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignSelf: "center",
                flexDirection: "column",
              }}
            >
              <div>
                <img src={before2} width={260} height={563} alt="before2" />
              </div>
              <div style={{ marginBottom: 16 }} />
              <div className={typography.italic}>Before</div>
            </div>
          </div>
          <div style={{ marginBottom: 100 }} />
          <div style={{ justifyContent: "center", display: "flex" }}>
            <Button
              icon={arrowUp}
              onClick={() => {
                navigate(routes.prequel);
                window.scrollTo(0, 0);
              }}
            >
              NEXT CASE
            </Button>
          </div>
          <div style={{ marginBottom: 130 }} />
        </div>
      </div>
      <Wave
        waveColor={colors.greenOlivine}
        backgroundColor={colors.whiteIvory}
      />
      <Footer color={colors.greenOlivine} />
    </>
  );
}
