import { WHATSAPP_TEXT, WHATSAPP_URL } from "@src/constants/wa-me";
import { useGoogleSheets } from "@src/hooks";

export const useCard = () => {
  const { onCall } = useGoogleSheets();

  const handleOpenWhatsapp = (phone?: string) => {
    window.open(`${WHATSAPP_URL}=${phone}&${WHATSAPP_TEXT}`, "_blank");
  };

  const handleOpenGoogleMaps = (address = "") => {
    const encodedAddress = encodeURIComponent(address);

    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`,
      "_blank",
    );
  };

  return {
    data: onCall,
    handleOpenWhatsapp,
    handleOpenGoogleMaps,
  };
};
