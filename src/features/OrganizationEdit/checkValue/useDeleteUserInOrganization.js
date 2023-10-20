import { useDispatch } from "react-redux";
import { fetchDeleteUserInOrganization } from "../../../store/Organization/sliceOrganization";

export const useDeleteUserInOrganization = (data, checkbox) => {
  const dispatch = useDispatch();

  const deleteUserInOrganization = () => {
    const usersToDelete = [];
    for (let i = 0; i < checkbox.length; i++) {
      if (!checkbox[i]) {
        usersToDelete.push(data[i].id);
      }
    }

    dispatch(fetchDeleteUserInOrganization(usersToDelete));
  };

  return { deleteUserInOrganization };
};
