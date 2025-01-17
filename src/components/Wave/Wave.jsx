import PropTypes from "prop-types";

Wave.propTypes = {
  waveColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  isRevert: PropTypes.bool,
};

export function Wave(props) {
  const { waveColor, backgroundColor, isRevert = false } = props;
  const waveHeight = 42;

  return (
    <div
      style={{
        display: "block",
        height: waveHeight -1, // 1px less than svg to fix weird gap before/after svg
        backgroundColor: backgroundColor,
        transform: isRevert ? "rotate(180deg)" : "none",
      }}
    >
      <svg
        width="100%"
        height={waveHeight}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="wave"
            width="1920"
            height="42"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 42H480H960H1920L1914.42 35.439C1875.25 -10.5808 1804.31 -10.9581 1764.66 34.6427C1762.2 37.4728 1757.8 37.4696 1755.34 34.6395C1715.56 -11.1022 1644.48 -11.1534 1604.71 34.5882C1602.22 37.4471 1597.78 37.4462 1595.29 34.5873C1555.53 -11.1461 1484.48 -11.1472 1444.71 34.5861C1442.22 37.4425 1437.78 37.4365 1435.31 34.5723C1395.79 -11.1607 1324.54 -10.8989 1284.74 34.5885C1282.24 37.4344 1277.79 37.4576 1275.31 34.6041C1235.53 -11.146 1164.47 -11.1459 1124.69 34.6041C1122.21 37.4576 1117.76 37.4344 1115.26 34.5885C1075.46 -10.8991 1004.21 -11.1607 964.69 34.5723C962.215 37.4365 957.776 37.4425 955.292 34.5861C915.524 -11.1472 844.475 -11.1459 804.707 34.5873C802.221 37.4461 797.78 37.4471 795.294 34.5882C755.519 -11.1535 684.481 -11.1533 644.706 34.5882C642.22 37.4471 637.779 37.4462 635.293 34.5873C595.525 -11.146 524.463 -11.1323 484.695 34.601C482.218 37.4491 477.792 37.444 475.324 34.5882C435.84 -11.1042 364.818 -10.9652 325.192 34.6045C322.718 37.4496 318.274 37.4556 315.791 34.6181C275.832 -11.0494 204.478 -11.1499 164.66 34.6408C162.197 37.4732 157.798 37.4832 155.326 34.6584C115.419 -10.9505 44.277 -10.3526 5.14151 35.9208L0 42Z"
              fill={waveColor}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" x="0" fill="url(#wave)"></rect>
      </svg>
    </div>
  );
}
