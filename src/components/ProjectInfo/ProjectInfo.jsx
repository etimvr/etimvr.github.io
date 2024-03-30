import PropTypes from "prop-types";
import classes from "./ProjectInfo.module.css";

ProjectInfo.propTypes = {
  role: PropTypes.string,
  platform: PropTypes.string,
  team: PropTypes.array,
};

export function ProjectInfo(props) {
  const { role, platform, team } = props;

  return (
    <div className={classes.columns}>
      <div>
        <div className={classes.text3}>My Role</div>
        <div style={{ marginBottom: 32 }} />
        <div className={classes.text4}>{role}</div>
      </div>
      <div>
        <div className={classes.text3}>Platform</div>
        <div style={{ marginBottom: 32 }} />
        <div className={classes.text4}>{platform}</div>
      </div>
      <div>
        <div className={classes.text3}>My Team</div>
        <div style={{ marginBottom: 32 }} />
        <div className={classes.teamShortlist}>
          {team.map((teammate, index) => (
            <div className={classes.text4} key={index}>
              {teammate}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
