import "./styles.scss";

export const Header = () => {
  const currentDate = new Date();
  const today = currentDate.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <div className="header__container">
      <div>
        <span>Plantão Pedralva</span>
        <span>{today}</span>
      </div>
    </div>
  );
};
