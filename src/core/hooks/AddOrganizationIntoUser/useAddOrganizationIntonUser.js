import { useEffect, useState } from "react";
import { useFetchData } from "../useFetchData";
import { URL_ORGANIZATION } from "../../urlApi";

export const useAddOrganizationIntoUser = () => {
  const { fetchData, fetchDataLoading } = useFetchData(
    URL_ORGANIZATION.FETCH_ALL_ORGANIZATION,
    []
  );
  const [inputCheckBox, setInputCheckBox] = useState([]);
  const [organizationChecked, setOrganizationChecked] = useState([]);

  const changeChecked = (index, value) => {
    const changedCheckbox = [...inputCheckBox];
    changedCheckbox[index] = value;
    setInputCheckBox(changedCheckbox);
  };

  const addUserIntoOrganization = () => {
    setOrganizationChecked([]);
    inputCheckBox.forEach((item, index) => {
      if (item === true) {
        setOrganizationChecked((organizationChecked) => [
          ...organizationChecked,
          fetchData[index].id,
        ]);
      }
    });
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
