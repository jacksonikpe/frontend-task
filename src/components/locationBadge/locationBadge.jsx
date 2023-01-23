import "./locationBadge.scss";

const Location = ({ color, name }) => {
  return (
    <div
      className={
        color === "blue"
          ? "blueLocation badge"
          : color === "yellow"
          ? "yellowLocation badge"
          : color === "purple"
          ? "purpleLocation badge"
          : ""
      }
    >
      Dodo - {name}
    </div>
  );
};

export default Location;
