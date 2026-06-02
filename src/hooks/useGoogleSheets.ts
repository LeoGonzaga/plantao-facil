import { Services } from "@src/services";
import { useQuery } from "@tanstack/react-query";

interface IPharmacy {
  name: string;
  address: string;
  phone: string;
  start: string;
  end: string;
  owner: string;
  onCall: boolean;
}

export const useGoogleSheets = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["pharmacy-on-call"],
    queryFn: Services.phamacy.getOnCall,
  });

  const { data: pharmacyList } = useQuery({
    queryKey: ["all-pharmacy-list"],
    queryFn: Services.phamacy.getAll,
  });

  const parseDate = (value: string) => {
    const match = value.match(/Date\((\d+),(\d+),(\d+)\)/);

    if (!match) return null;

    const [, year, month, day] = match;

    return new Date(+year, +month, +day);
  };

  const formatDate = (value: string): string => {
    const date = parseDate(value);

    if (!date) return "";

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  const isOnDutyToday = (start: string, ended: string) => {
    const startDate = parseDate(start);
    const endDate = parseDate(ended);

    if (!startDate || !endDate) return false;

    const today = new Date();

    today.setHours(0, 0, 0, 0);
    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(0, 0, 0, 0);

    return today >= startDate && today <= endDate;
  };

  const convertSheetInJson = (data: any) => {
    if (!data) return [];
    const json = JSON.parse(data.substring(47, data.length - 2));

    if (!json?.table?.rows) {
      console.error("Não foi possível encontrar os dados na resposta.");
      return [];
    }

    return json.table.rows;
  };

  const handleFormatOnCallData = () => {
    if (!data) return [];

    try {
      const json = convertSheetInJson(data);
      const rows = json.map((row: any, index: number) => {
        const start = row.c?.[0]?.v;
        const end = row.c?.[1]?.v;
        return {
          id: index + 1,
          start: formatDate(start),
          ended: formatDate(end),
          name: row.c?.[2]?.v || "",
          address: row.c?.[3]?.v || "",
          phone: row.c?.[4]?.v || "",
          owner: row.c?.[5]?.v || "",
          onCall: isOnDutyToday(start, end),
        };
      });
      const sanitizedRows: IPharmacy[] = rows.filter(
        (row: any) => row !== undefined,
      );

      return sanitizedRows;
    } catch (error) {
      console.error("Não foi possível converter o retorno.", error);
      return [];
    }
  };

  const handleFormatPharmacyList = () => {
    if (!data) return [];

    try {
      const json = convertSheetInJson(pharmacyList);
      const rows = json.map((row: any, index: number) => {
        return {
          id: index + 1,
          name: row.c?.[0]?.v || "",
          address: row.c?.[1]?.v || "",
          phone: row.c?.[2]?.v || "",
          owner: row.c?.[3]?.v || "",
        };
      });
      const sanitizedRows: IPharmacy[] = rows.filter(
        (row: any) => row !== undefined,
      );

      return sanitizedRows;
    } catch (error) {
      console.error("Não foi possível converter o retorno.", error);
      return [];
    }
  };

  const formattedRows = handleFormatOnCallData();
  const onCall = formattedRows.find((pharmacy) => pharmacy.onCall);
  const hasOnCall = onCall && onCall?.name?.length > 0;

  const listAll = handleFormatPharmacyList();

  return {
    data: formattedRows,
    onCall,
    isLoading,
    isError,
    hasOnCall,
    listAll,
  };
};
