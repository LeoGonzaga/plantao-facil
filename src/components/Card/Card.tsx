import Button from "../Button";
import Tag from "../Tag";

import "./styles.scss";

export const Card = () => {
  return (
    <div className="card__container">
      <Tag variant="success">Aberta em Plantão</Tag>

      <h2>Farmácia Santa Maria</h2>

      <p>Rua São Sebastião, 56 — Centro, Pedralva</p>
      <p>(35) 3434-5566</p>
      <p>Dra. Beatriz Souza</p>

      <hr />

      <div className="buttons">
        <Button color="#10b981">
          <span className="material-symbols-outlined">phone</span>
          Whatsapp
        </Button>
        <Button color="#000">
          <span className="material-symbols-outlined">location_on</span>
          Google Maps
        </Button>
      </div>
    </div>
  );
};
