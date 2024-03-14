import { Button } from "../../../../common/Button";
import { Loader } from "../../../../common/Loader";
import { TableAction } from "../../../../common/styledTable";
import { ORGANIZATION } from "../../../../core/InfoText";
import { useTableOrganization } from "../../../../core/hooks/AddOrganizationIntoUser/useTableOrganization";
import { LuSave } from "react-icons/lu";

export const FormEditOrganizationUser = (fetchDataOrganizationUser) => {
  const {
    tableOrganization,
    fetchDataLoading,
    addUserIntoOrganization,
    organizationChecked, // dla dispach dane do wysłania
  } = useTableOrganization(fetchDataOrganizationUser);

  const SubmitOrganizationUser = (event) => {
    event.preventDefault();
    addUserIntoOrganization();
  };

  const formEditOrganizationUser = (
    <form onSubmit={SubmitOrganizationUser}>
      {fetchDataLoading ? (
        <Loader margin=" 30px auto" />
      ) : (
        <>
          {tableOrganization}
          <TableAction justify={"start"}>
            <Button
              text={ORGANIZATION.CHANGED_ORGANIZATION}
              typeAction="add"
              icon={<LuSave size={"15px"} />}
              type="submit"
            />
          </TableAction>
        </>
      )}
    </form>
  );

  return { formEditOrganizationUser };
};
