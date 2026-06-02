import "./styles.scss";

export const Loader = () => {
  return (
    <div className="container__loader">
      <div className="skeleton skeleton-text skeleton-text--full"></div>
      <div className="skeleton skeleton-text skeleton-text--full"></div>
      <div className="skeleton skeleton-text skeleton-text--full"></div>
    </div>
  );
};
