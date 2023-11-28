import { useEffect, useState } from "react";
import { useFetchData } from "../../../../core/hooks/useFetchData";
import { URL_ORGANIZATION } from "../../../../core/urlBackend";

export const useAddOrganizationIntoUser = () => {
  const { fetchData, fetchDataLoading } = useFetchData(
    URL_ORGANIZATION.FETCH_ALL_ORGANIZATION,
    []
  );
  const [inputCheckBox, setInputCheckBox] = useState([]);
  const [organizationChecked, setOrganizationChecked] = useState([]);

  useEffect(() => {
    setInputCheckBox(fetchData.map(() => false));
  }, [fetchData]);

  const changeChecked = (index, value) => {
    const changedCheckbox = [...inputCheckBox];
    changedCheckbox[index] = value;
    setInputCheckBox(changedCheckbox);
  };

  const addUserIntoOrganization = () => {
    for (let i = 0; i < inputCheckBox.length; i++) {
      if (inputCheckBox[i] === true) {
        setOrganizationChecked((organizationChecked) => [
          ...organizationChecked,
          fetchData[i].id,
        ]);
      }
    }
  };

  return {
    fetchData,
    fetchDataLoading,
    inputCheckBox,
    changeChecked,
    addUserIntoOrganization,
    organizationChecked,
  };
};
