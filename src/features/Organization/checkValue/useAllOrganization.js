import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllOrganization,
  selectAddNewOrganization,
  selectAllOrganization,
} from "../../../store/Organization/sliceOrganization";

export const useAllOrganizaton = () => {
  const dispatch = useDispatch();
  const allOrganization = useSelector(selectAllOrganization);
  const addNewOrganization = useSelector(selectAddNewOrganization);

  useEffect(() => {
    dispatch(fetchAllOrganization());
  }, [addNewOrganization]);

  const viewOrganization = (
    <table>
      <thead>
        <tr>
          <th>Lp.</th>
          <th>Nazwa</th>
          <th>Użytkowników</th>
          <th>Edytuj</th>
          <th>Usuń</th>
        </tr>
      </thead>
      <tbody>
        {allOrganization.map((item, index) => {
          index++;
          return (
            <tr key={index}>
              <td>{index}</td>
              <td>{item.name_organization}</td>
              <td>{item.count_user}</td>
              <td></td>
              <td></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );

  return { viewOrganization };
};
