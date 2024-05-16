import PropTypes from "prop-types";
import classes from "./ProjectInfo.module.css";
import typography from "../../typography.module.css";

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
        <div className={typography.title}>My Role</div>
        <div style={{ marginBottom: 32 }} />
        <div className={typography.smallText500}>{role}</div>
      </div>
      <div>
        <div className={typography.title}>Platform</div>
        <div style={{ marginBottom: 32 }} />
        <div className={typography.smallText500}>{platform}</div>
      </div>
      <div>
        <div className={typography.title}>My Team</div>
        <div style={{ marginBottom: 32 }} />
        <div className={classes.teamShortlist}>
          {team.map((teammate, index) => (
            <div className={typography.smallText500} key={index}>
              {teammate}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
