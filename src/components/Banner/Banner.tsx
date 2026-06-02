import { useGoogleSheets } from "@src/hooks";
import "./styles.scss";

import empty from "@assets/empty.svg";
import Loader from "../Loader";

export const Banner = () => {
  const { hasOnCall, isLoading } = useGoogleSheets();
  return (
    <div className="banner__container">
      <h1>
        Farmácia de Plantão <span>em Pedralva</span>
      </h1>
      <span>
        Consulte rapidamente a farmácia de plantão, endereço, telefone e
        localização.
      </span>

      {isLoading && <Loader />}

      {hasOnCall && !isLoading && (
        <h3>
          <span></span>
          Plantão agora
        </h3>
      )}

      {!hasOnCall && !isLoading && (
        <div className="banner__container__empty">
          <img src={empty} alt="Nenhum plantão" width={200} />

          <h2>Nenhum plantão encontrado</h2>

          <span>Não há farmácias de plantão cadastradas para hoje.</span>
        </div>
      )}
    </div>
  );
};
