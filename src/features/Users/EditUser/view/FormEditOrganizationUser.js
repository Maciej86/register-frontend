import { useDispatch, useSelector } from "react-redux";
import {
  fetchEditUserOrganization,
  selectEditUsersOrganization,
  selectLoadingEditUsersOrganization,
} from "../../../../store/Organization/sliceOrganization";
import { useTableOrganization } from "../../../../core/hooks/AddOrganizationIntoUser/useTableOrganization";
import { ORGANIZATION } from "../../../../core/InfoText";
import { Button } from "../../../../common/Button";
import { Loader } from "../../../../common/Loader";
import { TableAction } from "../../../../common/styledTable";
import { LuSave } from "react-icons/lu";
import { useEffect } from "react";
import { resetUserState } from "../../../../store/User/sliceUser";

export const FormEditOrganizationUser = (fetchDataOrganizationUser, idUser) => {
  const dispatch = useDispatch();
  const { tableOrganization, fetchDataLoading, organizationChecked } =
    useTableOrganization(fetchDataOrganizationUser);
  const loadingEditUserOrganization = useSelector(
    selectLoadingEditUsersOrganization
  );
  const confirmEditUserOrganization = useSelector(selectEditUsersOrganization);

  useEffect(() => {
    if (confirmEditUserOrganization) {
      console.log("Koniec");
      dispatch(resetUserState());
    }
  }, [confirmEditUserOrganization]);

  const SubmitOrganizationUser = (event) => {
    event.preventDefault();

    dispatch(
      fetchEditUserOrganization({
        idUser: parseInt(idUser),
        idOrganization: organizationChecked,
      })
    );
  };

  const formEditOrganizationUser = (
    <form onSubmit={SubmitOrganizationUser}>
      {fetchDataLoading ? (
        <Loader margin="30px auto" />
      ) : (
        <>
          {tableOrganization}
          <TableAction justify={"start"}>
            {loadingEditUserOrganization ? (
              <Loader margin="0 0 3px 0" />
            ) : (
              <Button
                text={ORGANIZATION.CHANGED_ORGANIZATION}
                typeAction="add"
                icon={<LuSave size={"15px"} />}
                type="submit"
              />
            )}
          </TableAction>
        </>
      )}
    </form>
  );

  return { formEditOrganizationUser };
};
