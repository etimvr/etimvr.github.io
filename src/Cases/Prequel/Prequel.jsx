import classes from "./Prequel.module.css";
import { Header } from "../../MainPage/Header/Header.jsx";
import { Footer } from "../../MainPage/Footer/Footer.jsx";
import { colors } from "../../colors.js";
import { Wave } from "../../components/Wave/Wave.jsx";
import intro from "../../assets/prequel/intro.png";
import inspiration from "../../assets/prequel/inspiration.png";
import sketches from "../../assets/prequel/sketches.png";
import chart from "../../assets/prequel/chart.png";
import stats1 from "../../assets/prequel/stats1.png";
import stats2 from "../../assets/prequel/stats2.png";
import stats3 from "../../assets/prequel/stats3.png";
import { ProjectInfo } from "../../components/ProjectInfo/ProjectInfo.jsx";
import { WhatIDid } from "../../components/WhatIDid/WhatIDid.jsx";
import bulletStar from "../../assets/common/bullet-star.svg";
import bulletStarBlue from "../../assets/common/bullet-star-blue.svg";
import jackie from "../../assets/esti/jackie.png";
import summary from "../../assets/prequel/summary.png";
import screen1 from "../../assets/prequel/screen1.png";
import screen2 from "../../assets/prequel/screen2.png";
import screen3 from "../../assets/prequel/screen3.png";
import screen4 from "../../assets/prequel/screen4.png";
import screen5 from "../../assets/prequel/screen5.png";
import screen6 from "../../assets/prequel/screen6.png";
import screen7 from "../../assets/prequel/screen7.png";
import arrow from "../../assets/prequel/arrow.svg";
import { Button } from "../../components/Button/Button.jsx";
import arrowUp from "../../assets/common/arrow-up.svg";
import arrowUpLeft from "../../assets/common/arrow-up-left.svg";
import { routes } from "../../routes.js";
import { useNavigate } from "react-router-dom";

