import classes from "./Admin.module.css";
import typography from "../../typography.module.css";
import { Header } from "../../MainPage/Header/Header.jsx";
import { Footer } from "../../MainPage/Footer/Footer.jsx";
import { colors } from "../../colors.js";
import { Wave } from "../../components/Wave/Wave.jsx";
import { Button } from "../../components/Button/Button.jsx";
import arrowUp from "../../assets/common/arrow-up.svg";
import arrowUpLeft from "../../assets/common/arrow-up-left.svg";
import { routes } from "../../routes.js";
import { useNavigate } from "react-router-dom";
import intro from "../../assets/admin/intro.png";
import quickLook from "../../assets/admin/quick-look.png";
import chart from "../../assets/admin/chart.png";
import sdiAdminPanel from "../../assets/admin/sdi-admin-panel.png";
import userAdminPanel from "../../assets/admin/user-admin-panel.png";
import { ProjectInfo } from "../../components/ProjectInfo/ProjectInfo.jsx";
import { WhatIDid } from "../../components/WhatIDid/WhatIDid.jsx";
import bulletStar from "../../assets/common/bullet-star.svg";
import flower from "../../assets/admin/flower.svg";
import heart from "../../assets/admin/heart.svg";
import star1 from "../../assets/admin/star1.svg";
import star2 from "../../assets/admin/star2.svg";

export function Admin() {
  const navigate = useNavigate();
  return (
    <>
      <Header color={colors.whiteTitan} />

      <div className={classes.page}>
        <div className={classes.inner}>
          <div
            style={{
              position: "absolute",
              marginLeft: "935px",
              marginTop: "-5px",
            }}
          >
            <img src={star1} alt="star1" />
          </div>
          <div
            className={typography.caseTitle}
            style={{ zIndex: 2, position: "relative" }}
          >
            Admin Panels
          </div>
          <div style={{ marginBottom: 12 }} />
          <div
            className={typography.normalText400}
            style={{ textAlign: "center" }}
          >
            The service that streamlines working flow with various types of
            content within applications.
          </div>
          <div style={{ marginBottom: 32 }} />
          <div>
            <img src={intro} alt="intro" width={1420} />
          </div>
          <div style={{ marginBottom: 80 }} />
          <ProjectInfo
            role={"Senior Product Designer"}
            platform={"Web"}
            team={[
              "1 Designer",
              "3 Engineers",
              "1 Product Manager",
              "1 Project Manager",
            ]}
          />
          <div style={{ marginBottom: 100 }} />
          <WhatIDid
            color={colors.blueZumthor}
            text={
              <>
                On this project I worked as a product designer, my main task was
                to create a convenient and multifunctional service that helps
                all company employees to work efficiently and quickly with large
                amount of internal data.
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
              marginLeft: "752px",
              marginTop: "-15px",
            }}
          >
            <img src={flower} alt="flower" />
          </div>
          <div
            className={typography.title}
            style={{ zIndex: 2, position: "relative" }}
          >
            Quick look at Admin Panel
          </div>
          <div style={{ marginBottom: 42 }} />
          <div className={classes.outer}>
            <img src={quickLook} alt="quick-look" />
          </div>
          <div style={{ marginBottom: 100 }} />
          <div className={typography.title}>
            What is the main goal of Admin Panels?
          </div>
          <div style={{ marginBottom: 42 }} />
          <div className={classes.shortlist}>
            <div style={{ display: "flex", gap: "16px" }}>
              <img src={bulletStar} width={24} alt="star" />
              <div className={typography.normalText400}>
                Tracking general metrics across the entire product
              </div>
            </div>
            <div style={{ display: "flex", gap: "16px" }}>
              <img src={bulletStar} width={24} alt="star" />
              <div className={typography.normalText400}>
                Monitoring subscriptions within each application
              </div>
            </div>
            <div style={{ display: "flex", gap: "16px" }}>
              <img src={bulletStar} width={24} alt="star" />
              <div className={typography.normalText400}>
                Conducting A/B tests, rolling out features
              </div>
            </div>
            <div style={{ display: "flex", gap: "16px" }}>
              <img src={bulletStar} width={24} alt="star" />
              <div className={typography.normalText400}>
                Quickly changing content within the applications without
                additional development
              </div>
            </div>
          </div>
          <div style={{ marginBottom: 64 }} />
          <div>
            <img src={chart} alt="chart" width={1420} />
          </div>
          <div style={{ marginBottom: 64 }} />
          <div
            style={{
              position: "absolute",
              marginLeft: "463px",
            }}
          >
            <img src={heart} alt="heart" />
          </div>
          <div
            className={typography.title}
            style={{ zIndex: 2, position: "relative" }}
          >
            Some examples...
          </div>
          <div style={{ marginBottom: 42 }} />
          <div className={typography.bigText}>SDI Admin Panel</div>
          <div style={{ marginBottom: 32 }} />
          <div className={typography.normalText400}>
            SDI (server-driven interface) allows to manage the user interface
            from the backend. The main principle is to minimize responsibility
            for display attributes (padding, colors, layouts), but to control
            the logical components on the page and the structure of business
            models.
          </div>
          <div style={{ marginBottom: 42 }} />
          <div>
            <img src={sdiAdminPanel} alt="sdi-admin-panel" width={1420} />
          </div>
          <div style={{ marginBottom: 64 }} />

          <div className={typography.bigText}>User Admin Panel</div>
          <div style={{ marginBottom: 32 }} />
          <div className={typography.normalText400}>
            User admin panel allows to manage the roles and statuses of all
            application users. We can change the role (artist, ambassador or
            user), change the status (ban, unban), view the registration date,
            and user personal information.
          </div>
          <div style={{ marginBottom: 42 }} />
          <div>
            <img src={userAdminPanel} alt="user-admin-panel" width={1420} />
          </div>
          <div style={{ marginBottom: 100 }} />
          <div
            style={{
              position: "absolute",
              marginLeft: "790px",
              marginTop: "-25px",
            }}
          >
            <img src={star2} alt="star2" />
          </div>
          <div
            className={typography.title}
            style={{ zIndex: 2, position: "relative", textAlign: "center" }}
          >
            Results
          </div>
          <div style={{ marginBottom: 42 }} />
          <div
            className={typography.normalText400}
            style={{ textAlign: "center" }}
          >
            Сreation and development of various admin panels help us to quickly
            change content within the applications, manage our users, track our
            general metrics, and analyze data.
          </div>
          <div style={{ marginBottom: 100 }} />
          <div style={{ justifyContent: "center", display: "flex", gap: 24 }}>
            <Button
              icon={arrowUpLeft}
              onClick={() => {
                navigate(routes.prequel);
                window.scrollTo(0, 0);
              }}
              isIconOnLeftSide={true}
            >
              PREVIOUS CASE
            </Button>
            <Button
              icon={arrowUp}
              onClick={() => {
                navigate(routes.otherWorks);
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
        waveColor={colors.blueLightAnakiwa}
        backgroundColor={colors.whiteTitan}
      />
      <Footer color={colors.blueLightAnakiwa} />
    </>
  );
}
