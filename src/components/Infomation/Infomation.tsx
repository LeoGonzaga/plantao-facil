import { InfomationProps } from "./types";

export const Infomation = (data: InfomationProps) => {
  return (
    <div>
      <p>
        <span className="material-symbols-outlined">location_on</span>{" "}
        {data?.address}
      </p>
      <p>
        <span className="material-symbols-outlined">phone</span> {data?.phone}
      </p>
      <p>
        <span className="material-symbols-outlined">person</span> {data?.owner}
      </p>
    </div>
  );
};