export function Prequel() {
  const navigate = useNavigate();
  return (
    <>
      <Header color={colors.whiteIvory} />

      <div className={classes.page}>
        <div className={classes.inner}>
          <div
            className={classes.text1}
            style={{ zIndex: 2, position: "relative" }}
          >
            Prequel: Photo & Video Editor
          </div>
          <div style={{ marginBottom: 12 }} />
          <div className={classes.text2} style={{ textAlign: "center" }}>
            Photo and video editing app with an easy-to-use creative toolkit,
            aesthetic effects and filters.
          </div>
          <div style={{ marginBottom: 32 }} />
          <div>
            <img src={intro} alt="intro" width={1420} />
          </div>
          <div style={{ marginBottom: 79 }} />
          <ProjectInfo
            role={"Senior Product Designer"}
            platform={"iOS / Android / Web"}
            team={[
              "2 Designers",
              "25 Engineers",
              "4 Product Managers",
              "2 Product Analysts",
              "3 UX Researchers",
            ]}
          />
          <div style={{ marginBottom: 100 }} />
          <WhatIDid
            color={colors.bluePattens}
            text={
              <>
                On this product I worked as a product designer, handling various
                tasks including UX & UI design, design system, prototyping, user
                interviewing, research and usability testing. This role demanded
                adaptability as I explored different aspects of product
                development. <br /> <br />I collaborated with founders, product
                managers, marketing team, research team, development and
                analytics team.
              </>
            }
          />
          <div style={{ marginBottom: 100 }} />
          <div
            className={classes.text3}
            style={{ zIndex: 2, position: "relative", textAlign: "center" }}
          >
            A bit of inspiration from Prequel
          </div>
          <div style={{ marginBottom: 42 }} />
          <div>
            <img src={inspiration} alt="inspiration" width={1420} />
          </div>
          <div style={{ marginBottom: 100 }} />
          <div
            className={classes.text3}
            style={{ zIndex: 2, position: "relative", textAlign: "center" }}
          >
            Multislider was one of Prequel's highly demanded and innovative
            projects
          </div>
          <div style={{ marginBottom: 42 }} />
          <div className={classes.text2}>
            There's a large library of adjustments in Prequel now. The app
            offers a huge toolkit that allows users to make any edit imaginable.
            Adjustment tools are used for manual light and color correction. In
            Prequel Adjusts tab is in the top 3 used tools by project created in
            the app. These tools affect apps retention and marketability.
            Admittedly, you can't imagine a photo editing app without such basic
            tools as contrast and exposure correction.
          </div>
          <div style={{ marginBottom: 64 }} />

          <div className={classes.columns}>
            <div style={{ width: "700px" }}>
              <div className={classes.text3}>Problems</div>
              <div style={{ marginBottom: 32 }} />
              <div className={classes.text2}>
                Prequel's collection of adjustment tools has been steadily
                growing over the years. There are some basic tools as contrast
                and there are some unique once as vintage and aberration. Soon
                it was apparent that the app needs a proper navigation between
                all these tools.
              </div>
            </div>
            <div style={{ width: "700px" }}>
              <div className={classes.text3}>Goals</div>
              <div style={{ marginBottom: 32 }} />
              <div className={classes.text2}>
                Improve navigation within the adjustment tools to create a
                convenient, cutting-edge tool for flexible and fast editing
                process. Increase conversion into project exports with adjust
                applied.
              </div>
            </div>
          </div>
          <div style={{ marginBottom: 64 }} />
          <div
            className={classes.text3}
            style={{ zIndex: 2, position: "relative" }}
          >
            Hypotheses
          </div>
          <div style={{ marginBottom: 32 }} />
          <div className={classes.points}>
            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              <div className={classes.text7}>1.</div>
              <div className={classes.text2} style={{ width: "1379px" }}>
                Users that edit photos often and rely on manual tweaking of
                images want to have simultaneous access to several complimentary
                tools to streamline their editing process.
              </div>
            </div>
            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              <div className={classes.text7}>2.</div>
              <div className={classes.text2} style={{ width: "1379px" }}>
                Many Prequel's competitors have multislider with adjustments. It
                was important to offer similar user experience.
              </div>
            </div>
          </div>
          <div style={{ marginBottom: 100 }} />
          <div
            className={classes.text3}
            style={{ zIndex: 2, position: "relative" }}
          >
            Challenge
          </div>
          <div style={{ marginBottom: 32 }} />
          <div className={classes.text2}>
            My main challenge was to design consistent interface and provide
            friendly user experience, improve navigation system, positioning of
            content within the edit and organize tool grouping.
          </div>
          <div style={{ marginBottom: 100 }} />
          <div
            className={classes.text3}
            style={{ zIndex: 2, position: "relative" }}
          >
            Some simple sketches...
          </div>
          <div style={{ marginBottom: 32 }} />
          <div className={classes.text2}>
            I've sketched several wireframe options by hand. This approach helps
            me to think more broadly and beyond the confines of the existing
            design system. After that, we discussed them with the product team
            and selected the one we would like to develop further in the second
            iteration.
          </div>
          <div style={{ marginBottom: 42 }} />
          <div style={{ textAlign: "center" }}>
            <img src={sketches} alt="sketches" width={900} height={857} />
          </div>
          <div style={{ marginBottom: 100 }} />
          <div className={classes.text3}>Research</div>
          <div style={{ marginBottom: 32 }} />
          <div className={classes.text2}>
            I had a complex task ahead of me, so I conducted several types of
            research that helped me to address the current issues.
          </div>
          <div style={{ marginBottom: 42 }} />
          <div className={classes.text6}>1. Tree Test</div>
          <div style={{ marginBottom: 32 }} />
          <div className={classes.text2}>
            The{" "}
            <a
              href="https://www.nngroup.com/articles/tree-testing/"
              style={{ color: "black" }}
            >
              tree test
            </a>{" "}
            helps answer the following questions:
          </div>
          <div style={{ marginBottom: 32 }} />
          <div className={classes.shortlist}>
            <div style={{ display: "flex", gap: "16px" }}>
              <img src={bulletStar} width={24} alt="star" />
              <div className={classes.text2}>
                Does the user understand how to navigate within the editor?
              </div>
            </div>
            <div style={{ display: "flex", gap: "16px" }}>
              <img src={bulletStar} width={24} alt="star" />
              <div className={classes.text2}>
                Does the user understand the logic behind categories and content
                grouping?
              </div>
            </div>
            <div style={{ display: "flex", gap: "16px" }}>
              <img src={bulletStar} width={24} alt="star" />
              <div className={classes.text2}>
                Find the information they need quickly?
              </div>
            </div>
          </div>
          <div style={{ marginBottom: 42 }} />
          <div>
            <img src={chart} alt="chart" />
          </div>
          <div style={{ marginBottom: 42 }} />
          <div className={classes.text6}>
            Tree Test analysis based on four criterias:
          </div>
          <div style={{ marginBottom: 32 }} />
          <div className={classes.points}>
            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              <div className={classes.text7}>1.</div>
              <div className={classes.text2}>
                Success rate - the percentage of tasks completed.
              </div>
            </div>
            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              <div className={classes.text7}>2.</div>
              <div className={classes.text2}>
                The percentage of users who followed the happy path.
              </div>
            </div>
            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              <div className={classes.text7}>3.</div>
              <div className={classes.text2}>t - time.</div>
            </div>
            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              <div className={classes.text7}>4.</div>
              <div className={classes.text2}>The user’s path:</div>
            </div>
            <div className={classes.text2} style={{ marginLeft: 42 }}>
              a. frequency;
            </div>
            <div className={classes.text2} style={{ marginLeft: 42 }}>
              b. first click;
            </div>
            <div className={classes.text2} style={{ marginLeft: 42 }}>
              c. response;
            </div>
          </div>
          <div style={{ marginBottom: 32 }} />
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <div className={classes.text7}>Important:</div>
            <div className={classes.text2}>
              task output = Σ of all criteria.
            </div>
          </div>
          <div style={{ marginBottom: 42 }} />
          <div className={classes.text6}>
            Here you can see some stats from the interviews
          </div>
          <div style={{ marginBottom: 42 }} />
          <div style={{ textAlign: "center" }}>
            <img src={stats1} alt="stats1" />
          </div>
          <div style={{ marginBottom: 16 }} />
          <div className={classes.text5}>
            Based on this chart, around 65% of users successfully completed the
            task.
          </div>
          <div style={{ marginBottom: 42 }} />
          <div className={classes.columns}>
            <div>
              <div style={{ textAlign: "center" }}>
                <img src={stats2} alt="stats2" />
              </div>
              <div style={{ marginBottom: 16 }} />
              <div className={classes.text5}>
                About 86% of users successfully completed the task.
              </div>
            </div>
            <div>
              <div style={{ textAlign: "center" }}>
                <img src={stats3} alt="stats3" />
              </div>
              <div style={{ marginBottom: 16 }} />
              <div className={classes.text5}>
                About 78% of users successfully completed the task.
              </div>
            </div>
          </div>
          <div style={{ marginBottom: 42 }} />
          <div className={classes.text6}>Summary</div>
          <div style={{ marginBottom: 32 }} />
          <div className={classes.shortlist}>
            <div style={{ display: "flex", gap: "16px" }}>
              <img src={bulletStarBlue} width={24} alt="star" />
              <div className={classes.text2}>
                More than 60% of users successfully completed all tasks.
              </div>
            </div>
            <div style={{ display: "flex", gap: "16px" }}>
              <img src={bulletStarBlue} width={24} alt="star" />
              <div className={classes.text2}>
                The average time to complete a task is 5 minutes.
              </div>
            </div>
            <div style={{ display: "flex", gap: "16px" }}>
              <img src={bulletStarBlue} width={24} alt="star" />
              <div className={classes.text2}>
                The user is willing to search for the required tool for up to 15
                seconds.
              </div>
            </div>
            <div style={{ display: "flex", gap: "16px" }}>
              <img src={bulletStarBlue} width={24} alt="star" />
              <div className={classes.text2}>
                The user gets confused between color, light, and luminosity.
              </div>
            </div>
          </div>
          <div style={{ marginBottom: 42 }} />
          <div className={classes.text6}>2. Quantitative research</div>
          <div style={{ marginBottom: 42 }} />
          <div className={classes.text6}>Prequel user personas</div>
          <div style={{ marginBottom: 42 }} />
          <div className={classes.personaBox}>
            <div>
              <img src={jackie} alt="jackie" />
            </div>
            <div>
              <div className={classes.text2}>Age:</div>
              <div style={{ marginBottom: 16 }} />
              <div className={classes.text2} style={{ fontWeight: 400 }}>
                22-35 y.o
              </div>
              <div style={{ marginBottom: 24 }} />
              <div className={classes.text2}>Socials:</div>
              <div style={{ marginBottom: 16 }} />
              <div className={classes.text2} style={{ fontWeight: 400 }}>
                Instagram, Facebook, TikTok
              </div>
              <div style={{ marginBottom: 24 }} />
              <div className={classes.text2}>Experience in Editing:</div>
              <div style={{ marginBottom: 16 }} />
              <div className={classes.text2} style={{ fontWeight: 400 }}>
                Users with experience in professional photo/video editors who
                actively used adjustments.
              </div>
            </div>
          </div>
          <div style={{ marginBottom: 42 }} />
          <div className={classes.text6}>Summary</div>
          <div style={{ marginBottom: 42 }} />
          <div>
            <img src={summary} alt="summary" />
          </div>
          <div style={{ marginBottom: 42 }} />
          <div className={classes.text7}>
            After conducting research, I focused on the following points:
          </div>
          <div style={{ marginBottom: 32 }} />
          <div className={classes.points}>
            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              <div className={classes.text7}>1.</div>
              <div className={classes.text2} style={{ width: "1379px" }}>
                Improve the UX of the multislider. Make it simpler, clearer, and
                consistent with the rest of the application.
              </div>
            </div>
            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              <div className={classes.text7}>2.</div>
              <div className={classes.text2} style={{ width: "1379px" }}>
                Solve the problem with buttons in the editor. Reduce their
                number and make them more clear.
              </div>
            </div>
            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              <div className={classes.text7}>3.</div>
              <div className={classes.text2} style={{ width: "1379px" }}>
                Implement the new multislider across all Prequel tools (beauty
                tools, AI effects, filters).
              </div>
            </div>
          </div>
          <div style={{ marginBottom: 100 }} />
          <div
            className={classes.text3}
            style={{ textAlign: "center", zIndex: 2, position: "relative" }}
          >
            Let’s start designing
          </div>
          <div style={{ marginBottom: 42 }} />
          <div className={classes.text6}>Multislider Design</div>
          <div style={{ marginBottom: 42 }} />
          <div>
            <img src={screen1} alt="screen1" width={1420} />
          </div>
          <div style={{ marginBottom: 42 }} />

          <div className={classes.text6}>Drag slider</div>
          <div style={{ marginBottom: 42 }} />
          <div>
            <img src={screen2} alt="screen2" width={1420} />
          </div>
          <div style={{ marginBottom: 42 }} />

          <div className={classes.text6}>HSL Design</div>
          <div style={{ marginBottom: 42 }} />
          <div>
            <img src={screen3} alt="screen3" width={1420} />
          </div>
          <div style={{ marginBottom: 42 }} />

          <div className={classes.text6}>Technical part</div>
          <div style={{ marginBottom: 42 }} />
          <div>
            <img src={screen4} alt="screen4" width={1420} />
          </div>
          <div style={{ marginBottom: 100 }} />
          <div
            className={classes.text3}
            style={{ textAlign: "center", zIndex: 2, position: "relative" }}
          >
            Results
          </div>
          <div style={{ marginBottom: 42 }} />
          <div className={classes.text2} style={{ textAlign: "center" }}>
            After conducting the A/B test, we noticed an improvement in key
            metrics and decided to roll out the feature to all users.
          </div>
          {/*todo add green color for some text ^*/}
          <div style={{ marginBottom: 42 }} />
          <div className={classes.columns}>
            <div className={classes.item}>
              <div className={classes.box}>
                <div className={classes.text2}>
                  CR editor &gt; Edit Created -0.41%
                </div>
                <div className={classes.text2}>
                  CR editor &gt; Edit Created With Adjust -0.95%
                </div>
                <div className={classes.text2}>Edits Per User -3.44%</div>
              </div>
            </div>
            <div className={classes.item}>
              <div className={classes.box}>
                <div className={classes.text2}>
                  CR editor &gt; Edit Created +2.35%
                </div>
                <div className={classes.text2}>
                  CR editor &gt; Edit Created With Adjust +4.34%
                </div>
                <div className={classes.text2}>Edits Per User +1.95%</div>
              </div>
            </div>
          </div>
          <div
            style={{
              position: "relative",
              left: "0",
              right: "0",
              textAlign: "center",
              marginTop: "-20px",
            }}
          >
            <img src={arrow} alt="arrow" />
          </div>
          <div style={{ marginBottom: 16 }} />
          <div className={classes.text3} style={{ textAlign: "center" }}>
            Tab bar redesign
          </div>
          <div style={{ marginBottom: 64 }} />
          <div className={classes.text6}>Problem</div>
          <div style={{ marginBottom: 32 }} />
          <div className={classes.text2}>
            The discover page is currently overloaded with content. It is
            difficult for a user to find an item for the intended editing
            purpose.
          </div>
          <div style={{ marginBottom: 42 }} />
          <div className={classes.text6}>Users</div>
          <div style={{ marginBottom: 32 }} />

          <div className={classes.shortlist}>
            <div style={{ display: "flex", gap: "16px" }}>
              <img src={bulletStar} width={24} alt="star" />
              <div className={classes.text2}>
                casual istagrammer, tiktoker, micro-influencer: users, who will
                more likely do quick edits, but are willing to express
                creativity with more flexibility.
              </div>
            </div>
            <div style={{ display: "flex", gap: "16px" }}>
              <img src={bulletStar} width={24} alt="star" />
              <div className={classes.text2}>
                blogger, influencer, filter enthusiasts: users, who likely to
                catch-up with visual trends and are more likely to do long
                processing in order to get something unique.
              </div>
            </div>
          </div>
          <div style={{ marginBottom: 42 }} />
          <div className={classes.text6}>User’s goal</div>
          <div style={{ marginBottom: 32 }} />
          <div className={classes.text2}>
            As a Prequel user, I want to easily navigate on discover page so
            that I can find the content I need faster.
          </div>
          <div style={{ marginBottom: 42 }} />
          <div className={classes.text6}>Hypotheses</div>
          <div style={{ marginBottom: 32 }} />
          <div style={{ display: "flex", gap: "16px" }}>
            <img src={bulletStarBlue} width={24} alt="star" />
            <div className={classes.text2}>
              If we break down the tab bar into three categories (photo, video
              and AI), the distributions of content will be more comfortable for
              the users to navigate and find what is needed.
            </div>
          </div>
          <div style={{ marginBottom: 42 }} />
          <div className={classes.text6}>Solution</div>
          <div style={{ marginBottom: 32 }} />
          <div className={classes.points}>
            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              <div className={classes.text7}>1.</div>
              <div className={classes.text2}>
                Provide better breakdown and grouping of the available content;
              </div>
            </div>
            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              <div className={classes.text7}>2.</div>
              <div className={classes.text2}>
                Provide more intuitive navigation experience for the users;
              </div>
            </div>
          </div>
          <div style={{ marginBottom: 42 }} />
          <div className={classes.text6}>Metrics to measure</div>
          <div style={{ marginBottom: 32 }} />
          <div className={classes.text7}>Main</div>
          <div style={{ marginBottom: 16 }} />

          <div style={{ display: "flex", gap: "16px" }}>
            <img src={bulletStar} width={24} alt="star" />
            <div className={classes.text2}>
              Number of Prequels created from discover;
            </div>
          </div>
          <div style={{ marginBottom: 32 }} />
          <div className={classes.text7}>Secondary</div>
          <div style={{ marginBottom: 16 }} />
          <div className={classes.shortlist}>
            <div style={{ display: "flex", gap: "16px" }}>
              <img src={bulletStar} width={24} alt="star" />
              <div className={classes.text2}>
                % of sessions with navigating to other than the main discover
                tabs;
              </div>
            </div>
            <div style={{ display: "flex", gap: "16px" }}>
              <img src={bulletStar} width={24} alt="star" />
              <div className={classes.text2}>CR post view - editor open;</div>
            </div>
            <div style={{ display: "flex", gap: "16px" }}>
              <img src={bulletStar} width={24} alt="star" />
              <div className={classes.text2}>
                CR to trials/subs from discover;
              </div>
            </div>
          </div>
          <div style={{ marginBottom: 32 }} />
          <div className={classes.text7}>Counter Metrics</div>
          <div className={classes.shortlist}>
            <div style={{ display: "flex", gap: "16px" }}>
              <img src={bulletStar} width={24} alt="star" />
              <div className={classes.text2}>
                number of Prequels created not from discover;
              </div>
            </div>
            <div style={{ display: "flex", gap: "16px" }}>
              <img src={bulletStar} width={24} alt="star" />
              <div className={classes.text2}>
                CR to trials/subs not from discover;
              </div>
            </div>
          </div>
          <div style={{ marginBottom: 100 }} />
          <div
            className={classes.text3}
            style={{ textAlign: "center", zIndex: 2, position: "relative" }}
          >
            Let’s start designing
          </div>
          <div style={{ marginBottom: 42 }} />
          <div className={classes.text6}>Tab bar redesign</div>
          <div style={{ marginBottom: 42 }} />
          <div>
            <img src={screen5} alt="screen5" width={1420} />
          </div>
          <div style={{ marginBottom: 100 }} />
          <div
            className={classes.text3}
            style={{ textAlign: "center", zIndex: 2, position: "relative" }}
          >
            Results
          </div>
          <div style={{ marginBottom: 42 }} />
          <div className={classes.text2} style={{ textAlign: "center" }}>
            The results of the A/B test were very positive, so we decided to
            roll out feature to all users.
          </div>
          <div style={{ marginBottom: 42 }} />
          <div
            className={classes.box}
            style={{ width: 900, marginLeft: "auto", marginRight: "auto" }}
          >
            <div className={classes.text2}>
              Photo Edit Created from Discover &gt; +9.45%
            </div>
            <div className={classes.text2}>
              Video Edit Created from Discover &gt; +16.12%
            </div>
            <div className={classes.text2}>
              Users who clicked on any tab in the discover &gt; +25.24%
            </div>
            <div className={classes.text2}>CR to trial / subsc &gt; +10.8%</div>
          </div>
          <div style={{ marginBottom: 100 }} />
          <div className={classes.text3} style={{ textAlign: "center" }}>
            Editor Archive
          </div>
          <div style={{ marginBottom: 64 }} />
          <div className={classes.text6}>Problem</div>
          <div style={{ marginBottom: 32 }} />
          <div className={classes.text2}>
            Prequel is an application that offers a wide range of tools and
            features. The main value of Prequel is that users can make any edit
            without leaving the application. Since 2018, the app has accumulated
            a large number of effects so editor has become crammed and busy.
          </div>
          <div style={{ marginBottom: 42 }} />
          <div className={classes.text6}>Users</div>
          <div style={{ marginBottom: 32 }} />

          <div className={classes.shortlist}>
            <div style={{ display: "flex", gap: "16px" }}>
              <img src={bulletStar} width={24} alt="star" />
              <div className={classes.text2}>
                casual istagrammer, tiktoker, micro-influencer: users, who will
                more likely do quick edits, but are willing to express
                creativity with more flexibility.
              </div>
            </div>
            <div style={{ display: "flex", gap: "16px" }}>
              <img src={bulletStar} width={24} alt="star" />
              <div className={classes.text2}>
                blogger, influencer, filter enthusiasts: users, who likely to
                catch-up with visual trends and are more likely to do long
                processing in order to get something unique.
              </div>
            </div>
          </div>
          <div style={{ marginBottom: 42 }} />
          <div className={classes.text6}>User’s goal</div>
          <div style={{ marginBottom: 32 }} />
          <div className={classes.text2}>
            As a Prequel user, I want to be able to find and use those effects
            and filters that suite my editing goal and style.
          </div>
          <div style={{ marginBottom: 42 }} />
          <div className={classes.text6}>Hypotheses</div>
          <div style={{ marginBottom: 32 }} />
          <div style={{ display: "flex", gap: "16px" }}>
            <img src={bulletStarBlue} width={24} alt="star" />
            <div className={classes.text2}>
              If we create a library of effects and filters where we place all
              the old and less relevant effects, we will simplify navigation in
              the editor and won't lose our audience.
            </div>
          </div>
          <div style={{ marginBottom: 42 }} />
          <div className={classes.text6}>Solution</div>
          <div style={{ marginBottom: 32 }} />
          <div className={classes.text2}>
            As the editor already has numerous tools and options and tabs, I
            decided against creating a new tab. I analyzed what is already
            there, and decided to upgrade existing tool apart existing search
            tab for effects and filters. Adding archived tools there promised to
            be a very smooth process that wouldn't require expensive
            development.
          </div>
          <div style={{ marginBottom: 100 }} />
          <div
            className={classes.text3}
            style={{ textAlign: "center", zIndex: 2, position: "relative" }}
          >
            Let’s start designing
          </div>
          <div style={{ marginBottom: 42 }} />

          <div className={classes.text6}>Search Redesign</div>
          <div style={{ marginBottom: 42 }} />
          <div>
            <img src={screen6} alt="screen6" width={1420} />
          </div>
          <div style={{ marginBottom: 42 }} />

          <div className={classes.text6}>Archive Screens</div>
          <div style={{ marginBottom: 42 }} />
          <div>
            <img src={screen7} alt="screen7" width={1420} />
          </div>
          <div style={{ marginBottom: 100 }} />
          <div
            className={classes.text3}
            style={{ textAlign: "center", zIndex: 2, position: "relative" }}
          >
            Results
          </div>
          <div style={{ marginBottom: 42 }} />
          <div className={classes.text2} style={{ textAlign: "center" }}>
            The A/B test showed an increase in subscription retention among old
            users (those who have been in the app for more than 3 months). Our
            team managed to remove less trendy and refined effects and filters
            from the main editor without affecting churn rate dramatically and
            getting low rating from core users on the App Store
          </div>
          <div style={{ marginBottom: 69 }} />
          <div style={{ justifyContent: "center", display: "flex", gap: 24 }}>
            <Button
              icon={arrowUpLeft}
              onClick={() => {
                navigate(routes.esti);
                window.scrollTo(0, 0);
              }}
              isIconOnLeftSide={true}
            >
              PREVIOUS CASE
            </Button>
            <Button
              icon={arrowUp}
              onClick={() => {
                navigate(routes.admin);
                window.scrollTo(0, 0);
              }}
            >
              NEXT CASE
            </Button>
          </div>
          <div style={{ marginBottom: 130 }} />
        </div>
      </div>
      <Wave waveColor={colors.blueAnakiwa} backgroundColor={colors.whiteSoap} />
      <Footer color={colors.blueAnakiwa} />
    </>
  );
}
