import Button from "../Button";
import Infomation from "../Infomation";
import Tag from "../Tag";

import "./styles.scss";
import { useCard } from "./useCard";

export const Card = () => {
  const { data, handleOpenWhatsapp, handleOpenGoogleMaps } = useCard();

  if (!data) return null;

  return (
    <div className="card__container">
      {data?.onCall && <Tag variant="success">Aberta em Plantão</Tag>}

      <h2>{data?.name}</h2>

      <Infomation {...data} />

      <hr />

      <div className="buttons">
        <Button color="#10b981" onClick={() => handleOpenWhatsapp(data?.phone)}>
          <span className="material-symbols-outlined">phone</span>
          Whatsapp
        </Button>
        <Button
          color="#000"
          onClick={() => handleOpenGoogleMaps(data?.address)}
        >
          <span className="material-symbols-outlined">location_on</span>
          Google Maps
        </Button>
      </div>
    </div>
  );
};
