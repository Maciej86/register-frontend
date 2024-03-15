import { useEffect, useState } from "react";
import { useFetchData } from "../useFetchData";
import { URL_ORGANIZATION } from "../../urlApi";

export const useAddOrganizationIntoUser = (fetchDataOrganizationUser) => {
  const { fetchData, fetchDataLoading } = useFetchData(
    URL_ORGANIZATION.FETCH_ALL_ORGANIZATION,
    []
  );
  const [inputCheckBox, setInputCheckBox] = useState([]);
  const [organizationChecked, setOrganizationChecked] = useState([]);

  useEffect(() => {
    setInputCheckBox(
      fetchData.map((item) => fetchDataOrganizationUser.includes(item.id))
    );
  }, [fetchDataLoading]);

  useEffect(() => {
    addUserIntoOrganization();
  }, [inputCheckBox]);

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

  const changeChecked = (index, value) => {
    const changedCheckbox = [...inputCheckBox];
    changedCheckbox[index] = value;
    setInputCheckBox(changedCheckbox);
    addUserIntoOrganization();
  };

  return {
    fetchData,
    fetchDataLoading,
    inputCheckBox,
    changeChecked,
    organizationChecked,
  };
};
