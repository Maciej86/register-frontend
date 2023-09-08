import { useSelector } from "react-redux";
import { selectUserOrganization } from "../User/sliceUser";

export const useOrganization = () => {
  const organization = useSelector(selectUserOrganization);

  const NameMainOrganization = (id) => {
    let name = "";
    organization?.map((item) => {
      if (item.id_organization === id) {
        name = item.name_organization;
      }
    });

    return name;
  };

  return { NameMainOrganization };
};
