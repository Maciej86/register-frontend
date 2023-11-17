import { useState } from "react";
import { useFetchData } from "../../../../core/hooks/useFetchData";
import { URL_ORGANIZATION } from "../../../../core/urlBackend";

export const useAddOrganizationIntoUser = () => {
  const [inputCheckbox, setInputCheckbox] = useState([]);

  const changeChecked = (index, value) => {
    const changedCheckbox = [...inputCheckbox];
    changedCheckbox[index] = value;
    setInputCheckbox(changedCheckbox);
  };

  const { fetchData, fetchDataLoading } = useFetchData(
    URL_ORGANIZATION.FETCH_ALL_ORGANIZATION,
    []
  );

  return { fetchData, fetchDataLoading, inputCheckbox, changeChecked };
};
